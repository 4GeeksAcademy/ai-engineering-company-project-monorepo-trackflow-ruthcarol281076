/* Interacciones estáticas de TrackFlow. No se envía ni persiste información del formulario. */
(() => {
  'use strict';
  const query = (selector, root = document) => root.querySelector(selector);
  const queryAll = (selector, root = document) => [...root.querySelectorAll(selector)];
  const t = (text) => window.trackflowI18n?.t(text) || text;

  const createToast = () => {
    const element = query('#toast');
    if (!element) return null;
    return (message, error = false) => {
      const icon = query('#toast-icon'); const label = query('#toast-message');
      if (!icon || !label) return;
      label.textContent = message; icon.textContent = error ? '!' : '✓';
      icon.className = `grid h-9 w-9 place-items-center rounded-full ${error ? 'bg-coralbrand/15 text-coralbrand' : 'bg-[var(--accent-light)] text-[#775d00]'} font-extrabold`;
      element.setAttribute('aria-hidden', 'false'); element.classList.add('show');
      window.clearTimeout(window.toastTimer);
      window.toastTimer = window.setTimeout(() => { element.classList.remove('show'); element.setAttribute('aria-hidden', 'true'); }, 4200);
    };
  };

  const initializeLandingPage = (toast) => {
    const menuToggle = query('#menu-toggle'); const mobileMenu = query('#mobile-menu');
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => { const open = mobileMenu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
      queryAll('#mobile-menu a').forEach((link) => link.addEventListener('click', () => { mobileMenu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
    }
    const authModal = query('#auth-modal');
    if (authModal) {
      let authTrigger = null;
      const setAuthMode = (mode) => {
        queryAll('.auth-form', authModal).forEach((form) => form.classList.toggle('active', form.id === `${mode}-form`));
        const title = query('#auth-title', authModal); if (title) title.textContent = t(mode === 'login' ? 'Accede a tu operación' : 'Crea tu acceso al hub');
        const notice = query('#register-simulation-notice', authModal);
        if (notice) notice.hidden = mode !== 'register';
      };
      const closeAuthModal = () => { if (!authModal.classList.contains('open')) return; authModal.classList.remove('open'); authModal.inert = true; authModal.setAttribute('aria-hidden', 'true'); if (authTrigger?.isConnected) authTrigger.focus(); };
      const openAuthModal = (trigger, mode) => { authTrigger = trigger.closest('#mobile-menu') ? menuToggle : trigger; setAuthMode(mode); authModal.inert = false; authModal.setAttribute('aria-hidden', 'false'); authModal.classList.add('open'); mobileMenu?.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false'); query('.auth-form.active input', authModal)?.focus(); };
      const focusable = () => queryAll('button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])', authModal).filter((el) => el.getClientRects().length);
      queryAll('.auth-form', authModal).forEach((form) => form.addEventListener('submit', (event) => {
        event.preventDefault(); const password = query('#register-password', form); const confirmation = query('#register-confirm', form);
        if (form.id === 'register-form' && password?.value !== confirmation?.value) { toast?.(t('Las contraseñas deben coincidir.'), true); confirmation?.focus(); return; }
        closeAuthModal(); form.reset(); toast?.(t(form.id === 'login-form' ? 'Sesión simulada iniciada. Bienvenido al hub.' : 'Acceso simulado creado. Te esperamos en TrackFlow'));
      }));
      queryAll('[data-open-auth]').forEach((button) => button.addEventListener('click', () => openAuthModal(button, button.dataset.openAuth)));
      queryAll('[data-switch-auth]').forEach((button) => button.addEventListener('click', () => { setAuthMode(button.dataset.switchAuth); query('.auth-form.active input', authModal)?.focus(); }));
      query('#close-auth', authModal)?.addEventListener('click', closeAuthModal);
      authModal.addEventListener('click', (event) => { if (event.target === authModal) closeAuthModal(); });
      document.addEventListener('keydown', (event) => {
        if (!authModal.classList.contains('open')) return;
        if (event.key === 'Escape') { event.preventDefault(); closeAuthModal(); }
        if (event.key === 'Tab') { const items = focusable(); if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items.at(-1)?.focus(); } else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); items[0]?.focus(); } }
      });
    }
    const trackingForm = query('#tracking-form');
    if (trackingForm) trackingForm.addEventListener('submit', (event) => {
      event.preventDefault(); const code = (query('#tracking-code')?.value || '').trim().toUpperCase(); const result = query('#tracking-result'); if (!result) return;
      if (code.length < 6) { result.innerHTML = `<div class="flex items-center gap-3 text-coralbrand"><span class="status-dot coral"></span><div><strong class="block">${t('Código no reconocido')}</strong><span class="text-xs font-semibold">${t('Prueba con TRK-LAX-ZAZ.')}</span></div></div>`; toast?.(t('Introduce un código de seguimiento válido.'), true); return; }
      const delivered = code.includes('ZAZ'); const safeCode = code.replace(/[&<>"']/g, (ch) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[ch]);
      result.innerHTML = `<div class="flex items-center gap-3"><span class="status-dot ${delivered ? 'done' : 'coral'}"></span><div><strong class="block">${t(delivered ? 'En tránsito hacia Zaragoza' : 'Estado consultado')}</strong><span class="text-xs font-semibold opacity-60">${safeCode} · DHL Express · ${t('Actualizado ahora')}</span></div></div><div class="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold"><div><div class="mb-2 h-2 rounded-full bg-primary-teal"></div>${t('Recogido')}</div><div><div class="mb-2 h-2 rounded-full bg-primary-teal"></div>${t('En tránsito')}</div><div><div class="mb-2 h-2 rounded-full ${delivered ? 'bg-goldbrand' : 'bg-[var(--primary-bg)]'}"></div>${t('Entregado')}</div></div>`;
      toast?.(`${t('Seguimiento actualizado para')} ${code}.`);
    });
  };

  const initializeApplicationForm = () => {
    const form = query('#contact-form'); if (!form || !query('#form-errors')) return;
    const summary = query('#form-errors');
    const fields = { company:query('#company'), contactName:query('#contact-name'), email:query('#email'), phone:query('#phone'), website:query('#website'), country:query('#country'), product:query('#product'), volume:query('#volume'), comments:query('#comments'), privacy:query('#privacy') };
    const serviceOptions = queryAll('input[name="services"]', form); const currentOptions = queryAll('input[name="current3pl"]', form);
    const keys = ['company','contactName','email','phone','website','country','product','volume','services','current3pl','comments','privacy'];
    if (Object.values(fields).some((field) => !field) || !serviceOptions.length || !currentOptions.length) return;
    const messages = {
      company:'El nombre de la empresa debe tener al menos 2 caracteres', contactName:'Ingresa nombre y apellido del contacto', email:'Ingresa un email corporativo válido (ejemplo: <nombre@empresa.com>)',
      phone:'El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)', website:'Si incluyes sitio web, debe ser una URL válida', country:'Selecciona el país de operación principal',
      product:'Selecciona el tipo de producto que manejas', volume:'Selecciona el volumen mensual estimado', services:'Selecciona al menos un servicio de interés',
      current3pl:'Indica si actualmente trabajas con otro proveedor logístico', comments:'Los comentarios no pueden exceder 500 caracteres', privacy:'Debes aceptar la política de privacidad para continuar'
    };
    const errorFor = (key) => query(`#error-${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`);
    const controlsFor = (key) => key === 'services' ? serviceOptions : key === 'current3pl' ? currentOptions : fields[key] ? [fields[key]] : [];
    const showError = (key, message) => {
      const target = errorFor(key); if (target) { target.textContent = message; target.hidden = !message; }
      controlsFor(key).forEach((control) => { if (message) control.setAttribute('aria-invalid','true'); else control.removeAttribute('aria-invalid'); });
    };
    const lang=()=>document.documentElement.lang==='en';
    const validators = {
      company:() => fields.company.value.trim().length >= 2 ? '' : t(messages.company),
      contactName:() => fields.contactName.value.trim().split(/\s+/).filter(Boolean).length >= 2 ? '' : t(messages.contactName),
      email:() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim()) ? '' : t(messages.email),
      phone:() => /^\+\d{1,3}(?:[\s().-]*\d){6,14}$/.test(fields.phone.value.trim()) ? '' : t(messages.phone),
      website:() => { const value=fields.website.value.trim(); if (!value) return ''; try { const url=new URL(value); return ['http:','https:'].includes(url.protocol) && Boolean(url.hostname) ? '' : t(messages.website); } catch { return t(messages.website); } },
      country:() => fields.country.value ? '' : t(messages.country), product:() => fields.product.value ? '' : t(messages.product), volume:() => fields.volume.value ? '' : t(messages.volume),
      services:() => serviceOptions.some((option) => option.checked) ? '' : t(messages.services),
      current3pl:() => currentOptions.some((option) => option.checked) ? '' : t(messages.current3pl),
      comments:() => fields.comments.value.length <= 500 ? '' : `${t(messages.comments)} (${lang() ? `${fields.comments.value.length-500} over limit` : `quedan ${Math.max(0,500-fields.comments.value.length)}`})`,
      privacy:() => fields.privacy.checked ? '' : t(messages.privacy)
    };
    const panels = queryAll('[data-step-panel]',form); const stepStatus=query('#step-status'); const progress=query('[role="progressbar"]'); const fill=query('#progress-fill');
    const previous=query('#previous-step'); const next=query('#next-step'); const submit=query('#submit-inquiry'); const success=query('#success-message'); const dialog=query('#volume-dialog');
    let step=1; let attempted=new Set(); let allowLowVolume=false; let lowVolumeDismissed=false; let pendingLowVolumeSubmit=false; let completed=false;
    const stepKeys={1:['company','contactName','email','phone','website'],2:['country','product','volume','services','current3pl'],3:['comments','privacy']};
    const stepTitle={1:'Paso 1 de 3: Empresa y contacto',2:'Paso 2 de 3: Operación y servicios',3:'Paso 3 de 3: Comentarios y privacidad'};
    const renderStep=({focus=true}={})=>{
      panels.forEach((panel)=>{panel.hidden=Number(panel.dataset.stepPanel)!==step;});
      stepStatus.textContent=t(stepTitle[step]); progress.setAttribute('aria-valuenow',String(step)); progress.setAttribute('aria-valuetext', t(stepTitle[step])); fill.style.width=`${step*100/3}%`;
      previous.hidden=step===1; next.hidden=step===3; submit.hidden=step!==3;
      if(focus){const heading=query('h2',panels[step-1]); if(heading){heading.tabIndex=-1;heading.focus();}}
    };
    const validateKeys=(list)=>{const errors=[];list.forEach((key)=>{const message=validators[key]();showError(key,message);if(message)errors.push(key);});return errors;};
    const focusFirst=(key)=>{const target=controlsFor(key)[0]||errorFor(key);target?.focus();};
    const updateSummary=(failures)=>{summary.hidden=!failures.length; const labels={company:'Empresa',contactName:'Persona de contacto',email:'Email corporativo',phone:'Teléfono',website:'Sitio web de la empresa',country:'País de operación principal',product:'Tipo de producto',volume:'Volumen mensual estimado de envíos',services:'Servicios de interés',current3pl:'Proveedor logístico actual',comments:'Comentarios',privacy:'Política de privacidad'}; summary.textContent=failures.length?`${t('Revisa los campos señalados para poder enviar la solicitud.')} ${failures.map((key)=>t(labels[key])).join(', ')}`:'';};
    const currentFailures=()=>keys.filter((key)=>attempted.has(key)&&validators[key]());
    const updateCount=()=>{const n=fields.comments.value.length;query('#comments-count').textContent=lang()?`${n}/500 characters`:`${n}/500 caracteres`;};
    const doSuccess=()=>{completed=true; success.hidden=false; success.focus(); submit.disabled=true; submit.classList.add('opacity-60');};
    const closeDialog=()=>{if(dialog?.open)dialog.close();};
    const lowVolumeSelected=()=>fields.volume.value==='0-100'&&Boolean(fields.product.value);
    const openLowVolumeDialog=(fromSubmit=false)=>{pendingLowVolumeSubmit=fromSubmit;if(dialog?.showModal){if(!dialog.open)dialog.showModal();}else query('#confirm-volume').focus();};
    const maybePromptLowVolume=()=>{if(!lowVolumeSelected()){allowLowVolume=false;lowVolumeDismissed=false;return;}if(!allowLowVolume&&!lowVolumeDismissed)openLowVolumeDialog(false);};
    const maybeSubmit=()=>{
      const failures=validateKeys(keys); attempted=new Set(keys); updateSummary(failures);
      if(failures.length){const first=failures[0];step=stepFor(first);renderStep({focus:false});focusFirst(first);return;}
      if(lowVolumeSelected()&&!allowLowVolume){openLowVolumeDialog(true);return;}
      doSuccess();
    };
    function stepFor(key){return Number(Object.keys(stepKeys).find((n)=>stepKeys[n].includes(key)))||1;}
    form.addEventListener('submit',(event)=>{event.preventDefault();if(!completed)maybeSubmit();});
    next.addEventListener('click',()=>{attempted=new Set([...attempted,...stepKeys[step]]);const failures=validateKeys(stepKeys[step]);if(failures.length){updateSummary(failures);focusFirst(failures[0]);return;}updateSummary(currentFailures());step=Math.min(3,step+1);renderStep();});
    previous.addEventListener('click',()=>{updateSummary(currentFailures());step=Math.max(1,step-1);renderStep();});
    form.addEventListener('input',(event)=>{
      if(event.target===fields.comments)updateCount();
      const key=event.target.name==='services'?'services':event.target.name==='current3pl'?'current3pl':keys.find((item)=>fields[item]===event.target);
      if(key&&attempted.has(key))showError(key,validators[key]()); if(!summary.hidden)updateSummary(currentFailures());
    });
    form.addEventListener('change',(event)=>{const key=event.target.name==='services'?'services':event.target.name==='current3pl'?'current3pl':keys.find((item)=>fields[item]===event.target);if(key&&attempted.has(key))showError(key,validators[key]());if(!summary.hidden)updateSummary(currentFailures());if(event.target===fields.volume||event.target===fields.product)maybePromptLowVolume();});
    form.addEventListener('focusout',(event)=>{const key=event.target.name==='services'?'services':event.target.name==='current3pl'?'current3pl':keys.find((item)=>fields[item]===event.target);if(key){attempted.add(key);showError(key,validators[key]());if(!summary.hidden)updateSummary(currentFailures());}});
    query('#confirm-volume').addEventListener('click',()=>{const resumeSubmit=pendingLowVolumeSubmit;allowLowVolume=true;lowVolumeDismissed=false;pendingLowVolumeSubmit=false;closeDialog();if(resumeSubmit)maybeSubmit();});
    query('#cancel-volume').addEventListener('click',()=>{const wasSubmit=pendingLowVolumeSubmit;allowLowVolume=false;lowVolumeDismissed=!wasSubmit;pendingLowVolumeSubmit=false;closeDialog();fields.volume.focus();});
    dialog?.addEventListener('close',()=>{if(!completed)fields.volume.focus();});
    form.addEventListener('reset',()=>{closeDialog();window.setTimeout(()=>{step=1;attempted=new Set();allowLowVolume=false;lowVolumeDismissed=false;pendingLowVolumeSubmit=false;completed=false;summary.hidden=true;summary.textContent='';keys.forEach((key)=>showError(key,''));success.hidden=true;submit.disabled=false;submit.classList.remove('opacity-60');updateCount();renderStep({focus:false});},0);});
    document.addEventListener('trackflow:languagechange',()=>{stepStatus.textContent=t(stepTitle[step]);updateCount();keys.forEach((key)=>{if(attempted.has(key))showError(key,validators[key]());});if(!summary.hidden)updateSummary(currentFailures());});
    renderStep({focus:false}); updateCount();
  };

  const initialize = () => { const toast=createToast(); initializeLandingPage(toast); initializeApplicationForm(); };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});else initialize();
})();
