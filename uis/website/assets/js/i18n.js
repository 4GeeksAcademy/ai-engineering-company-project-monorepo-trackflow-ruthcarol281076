/* Localización de las dos páginas públicas. Solo se guarda la preferencia de idioma. */
(() => {
  'use strict';
  const STORAGE_KEY = 'trackflow-language-v1';
  const translations = {
    'TrackFlow | Logística para e-commerce en EE. UU. y España': 'TrackFlow | E-commerce logistics in the US and Spain',
    'TrackFlow | Logística que escala con tu e-commerce': 'TrackFlow | Logistics that scales with your e-commerce',
    'TrackFlow | Logistics that scales with your e-commerce': 'TrackFlow | Logistics that scales with your e-commerce',
    'Solicitar información | TrackFlow': 'Request information | TrackFlow',
    'Volver a TrackFlow': 'Back to TrackFlow', 'Solicitud comercial': 'Business inquiry',
    'Cuéntanos sobre tu operación logística': 'Tell us about your logistics operations',
    'Empresa y contacto': 'Company and contact', 'Operación y servicios': 'Operations and services', 'Comentarios y privacidad': 'Comments and privacy',
    'Selecciona una opción': 'Select an option', 'Estados Unidos': 'United States', 'España': 'Spain', 'Ambos': 'Both', 'Otro': 'Other',
    'Moda': 'Fashion', 'Electrónica': 'Electronics', 'Cosmética': 'Cosmetics', 'Alimentación': 'Food', 'No estoy seguro': 'Not sure',
    'Cuéntanos sobre tu operación logística': 'Tell us about your logistics operations',
    'Confirma tu volumen': 'Confirm your volume', 'Volver al formulario': 'Back to the form', 'Sí, continuar': 'Yes, continue',
    'Volver a TrackFlow': 'Back to TrackFlow', 'Solicitud comercial': 'Business inquiry',
    'Todos los derechos reservados.': 'All rights reserved.', 'Tu siguiente envío empieza aquí.': 'Your next shipment starts here.',
    'Cuéntanos cómo operas hoy entre países y completa la solicitud comercial para que nuestro equipo pueda conocer tus necesidades.': 'Tell us how you operate across countries and complete the business inquiry so our team can understand your needs.',
    'Los Ángeles:': 'Los Angeles:', 'Conversemos': 'Let’s talk',
    'Esta confirmación es una simulación; los datos no se han enviado ni almacenado.': 'This confirmation is a simulation; the data has not been sent or stored.',
    'Todos los derechos reservados.': 'All rights reserved.', 'Cargando…': 'Loading…',
    'Almacenaje': 'Warehousing', 'Última milla': 'Last mile', 'Logística inversa': 'Reverse logistics',
    'Sí': 'Yes', 'No': 'No', 'Estoy evaluando opciones': 'I am evaluating options', '(opcional)': '(optional)',
    'Acepto la': 'I accept the', 'política de privacidad': 'privacy policy', 'Consultar sobre privacidad': 'Ask about privacy', 'Volver al formulario': 'Back to the form', 'Sí, continuar': 'Yes, continue',
    'Confirma tu volumen': 'Confirm your volume', 'Solicitud comercial': 'Business inquiry',
    'Paso 1 de 3: Empresa y contacto': 'Step 1 of 3: Company and contact', 'Paso 2 de 3: Operación y servicios': 'Step 2 of 3: Operations and services', 'Paso 3 de 3: Comentarios y privacidad': 'Step 3 of 3: Comments and privacy',
    'Empresa y contacto': 'Company and contact', 'Operación y servicios': 'Operations and services', 'Comentarios y privacidad': 'Comments and privacy', 'Progreso del formulario': 'Form progress', 'Revisa los campos señalados para poder enviar la solicitud.': 'Review the marked fields before submitting your inquiry.', 'Empresa': 'Company', 'País de operación principal': 'Main operating country', 'Solicitud comercial': 'Business inquiry', 'Teléfono': 'Phone', 'Email corporativo': 'Business email', 'Persona de contacto': 'Contact person', 'Comentarios o necesidades específicas': 'Comments or specific needs', 'Tipo de producto': 'Product type', 'Volumen mensual estimado de envíos': 'Estimated monthly shipment volume', 'Servicios de interés': 'Services of interest', 'Proveedor logístico actual': 'Current logistics provider', 'Comentarios': 'Comments', 'Política de privacidad': 'Privacy policy',
    'Inicio': 'Home', 'Nosotros': 'About us', 'Servicios': 'Services', 'Gestión': 'Management', 'Cobertura': 'Coverage', 'Contacto': 'Contact',
    'Portal de clientes': 'Customer portal', 'Abrir menú': 'Open menu', 'TrackFlow inicio': 'TrackFlow home', 'Cerrar menú': 'Close menu',
    'TrackFlow inicio': 'TrackFlow home', 'TrackFlow, inicio': 'TrackFlow, home',
    'TrackFlow Tech - LA + ZARAGOZA': 'TrackFlow Tech - LA + ZARAGOZA',
    'Menos Whatsapp. Más señales.': 'Less WhatsApp. More signals.',
    'Acceso simulado creado. Te esperamos en TrackFlow': 'Simulated access created. We look forward to seeing you at TrackFlow.',
    'El registro es una simulación: no se crea una cuenta real ni se envían datos.': 'Registration is a simulation: no real account is created and no data is sent.',
    'Logística que escala con tu e-commerce': 'Logistics that scales with your e-commerce',
    'Gestión de almacenes, entregas de última milla y logística inversa en Estados Unidos y España. Más de 15 años ayudando a marcas de moda, electrónica y cosmética a crecer sin preocuparse por la operación.': 'Warehouse management, last-mile deliveries, and reverse logistics in the United States and Spain. Over 15 years helping fashion, electronics, and cosmetics brands grow without worrying about operations.',
    'Solicitar información': 'Request information', 'Ver servicios': 'View services',
    'Simulador visual de seguimiento de paquete': 'Visual shipment-tracking demo',
    'Envío en movimiento': 'Shipment in motion', 'En tránsito': 'In transit', 'Los Ángeles': 'Los Angeles',
    'Hub operativo': 'Operational hub', '8 transportistas integrados': '8 integrated carriers',
    'Transportista': 'Carrier', 'Asignación inteligente': 'Smart assignment', 'Próximo hito': 'Next milestone',
    'Aduana liberada': 'Customs cleared', 'Actualizado hace 4 min': 'Updated 4 minutes ago',
    'Cada evento queda listo para tu equipo y tu cliente final.': 'Every event is available to your team and end customer.',
    'La operación completa': 'End-to-end operations', 'Una plataforma para cada tramo.': 'One platform for every stage.',
    'TrackFlow Tech convierte los puntos ciegos operativos en señales claras para que tu marca pueda crecer sin adivinar.': 'TrackFlow Tech turns operational blind spots into clear signals so your brand can grow with confidence.',
    '01 · Almacén': '01 · Warehousing', 'Gestión de Almacenes': 'Warehouse Management',
    'Almacenamiento y preparación de pedidos para marcas de e-commerce en Los Ángeles y Zaragoza.': 'Storage and order fulfillment for e-commerce brands in Los Angeles and Zaragoza.',
    'Almacenamiento, picking y packing': 'Storage, picking, and packing', 'Inventario en tiempo real': 'Real-time inventory',
    'Almacenes en Los Ángeles y Zaragoza': 'Warehouses in Los Angeles and Zaragoza',
    '02 · Transporte': '02 · Delivery', 'Entregas de Última Milla': 'Last-Mile Deliveries',
    'Entregas del almacén al cliente final con seguimiento unificado en ambos mercados.': 'Deliveries from the warehouse to the end customer, with unified tracking across both markets.',
    'Red de carriers certificados en ambos países': 'Certified carrier network in both countries',
    'Seguimiento unificado de envíos': 'Unified shipment tracking', 'Gestión de incidencias y devoluciones': 'Incident and returns management',
    '03 · Devoluciones': '03 · Returns', 'Logística Inversa': 'Reverse Logistics',
    'Gestionamos el recorrido de vuelta de los productos para agilizar la experiencia posventa.': 'We manage the product-return journey to streamline the post-purchase experience.',
    'Gestión completa de devoluciones': 'Complete returns management', 'Inspección y reacondicionamiento': 'Inspection and reconditioning',
    'Integración con tu plataforma de ventas': 'Integration with your sales platform',
    'TrackFlow Tech · demostración': 'TrackFlow Tech · demonstration', 'Simulación de estado operativo': 'Operational status simulation', 'Consulta pública': 'Public lookup', 'Rastrear envío': 'Track shipment', 'Marca de ecommerce DTC': 'Direct-to-consumer e-commerce brand', 'Marca omnicanal de hogar': 'Omnichannel home-goods brand', 'Marcas que respiran mejor': 'Brands with peace of mind', 'Responsable de Operaciones': 'Operations Manager', 'Director de Supply': 'Supply Chain Director', 'El pulso de tu operación, ahora.': 'Your operations at a glance.',
    'La unidad TrackFlow Tech convierte los datos dispersos en señales útiles para operaciones, atención al cliente y dirección.': 'TrackFlow Tech turns scattered data into useful signals for operations, customer care, and leadership.',
    'Vista demostrativa': 'Demonstration view', 'Los Ángeles · Zaragoza · datos en consolidación': 'Los Angeles · Zaragoza · data being consolidated',
    'Sin histórico centralizado': 'No centralized history', 'Empleados': 'Employees',
    'Equipo distribuido entre EE. UU. y España': 'Team across the US and Spain', 'Facturación anual': 'Annual revenue', 'Empleados': 'Employees', 'Operarios de almacén': 'Warehouse staff', 'Consultas CX automatizables': 'Potentially automatable CX inquiries', 'Próximo hito': 'Next milestone', 'Asignación inteligente': 'Smart assignment', 'Actualizado hace 4 min': 'Updated 4 minutes ago', 'Cobertura nacional': 'Nationwide coverage', 'Cobertura peninsular e islas': 'Mainland and island coverage',
    'Dato del briefing corporativo': 'From the company brief', 'Consultas CX automatizables': 'Potentially automatable CX inquiries',
    'Consultas repetitivas identificadas por el equipo': 'Repetitive inquiries identified by the team', 'Operarios de almacén': 'Warehouse staff',
    '2 almacenes con visibilidad aún fragmentada': '2 warehouses with fragmented visibility', 'Red operativa': 'Operations network',
    'Datos verificados': 'Verified data', 'Transportistas integrados': 'Integrated carriers', 'Atención al cliente': 'Customer care', 'Operación completa': 'Complete operations', 'Almacén': 'Warehousing', 'Transporte': 'Transportation', 'Devoluciones': 'Returns', 'Servicios': 'Services', 'Cobertura': 'Coverage', 'Contacto': 'Contact', 'Conoce nuestros servicios': 'Explore our services', 'Ver servicios': 'View services', 'Portal de clientes': 'Customer portal', 'Menú': 'Menu', 'Cerrar menú': 'Close menu', 'Abrir menú': 'Open menu',
    '15 agentes': '15 agents', 'Logística inversa': 'Reverse logistics', '5 personas': '5 people', 'Tecnología': 'Technology',
    '7 personas': '7 people', 'Cobertura operativa': 'Operational coverage', 'Almacenes': 'Warehouses',
    'Transportistas': 'Carriers', 'UPS, FedEx, DHL, MRW, SEUR y locales': 'UPS, FedEx, DHL, MRW, SEUR, and local carriers',
    'Centro de acción ejecutivo': 'Executive action center', 'Una decisión clara antes del café.': 'A clear decision before your coffee.', 'Los Ángeles y Zaragoza': 'Los Angeles and Zaragoza', 'Datos verificados': 'Verified data', 'Dos mercados, una operación': 'Two markets, one operation', 'Datos en consolidación': 'Data being consolidated', '8 transportistas integrados': '8 integrated carriers', 'Sin histórico centralizado': 'No centralized history', 'El pulso de tu operación, ahora.': 'Your operations at a glance.',
    'El panel ejecutivo reúne los datos consolidados del negocio para reducir el trabajo manual de los informes semanales. Donde no hay información centralizada, lo deja explícito.': 'The executive dashboard brings together consolidated business data to reduce manual work on weekly reports. It makes gaps explicit wherever information is not centralized.',
    'Dirección ejecutiva': 'Executive leadership', 'Dos mercados, una operación': 'Two markets, one operation',
    'Cobertura en Estados Unidos y España': 'Coverage in the United States and Spain', 'Estados Unidos': 'United States',
    'Almacén en Los Ángeles': 'Warehouse in Los Angeles', 'Cobertura nacional': 'Nationwide coverage',
    'Carriers: UPS, FedEx, DHL': 'Carriers: UPS, FedEx, DHL', 'Cobertura peninsular e islas': 'Mainland and island coverage',
    'Carriers: MRW, SEUR, DHL': 'Carriers: MRW, SEUR, DHL', 'Consulta pública': 'Public lookup',
    '¿Dónde está tu paquete?': 'Where is your package?', 'Código de seguimiento': 'Tracking code', 'Rastrear envío': 'Track shipment',
    'Simulación de estado operativo': 'Operational status simulation',
    'TrackFlow no dispone aún de histórico público de puntualidad consolidado': 'TrackFlow does not yet have a consolidated public on-time performance history',
    'Recogido': 'Picked up', 'Entregado': 'Delivered', 'Menos WhatsApp. Más señales.': 'Less WhatsApp. More visibility.',
    'El equipo recibe contexto antes de que llegue la incidencia. El cliente final consulta el mismo estado, desde cualquier dispositivo.': 'Your team gets context before an issue occurs. End customers can check the same status from any device.',
    'Solicitar acceso al hub': 'Request hub access', 'Marcas que respiran mejor': 'Brands with peace of mind',
    'La tranquilidad también se mide.': 'Peace of mind can be measured, too.', 'Los Ángeles': 'Los Angeles', 'Zaragoza': 'Zaragoza', 'Responsable de Operaciones': 'Operations Manager',
    'Marca de ecommerce DTC': 'Direct-to-consumer e-commerce brand', '“TrackFlow nos devolvió el control de la operación después de la compra. La renovación anual dejó de depender de explicar incidencias y empezó a depender de datos.”': '“TrackFlow gave us control of post-purchase operations again. Annual renewal stopped depending on explaining issues and started depending on data.”',
    'Director de Supply': 'Supply Chain Director', 'Marca omnicanal de hogar': 'Omnichannel home-goods brand',
    '“Pasamos de perseguir a ocho transportistas por separado a tener una sola conversación operativa. La visibilidad reforzó la renovación del contrato anual.”': '“We went from chasing eight carriers separately to having one operational conversation. Visibility strengthened our annual contract renewal.”',
    'Por qué TrackFlow': 'Why TrackFlow', 'Una operación preparada para crecer contigo.': 'Operations ready to grow with you.',
    'Operación binacional': 'Cross-border operations', 'El único operador con infraestructura propia en Estados Unidos y España.': 'The only operator with owned infrastructure in the United States and Spain.',
    '+130 profesionales': '+130 professionals', 'Un equipo dedicado a tu logística.': 'A team dedicated to your logistics.',
    'Tecnología propia': 'In-house technology', 'Visibilidad total de tu inventario.': 'Full visibility of your inventory.',
    'Especialización e-commerce': 'E-commerce specialization', 'Experiencia en moda, electrónica y cosmética.': 'Experience in fashion, electronics, and cosmetics.',
    'Conversemos': 'Let’s talk', 'Tu siguiente envío empieza aquí.': 'Your next shipment starts here.',
    'Cuéntanos cómo operas hoy entre países y completa la solicitud comercial para que nuestro equipo pueda conocer tus necesidades.': 'Tell us how you operate across countries and complete the business inquiry so our team can understand your needs.',
    'Solicitar información': 'Request information', '© 2025 TrackFlow. Todos los derechos reservados.': '© 2025 TrackFlow. All rights reserved.',
    '(se abre en una pestaña nueva)': '(opens in a new tab)', 'Cerrar ventana': 'Close dialog', 'Portal TrackFlow': 'TrackFlow portal',
    'Accede a tu operación': 'Access your operations', 'Crea tu acceso al hub': 'Create your hub access',
    'Correo electrónico': 'Email address', 'Contraseña': 'Password', 'Iniciar sesión': 'Sign in', '¿No tienes cuenta?': 'No account yet?',
    'Regístrate': 'Register', 'Nombre completo': 'Full name', 'Confirmar contraseña': 'Confirm password',
    'Crear acceso': 'Create account', '¿Ya tienes cuenta?': 'Already have an account?', 'Inicia sesión': 'Sign in', 'Navegación principal': 'Main navigation', 'Acceso a TrackFlow': 'TrackFlow access',
    'Empresa': 'Company', 'Selecciona una opción': 'Select an option', 'Moda': 'Fashion', 'Electrónica': 'Electronics',
    'Cosmética': 'Cosmetics', 'Alimentación': 'Food', 'Otro': 'Other', 'Ambos': 'Both', 'No estoy seguro': 'Not sure',
    'Almacenaje': 'Warehousing', 'Última milla': 'Last mile', 'Sí': 'Yes', 'No': 'No', 'Estoy evaluando opciones': 'I am evaluating options',
    '(opcional)': '(optional)', 'Solicitud comercial': 'Business inquiry', 'Cuéntanos sobre tu operación logística': 'Tell us about your logistics operations',
    'Este formulario está pensado para empresas de e-commerce que buscan externalizar su logística. Comparte algunos datos para que nuestro equipo comercial pueda valorar tus necesidades.': 'This form is for e-commerce businesses considering outsourced logistics. Share a few details to describe your needs. This prototype does not send inquiries.',
    'Nombre de la empresa': 'Company name', 'Persona de contacto': 'Contact person', 'Email corporativo': 'Business email', 'Teléfono': 'Phone',
    'Sitio web de la empresa': 'Company website', 'País de operación principal': 'Main operating country', 'Solicitud comercial': 'Business inquiry', 'Teléfono': 'Phone', 'Email corporativo': 'Business email', 'Persona de contacto': 'Contact person', 'Comentarios o necesidades específicas': 'Comments or specific needs', 'Tipo de producto': 'Product type',
    'Volumen mensual estimado de envíos': 'Estimated monthly shipment volume', 'Servicios de interés': 'Services of interest',
    '¿Actualmente trabajas con otro 3PL?': 'Do you currently work with another 3PL?', 'Comentarios o necesidades específicas': 'Comments or specific needs',
    'Acepto la': 'I accept the', 'política de privacidad': 'privacy policy', 'Consultar sobre privacidad': 'Ask about privacy',
    'La solicitud se simula en este prototipo: no se transmite ni almacena información.': 'This request is simulated in this prototype: no information is transmitted or stored.',
    'Enviar solicitud': 'Submit inquiry', 'Anterior': 'Back', 'Continuar': 'Continue', 'Limpiar formulario': 'Reset form',
    'Paso 1 de 3: Empresa y contacto': 'Step 1 of 3: Company and contact', 'Paso 2 de 3: Operación y servicios': 'Step 2 of 3: Operations and services',
    'Paso 3 de 3: Comentarios y privacidad': 'Step 3 of 3: Comments and privacy',
    'Empresa y contacto': 'Company and contact', 'Operación y servicios': 'Operations and services', 'Comentarios y privacidad': 'Comments and privacy', 'Progreso del formulario': 'Form progress', 'Revisa los campos señalados para poder enviar la solicitud.': 'Review the marked fields before submitting your inquiry.', 'Empresa': 'Company', 'País de operación principal': 'Main operating country', 'Solicitud comercial': 'Business inquiry', 'Teléfono': 'Phone', 'Email corporativo': 'Business email', 'Persona de contacto': 'Contact person', 'Comentarios o necesidades específicas': 'Comments or specific needs', 'Tipo de producto': 'Product type', 'Volumen mensual estimado de envíos': 'Estimated monthly shipment volume', 'Servicios de interés': 'Services of interest', 'Proveedor logístico actual': 'Current logistics provider', 'Comentarios': 'Comments', 'Política de privacidad': 'Privacy policy',
    'Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?': 'For volumes under 100 monthly shipments, our services might not be the most efficient solution. Are you sure you want to continue?',
    '¡Gracias por tu interés en TrackFlow!': 'Thank you for your interest in TrackFlow!',
    'Hemos recibido tu solicitud. Nuestro equipo comercial revisará tu información y te contactará en las próximas 24-48 horas para agendar una llamada y conocer tus necesidades logísticas en detalle.': 'Our commercial team will review your information and contact you within 24–48 hours to schedule a call and learn more about your logistics needs.',
    'Esta confirmación es una simulación local: el formulario se validó en este navegador, pero no se envían ni almacenan datos y nadie recibirá una solicitud.': 'This confirmation is a local simulation: the form was validated in this browser, but no data is sent or stored and no one will receive an inquiry.',
    'Si tienes alguna consulta urgente, escríbenos directamente a': 'For urgent inquiries, contact us directly at',
    'Recogido': 'Picked up', 'En tránsito': 'In transit', 'Entregado': 'Delivered',
    'Cuenta de envíos simulada': 'Simulated shipment account', 'Código de seguimiento': 'Tracking code',
    'Portal TrackFlow': 'TrackFlow portal', 'Accede a tu operación': 'Access your operations', 'Crea tu acceso al hub': 'Create your hub access',
    'Cerrar ventana': 'Close dialog', 'Correo electrónico': 'Email address', 'Contraseña': 'Password', 'Confirmar contraseña': 'Confirm password',
    'Iniciar sesión': 'Sign in', 'Crear acceso': 'Create account', '¿No tienes cuenta?': 'No account yet?', '¿Ya tienes cuenta?': 'Already have an account?',
    'Regístrate': 'Register', 'Inicia sesión': 'Sign in', 'Navegación principal': 'Main navigation', 'Acceso a TrackFlow': 'TrackFlow access', 'Conversemos': 'Let’s talk',
    'Tu siguiente envío empieza aquí.': 'Your next shipment starts here.',
    'Cuéntanos cómo operas hoy entre países y completa la solicitud comercial para que nuestro equipo pueda conocer tus necesidades.': 'Tell us how you operate across countries and complete the business inquiry so our team can understand your needs.',
    'Los Ángeles:': 'Los Angeles:', 'Zaragoza:': 'Zaragoza:', 'Por qué TrackFlow': 'Why TrackFlow',
    'Una operación preparada para crecer contigo.': 'Operations ready to grow with you.',
    'Infraestructura propia para coordinar tu operación en Estados Unidos y España.': 'Owned infrastructure to coordinate your operations in the United States and Spain.',
    'Un equipo dedicado a tu logística.': 'A team dedicated to your logistics.', 'Tecnología propia': 'In-house technology', 'Visibilidad total de tu inventario.': 'Full visibility of your inventory.',
    'Especialización e-commerce': 'E-commerce specialization', 'Experiencia en moda, electrónica y cosmética.': 'Experience in fashion, electronics, and cosmetics.',
    'Operación binacional': 'Cross-border operations', 'Todos los derechos reservados.': 'All rights reserved.',
    'La experiencia logística de TrackFlow': 'TrackFlow logistics experience', 'Imagen de logística para acompañar la sección de contacto de TrackFlow': 'Logistics image accompanying the TrackFlow contact section',
    'Solicitud recibida. El equipo de TrackFlow te responderá pronto.': 'Inquiry received. The TrackFlow team will be in touch soon.',
    'Comentarios o necesidades específicas': 'Comments or specific needs',
    'El volumen mensual estimado de envíos': 'Estimated monthly shipment volume',
    'Los comentarios no pueden exceder 500 caracteres (quedan X)': 'Comments cannot exceed 500 characters (X over limit)',
    'Los comentarios no pueden exceder 500 caracteres': 'Comments cannot exceed 500 characters',
    'Revisa los campos señalados para poder enviar la solicitud.': 'Review the marked fields before submitting your inquiry.',
    'Comentarios': 'Comments', 'caracteres': 'characters',
    'Las contraseñas deben coincidir.': 'Passwords must match.', 'Sesión simulada iniciada. Bienvenido al hub.': 'Simulated sign-in complete. Welcome to the hub.',
    'Acceso creado. Te esperamos en TrackFlow.': 'Simulated account created. Welcome to TrackFlow.',
    'Introduce un código de seguimiento válido.': 'Enter a valid tracking code.', 'Código no reconocido': 'Unrecognized tracking code',
    'Prueba con TRK-LAX-ZAZ.': 'Try TRK-LAX-ZAZ.', 'En tránsito hacia Zaragoza': 'In transit to Zaragoza',
    'Estado consultado': 'Status checked', 'Actualizado ahora': 'Updated just now', 'Seguimiento actualizado para': 'Tracking updated for', 'Código no reconocido': 'Unrecognized tracking code', 'Prueba con TRK-LAX-ZAZ.': 'Try TRK-LAX-ZAZ.', 'Introduce un código de seguimiento válido.': 'Enter a valid tracking code.', 'En tránsito hacia Zaragoza': 'In transit to Zaragoza', 'Estado consultado': 'Status checked', 'Actualizado ahora': 'Updated just now', 'Las contraseñas deben coincidir.': 'Passwords must match.', 'Sesión simulada iniciada. Bienvenido al hub.': 'Simulated sign-in complete. Welcome to the hub.', 'Acceso creado. Te esperamos en TrackFlow.': 'Simulated account created. Welcome to TrackFlow.',
    'Ingresa un email corporativo válido (ejemplo: <nombre@empresa.com>)': 'Enter a valid business email (example: <name@company.com>)',
    'El nombre de la empresa debe tener al menos 2 caracteres': 'Company name must have at least 2 characters',
    'Ingresa nombre y apellido del contacto': 'Enter first and last name of contact',
    'El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)': 'Phone must include country code (example: +1 213 555 0147)',
    'Si incluyes sitio web, debe ser una URL válida': 'If you include a website, it must be a valid URL',
    'Selecciona el país de operación principal': 'Select main operating country', 'Selecciona el tipo de producto que manejas': 'Select the type of product you handle',
    'Selecciona el volumen mensual estimado': 'Select estimated monthly volume', 'Selecciona al menos un servicio de interés': 'Select at least one service of interest',
    'Indica si actualmente trabajas con otro proveedor logístico': 'Indicate whether you currently work with another logistics provider',
    'Los comentarios no pueden exceder 500 caracteres (quedan X)': 'Comments cannot exceed 500 characters (X over limit)',
    'Los comentarios no pueden exceder 500 caracteres': 'Comments cannot exceed 500 characters',
    'Revisa los campos señalados para poder enviar la solicitud.': 'Review the marked fields before submitting your inquiry.',
    'Debes aceptar la política de privacidad para continuar': 'You must accept the privacy policy to continue',
    'Revisa los campos señalados para poder enviar la solicitud.': 'Review the marked fields before submitting your inquiry.',
    'Selecciona un idioma': 'Select a language', 'Español': 'Spanish', 'English': 'English',
    '🇪🇸 Español': '🇪🇸 Spanish', '🇺🇸 English': '🇺🇸 English',
    'Almacén en Zaragoza': 'Warehouse in Zaragoza',
    'Ej. TRK-LAX-ZAZ': 'e.g. TRK-LAX-ZAZ',
    'Perfiles y testimonios ilustrativos; no corresponden a clientes reales.': 'Illustrative profiles and testimonials; they do not represent real customers.',
    'Operación logística de TrackFlow entre almacenes': 'TrackFlow logistics operation between warehouses',
    'Perfil representativo de una responsable de operaciones de una marca ecommerce': 'Representative profile of an operations manager at an e-commerce brand',
    'Perfil representativo de un director de supply chain de una marca ecommerce': 'Representative profile of a supply chain director at an e-commerce brand'
  };
  const originalNodes = [];
  const originalAttributes = [];
  const visitText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) originalNodes.push({ node: walker.currentNode, text: walker.currentNode.nodeValue });
    root.querySelectorAll('*').forEach((element) => ['aria-label', 'placeholder', 'alt', 'title'].forEach((attribute) => {
      if (element.hasAttribute(attribute)) originalAttributes.push({ element, attribute, value: element.getAttribute(attribute) });
    }));
  };
  const setMeta = (selector, content) => { const element = document.querySelector(selector); if (element) element.content = content; };
  const safeRead = () => { try { const value = localStorage.getItem(STORAGE_KEY); return value === 'en' || value === 'es' ? value : 'es'; } catch { return 'es'; } };
  const safeWrite = (language) => { try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Selector funcional aunque el almacenamiento esté bloqueado. */ } };
  const apply = (language, persist = true) => {
    const lang = language === 'en' ? 'en' : 'es';
    document.documentElement.lang = lang;
    originalNodes.forEach(({ node, text }) => {
      if (!node.isConnected) return;
      const trimmed = text.trim();
      const translated = lang === 'en' ? translations[trimmed] : trimmed;
      if (translated !== undefined) node.nodeValue = text.replace(trimmed, translated);
    });
    originalAttributes.forEach(({ element, attribute, value }) => {
      if (!element.isConnected) return;
      const translated = translations[value];
      if (lang === 'en' && translated !== undefined) element.setAttribute(attribute, translated);
      else if (lang === 'es') element.setAttribute(attribute, value);
    });
    document.title = lang === 'en' ? (location.pathname.endsWith('application.html') ? 'Request information | TrackFlow' : translations['TrackFlow | Logística para e-commerce en EE. UU. y España']) : (location.pathname.endsWith('application.html') ? 'Solicitar información | TrackFlow' : 'Request information | TrackFlow');
    if (document.body.dataset.originalTitle === undefined) document.body.dataset.originalTitle = document.title;
    
    if (lang === 'en') {
      setMeta('meta[name="description"]', location.pathname.endsWith('application.html') ? 'Request business information from TrackFlow. Tell us about your company, products, volume, and logistics needs.' : 'Warehouse management, last-mile deliveries, and reverse logistics for e-commerce in the United States and Spain.');
      setMeta('meta[property="og:title"]', location.pathname.endsWith('application.html') ? 'Request information | TrackFlow' : 'TrackFlow | Logistics that scales with your e-commerce');
      setMeta('meta[property="og:description"]', 'Warehousing, last mile, and reverse logistics in the United States and Spain.');
    } else {
      setMeta('meta[name="description"]', location.pathname.endsWith('application.html') ? 'Solicita información comercial de TrackFlow. Cuéntanos sobre tu empresa, productos, volumen y necesidades logísticas.' : 'Gestión de almacenes, entregas de última milla y logística inversa para e-commerce en Estados Unidos y España. Más de 15 años impulsando marcas.');
      setMeta('meta[property="og:title"]', 'TrackFlow | Logística que escala con tu e-commerce');
      setMeta('meta[property="og:description"]', 'Almacenes, última milla y logística inversa en Estados Unidos y España.');
    }
    document.querySelectorAll('[data-language]').forEach((button) => {
      const active = button.dataset.language === lang;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('bg-[#1E8C86]', active);
      button.classList.toggle('text-white', active);
    });
    document.querySelectorAll('.language-switcher').forEach((switcher) => switcher.setAttribute('aria-label', lang === 'en' ? 'Select a language' : 'Selecciona un idioma'));
    document.querySelectorAll('[data-i18n-placeholder]').forEach((input) => {
      const es = input.dataset.i18nPlaceholder;
      input.placeholder = lang === 'en' ? (translations[es] || es) : es;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const es = element.dataset.i18nAriaLabel;
      element.setAttribute('aria-label', lang === 'en' ? (translations[es] || es) : es);
    });
    if (persist) safeWrite(lang);
    document.dispatchEvent(new CustomEvent('trackflow:languagechange', { detail: { language: lang } }));
  };
  document.addEventListener('DOMContentLoaded', () => {
    visitText(document.body);

    document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => apply(button.dataset.language))); 
    apply(safeRead(), false);
    document.documentElement.classList.add('i18n-ready');
  }, { once: true });
  window.trackflowI18n = { apply, t: (text) => document.documentElement.lang === 'en' ? (translations[text] || text) : text, storageKey: STORAGE_KEY };
})();
