/* Interacciones y validaciones compartidas por las páginas del website TrackFlow. */
(() => {
  'use strict';

  const query = (selector, root = document) => root.querySelector(selector);
  const queryAll = (selector, root = document) => [...root.querySelectorAll(selector)];

  const createToast = () => {
    const toastElement = query('#toast');
    if (!toastElement) return null;

    return (message, error = false) => {
      const icon = query('#toast-icon');
      const messageElement = query('#toast-message');
      if (!icon || !messageElement) return;

      messageElement.textContent = message;
      icon.textContent = error ? '!' : '✓';
      icon.className = `grid h-9 w-9 place-items-center rounded-full ${error ? 'bg-coralbrand/15 text-coralbrand' : 'bg-[var(--accent-light)] text-[#775d00]'} font-extrabold`;
      toastElement.setAttribute('aria-hidden', 'false');
      toastElement.classList.add('show');
      window.clearTimeout(window.toastTimer);
      window.toastTimer = window.setTimeout(() => {
        toastElement.classList.remove('show');
        toastElement.setAttribute('aria-hidden', 'true');
      }, 4200);
    };
  };

  const initializeLandingPage = (toast) => {
    const menuToggle = query('#menu-toggle');
    const mobileMenu = query('#mobile-menu');
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(open));
      });
      queryAll('#mobile-menu a').forEach((link) => link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }));
    }

    const authModal = query('#auth-modal');
    if (authModal) {
      let authTrigger = null;
      const setAuthMode = (mode) => {
        queryAll('.auth-form', authModal).forEach((form) => form.classList.toggle('active', form.id === `${mode}-form`));
        const title = query('#auth-title', authModal);
        if (title) title.textContent = mode === 'login' ? 'Accede a tu operación' : 'Crea tu acceso al hub';
      };
      const closeAuthModal = () => {
        if (!authModal.classList.contains('open')) return;
        authModal.classList.remove('open');
        authModal.inert = true;
        authModal.setAttribute('aria-hidden', 'true');
        if (authTrigger?.isConnected) authTrigger.focus();
      };
      const openAuthModal = (trigger, mode) => {
        authTrigger = trigger.closest('#mobile-menu') ? menuToggle : trigger;
        setAuthMode(mode);
        authModal.inert = false;
        authModal.setAttribute('aria-hidden', 'false');
        authModal.classList.add('open');
        mobileMenu?.classList.remove('open');
        menuToggle?.setAttribute('aria-expanded', 'false');
        query('.auth-form.active input', authModal)?.focus();
      };
      const getModalFocusable = () => queryAll('button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])', authModal)
        .filter((element) => element.getClientRects().length > 0);

      queryAll('.auth-form', authModal).forEach((form) => form.addEventListener('submit', (event) => {
        event.preventDefault();
        const password = query('#register-password', form);
        const confirmation = query('#register-confirm', form);
        if (form.id === 'register-form' && password?.value !== confirmation?.value) {
          toast?.('Las contraseñas deben coincidir.', true);
          confirmation?.focus();
          return;
        }
        closeAuthModal();
        form.reset();
        toast?.(form.id === 'login-form' ? 'Sesión simulada iniciada. Bienvenido al hub.' : 'Acceso creado. Te esperamos en TrackFlow.');
      }));
      queryAll('[data-open-auth]').forEach((button) => button.addEventListener('click', () => openAuthModal(button, button.dataset.openAuth)));
      queryAll('[data-switch-auth]').forEach((button) => button.addEventListener('click', () => {
        setAuthMode(button.dataset.switchAuth);
        query('.auth-form.active input', authModal)?.focus();
      }));
      query('#close-auth', authModal)?.addEventListener('click', closeAuthModal);
      authModal.addEventListener('click', (event) => {
        if (event.target === authModal) closeAuthModal();
      });
      document.addEventListener('keydown', (event) => {
        if (!authModal.classList.contains('open')) return;
        if (event.key === 'Escape') {
          event.preventDefault();
          closeAuthModal();
        }
        if (event.key === 'Tab') {
          const focusable = getModalFocusable();
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }
      });
    }

    const contactForm = query('#contact-form');
    if (contactForm && !query('#form-errors')) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast?.('Solicitud recibida. El equipo de TrackFlow te responderá pronto.');
      });
    }

    const trackingForm = query('#tracking-form');
    if (trackingForm) {
      trackingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const code = (query('#tracking-code')?.value || '').trim().toUpperCase();
        const result = query('#tracking-result');
        if (!result) return;
        if (code.length < 6) {
          result.innerHTML = '<div class="flex items-center gap-3 text-coralbrand"><span class="status-dot coral"></span><div><strong class="block">Código no reconocido</strong><span class="text-xs font-semibold">Prueba con TRK-LAX-ZAZ.</span></div></div>';
          toast?.('Introduce un código de seguimiento válido.', true);
          return;
        }
        const delivered = code.includes('ZAZ');
        const safeCode = code.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
        result.innerHTML = `<div class="flex items-center gap-3"><span class="status-dot ${delivered ? 'done' : 'coral'}"></span><div><strong class="block">${delivered ? 'En tránsito hacia Zaragoza' : 'Estado consultado'}</strong><span class="text-xs font-semibold opacity-60">${safeCode} · DHL Express · Actualizado ahora</span></div></div><div class="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold"><div><div class="mb-2 h-2 rounded-full bg-primary-teal"></div>Recogido</div><div><div class="mb-2 h-2 rounded-full bg-primary-teal"></div>En tránsito</div><div><div class="mb-2 h-2 rounded-full ${delivered ? 'bg-goldbrand' : 'bg-[var(--primary-bg)]'}"></div>Entregado</div></div>`;
        toast?.(`Seguimiento actualizado para ${code}.`);
      });
    }
  };

  const initializeApplicationForm = () => {
    const form = query('#contact-form');
    if (!form || !query('#form-errors')) return;

    const errorSummary = query('#form-errors');
    const fields = {
      company: query('#company'),
      contactName: query('#contact-name'),
      email: query('#email'),
      phone: query('#phone'),
      website: query('#website'),
      country: query('#country'),
      product: query('#product'),
      volume: query('#volume'),
      comments: query('#comments'),
      privacy: query('#privacy'),
    };
    const serviceOptions = queryAll('input[name="services"]', form);
    const current3plOptions = queryAll('input[name="current3pl"]', form);
    if (Object.values(fields).some((field) => !field) || !serviceOptions.length || !current3plOptions.length) return;

    const messages = {
      company: 'El nombre de la empresa debe tener al menos 2 caracteres',
      contactName: 'Ingresa nombre y apellido del contacto',
      email: 'Ingresa un email corporativo válido (ejemplo: <nombre@empresa.com>)',
      phone: 'El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)',
      website: 'Si incluyes sitio web, debe ser una URL válida',
      country: 'Selecciona el país de operación principal',
      product: 'Selecciona el tipo de producto que manejas',
      volume: 'Selecciona el volumen mensual estimado',
      services: 'Selecciona al menos un servicio de interés',
      current3pl: 'Indica si actualmente trabajas con otro proveedor logístico',
      comments: 'Los comentarios no pueden exceder 500 caracteres',
      privacy: 'Debes aceptar la política de privacidad para continuar',
    };
    const errorIdFor = (key) => `error-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;
    const errorElementFor = (key) => query(`#${errorIdFor(key)}`);
    const showFieldError = (key, message = '') => {
      const errorElement = errorElementFor(key);
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.hidden = !message;
      }
      const controls = key === 'services' ? serviceOptions
        : key === 'current3pl' ? current3plOptions
          : fields[key] ? [fields[key]] : [];
      controls.forEach((control) => {
        if (message) control.setAttribute('aria-invalid', 'true');
        else control.removeAttribute('aria-invalid');
      });
    };
    const hasTwoNames = (value) => value.trim().split(/\s+/).filter(Boolean).length >= 2;
    const phonePattern = /^\+\d{1,3}(?:[\s().-]*\d){6,14}$/;
    const validateEmail = (value) => {
      const email = value.trim();
      if (!email) return messages.email;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : messages.email;
    };
    const validators = {
      company: () => fields.company.value.trim().length >= 2 ? '' : messages.company,
      contactName: () => hasTwoNames(fields.contactName.value) ? '' : messages.contactName,
      email: () => validateEmail(fields.email.value),
      phone: () => phonePattern.test(fields.phone.value.trim()) ? '' : messages.phone,
      website: () => {
        const value = fields.website.value.trim();
        return !value || (fields.website.validity.valid && /^https?:\/\//i.test(value)) ? '' : messages.website;
      },
      country: () => fields.country.value ? '' : messages.country,
      product: () => fields.product.value ? '' : messages.product,
      volume: () => fields.volume.value ? '' : messages.volume,
      services: () => serviceOptions.some((option) => option.checked) ? '' : messages.services,
      current3pl: () => current3plOptions.some((option) => option.checked) ? '' : messages.current3pl,
      comments: () => fields.comments.value.length <= 500 ? '' : `${messages.comments} (quedan ${500 - fields.comments.value.length})`,
      privacy: () => fields.privacy.checked ? '' : messages.privacy,
    };
    const validateField = (key) => {
      const message = validators[key]();
      showFieldError(key, message);
      return message;
    };
    const collectValidationErrors = () => Object.keys(validators).filter((key) => validateField(key));
    const controlsFor = (key) => key === 'services' ? serviceOptions
      : key === 'current3pl' ? current3plOptions
        : fields[key] ? [fields[key]] : [];
    let hasSubmitted = false;

    fields.comments.addEventListener('input', () => {
      query('#comments-count').textContent = `${fields.comments.value.length}/500 caracteres`;
    });
    form.addEventListener('input', (event) => {
      if (!event.target.matches('input,select,textarea')) return;
      errorSummary.classList.add('hidden');
      if (!hasSubmitted) return;
      const key = event.target.name === 'services' ? 'services'
        : event.target.name === 'current3pl' ? 'current3pl'
          : Object.keys(fields).find((fieldKey) => fields[fieldKey] === event.target);
      if (key) validateField(key);
    });
    form.addEventListener('change', (event) => {
      if (!hasSubmitted) return;
      const key = event.target.name === 'services' ? 'services'
        : event.target.name === 'current3pl' ? 'current3pl'
          : Object.keys(fields).find((fieldKey) => fields[fieldKey] === event.target);
      if (key) validateField(key);
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      hasSubmitted = true;
      const failures = collectValidationErrors();
      errorSummary.classList.toggle('hidden', failures.length === 0);
      errorSummary.textContent = failures.length ? 'Revisa los campos señalados para poder enviar la solicitud.' : '';
      if (failures.length) {
        controlsFor(failures[0])[0]?.focus();
        return;
      }

      const warning = query('#low-volume-warning');
      if (fields.volume.value === '0-100') {
        warning?.classList.remove('hidden');
        if (!window.confirm('Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?')) return;
      } else warning?.classList.add('hidden');

      const success = query('#success-message');
      success?.classList.remove('hidden');
      success?.focus();
      const submitButton = query('button[type="submit"]', form);
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.classList.add('opacity-60');
      }
    });
  };

  const initialize = () => {
    const toast = createToast();
    initializeLandingPage(toast);
    initializeApplicationForm();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
