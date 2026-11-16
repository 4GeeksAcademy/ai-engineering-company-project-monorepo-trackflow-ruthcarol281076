# SPEC — Sitio web público de TrackFlow

## 1. Resumen y objetivos

| Campo | Definición |
|---|---|
| Producto | Sitio web público de TrackFlow |
| Hito | Sitio web público de la empresa |
| Estado de esta especificación | Requisitos y criterios objetivo; no constituye evidencia de que estén implementados o verificados |
| Idioma base | Español |
| Audiencia | Marcas de e-commerce interesadas en externalizar operaciones logísticas en Estados Unidos, España o ambos mercados |
| Objetivo principal | Presentar de forma profesional los servicios y la cobertura de TrackFlow y captar solicitudes comerciales cualificadas |
| Alcance | Landing pública `index.html` y formulario comercial en página separada `application.html`, con validación cliente y confirmación simulada |
| Fuera de alcance | Backend, envío o almacenamiento de solicitudes, autenticación real, consulta de transportistas y analítica/seguimiento de usuarios |

La web debe explicar los servicios de gestión de almacenes, entregas de última milla y logística inversa, así como la operación en Los Ángeles y Zaragoza. El formulario está dirigido a empresas de e-commerce, no a consumidores que busquen rastrear paquetes o gestionar devoluciones.

Esta especificación reúne el briefing de TrackFlow y los requisitos del hito. En caso de conflicto sobre el formulario, se mantienen los campos, opciones, reglas y mensajes de dominio del briefing, y se adopta el requisito del hito de organizar la experiencia como formulario multipasos con barra de progreso.

## 2. Contexto y arquitectura

### 2.1 Arquitectura vigente y límites

- Aplicación frontend estática dentro de `uis/website/`; no requiere backend, compilación ni instalación de dependencias del proyecto.
- `index.html`: landing en español, con metadatos y marcado estructurado, secciones comerciales y enlaces al formulario.
- `application.html`: formulario comercial independiente.
- `assets/js/validation.js`: validación e interacciones del formulario, cargado desde `application.html`.
- HTML semántico, JavaScript nativo y Tailwind CSS mediante CDN; los estilos personalizados existentes deben limitarse a los casos justificados que Tailwind no cubra razonablemente.
- Los formularios, el tracking y cualquier confirmación comercial son simulaciones locales. Ningún dato se envía ni persiste.
- El modo de ejecución documentado debe funcionar en Codespaces mediante `npx`; se puede servir la carpeta `uis/website` con `npx serve .` desde esa carpeta. La URL pública requiere habilitar el port forwarding del puerto elegido como **Public** en Codespaces.

### 2.2 Idioma y contenido

La experiencia debe estar completa en español e inglés. El español es el idioma editorial de referencia y el idioma inicial; el inglés debe ser una traducción fiel, no una sustitución del contenido requerido en español. Ambas páginas (`index.html` y `application.html`) deben ofrecer un selector visible de idioma con banderas de España y Estados Unidos acompañadas por las etiquetas textuales «Español» y «English». El selector debe ser accesible por teclado y tecnologías de asistencia, actualizar el atributo `lang` del documento y mantener el idioma elegido al navegar entre landing y formulario. La preferencia puede persistirse localmente solo como configuración de idioma; no se deben guardar datos del formulario.

Todos los textos de ambas páginas forman parte del alcance bilingüe: navegación, títulos, contenido comercial, campos y opciones, instrucciones, botones, validaciones, contador, advertencia/modal, confirmación de éxito, privacidad, avisos de simulación y footer. No se permite dejar contenido funcional o mensajes en un solo idioma al cambiar de idioma. Los nombres y valores internos de los controles deben permanecer estables para no alterar validación ni reglas de negocio.

La landing conserva las secciones y el contenido corporativo definidos en `BRIEFING.es.md`: encabezado, hero, tres servicios, cobertura de dos países, cuatro beneficios, contacto y pie. Puede contener secciones demostrativas adicionales, siempre que no sustituyan ni contradigan el contenido comercial requerido y que se identifiquen con honestidad como simulaciones.

## 3. Requisitos funcionales

### RF-01 — Landing y navegación

- Presentar el nombre o logo TrackFlow y navegación clara a Inicio, Servicios, Cobertura y Contacto.
- Mantener exactamente esas cuatro opciones y en ese orden en la navegación principal de escritorio y móvil. Las secciones de demostración adicionales permanecen disponibles, pero no se añaden como opciones primarias; se distribuyen con sentido entre los bloques principales sin alterar el orden Inicio → Servicios → Cobertura → Contacto.
- Incluir un favicon SVG local, coherente con la marca TrackFlow, tanto en la landing como en el formulario.
- Mostrar el titular «Logística que escala con tu e-commerce», el subtítulo establecido en el briefing y una llamada «Solicitar información» que navegue a `application.html`.
- Presentar en este orden de lectura: servicios, cobertura, beneficios, contacto y footer. Los tres servicios deben incluir todos los puntos descriptivos del briefing; cobertura debe indicar almacén, alcance y transportistas para Estados Unidos y España.
- Presentar los cuatro beneficios del briefing: operación binacional, +130 profesionales, tecnología propia y especialización e-commerce.
- Publicar email y teléfonos comerciales de Los Ángeles y Zaragoza con enlaces funcionales `mailto:` y `tel:` cuando corresponda.
- Incluir en el pie el copyright especificado en el briefing y un enlace a LinkedIn.

### RF-02 — Formulario comercial multipasos

- `application.html` presenta un formulario multipasos, accesible y adaptable, con una barra/indicador de progreso que comunica el paso actual y el avance.
- Organizar los campos en pasos comprensibles (por ejemplo: empresa y contacto; operación y servicios; revisión, comentarios y privacidad). El usuario puede avanzar y volver sin perder los valores ya introducidos.
- No se avanza si hay errores en los campos obligatorios del paso actual. Antes de simular el envío se validan todos los campos y se requiere completar todos los pasos.
- Incluir controles «Anterior» y «Continuar» apropiados para cada paso, botón final de envío y botón secundario para limpiar/reiniciar el formulario. El reinicio limpia valores, errores, progreso, contador, aviso y estado de éxito.
- El formulario recoge exactamente los campos, opciones y obligatoriedad definidos en la tabla del apartado 5. Debe usar etiquetas `<label>` asociadas, tipos de entrada apropiados y `<fieldset>/<legend>` para grupos de checks y radios.
- Las validaciones se ejecutan al perder el foco y/o al editar un campo, además de al intentar avanzar o enviar. Los errores se muestran junto al campo o grupo y se asocian mediante `aria-describedby`; el resumen de errores, si se incluye, identifica los campos afectados.
- No se transmiten ni almacenan datos. Un envío válido muestra el mensaje de éxito del briefing y lo anuncia accesiblemente.
- Si volumen mensual es «0-100» y hay un tipo de producto seleccionado, abrir una modal de confirmación con la advertencia de bajo volumen. Tras confirmar o cancelar, la modal se cierra y se vuelve visualmente al formulario, conservando el valor «0-100» seleccionado. La confirmación afirmativa permite continuar con el envío sujeto al resto de validaciones; cancelar no envía ni muestra éxito.

### RF-03 — SEO y datos estructurados

- Incluir en la landing título y descripción útiles, idioma del documento, canonical y metadatos sociales básicos coherentes con la marca y URL pública prevista.
- Incluir marcado JSON-LD Schema.org `Organization` con los datos definidos en el apartado 5. El marcado debe ser JSON válido, aparecer en la landing y no contradecir el contenido visible.
- Las imágenes informativas deben tener texto `alt` descriptivo; las decorativas usan `alt=""` o se implementan de forma que no generen ruido para lectores de pantalla.

### RF-04 — Ejecución y despliegue de evaluación

- Documentar y comprobar un comando compatible con Codespaces para servir la web localmente mediante `npx`.
- Para la evaluación externa, exponer el puerto del servidor como **Public** y proporcionar la URL accesible. La configuración de permisos/port forwarding es un paso manual del entorno, no una función del frontend.

### RF-05 — Selector de idioma y localización completa

- Ofrecer en `index.html` y `application.html` un selector Español/English con banderas 🇪🇸 y 🇺🇸, siempre acompañadas por los nombres de idioma visibles y accesibles; la bandera no puede ser el único nombre del control.
- El español es el idioma inicial y la fuente editorial. Cada página debe permitir cambiar de idioma sin navegar a una página inexistente; la selección debe aplicarse a todo el contenido y a cada estado interactivo.
- Mantener el idioma seleccionado al navegar entre landing y formulario. Se permite `localStorage` únicamente para guardar la preferencia de idioma, nunca valores, comentarios ni otros datos del formulario. Sin preferencia válida, usar español.
- Cambiar `document.documentElement.lang` a `es` o `en` de acuerdo con el idioma visible. Asegurar nombres accesibles de botones, estados y controles también localizados.
- Traducir el contenido completo, incluidos navegación, hero, servicios, cobertura, beneficios, contacto, formulario, opciones, etiquetas, instrucciones, errores, progreso, contador, modal, privacidad, avisos, éxito y footer. Conservar exactamente los contratos de validación y el significado de negocio; los valores de `name`/`value` no dependen del idioma.
- El marcado SEO/Schema.org debe seguir válido y coherente con el idioma inicial español; incluir metadatos alternativos por idioma solo si pueden implementarse correctamente sin inventar URLs públicas.

### RF-06 — Identidad visual compartida entre páginas

- El header y el footer de `application.html` deben conservar una apariencia visual equivalente a los de `index.html`: identidad de marca, paleta, tipografía, tratamiento de logo, fondos, bordes, espaciado, alineación, estados interactivos y comportamiento responsive coherentes.
- La equivalencia es visual y de sistema de diseño, no obliga a duplicar la misma estructura o navegación: el header del formulario puede mantener una navegación contextual de retorno, y el footer puede contener el contenido apropiado para esa página. No se deben eliminar ni reemplazar elementos requeridos para hacer idéntico el markup.
- El selector de idioma requerido debe integrarse en el header de ambas páginas sin romper esa coherencia visual ni la usabilidad móvil.

## 4. Criterios de aceptación verificables

Los criterios se identifican para poder vincular revisiones manuales o pruebas automatizadas. «Automatizable» indica que el comportamiento puede probarse en navegador o con validación estática; el procedimiento externo se marca manual.

### AC-01 — HTML, estructura y contenido

- [ ] `index.html` y `application.html` tienen `doctype`, `lang="es"`, metadatos de viewport, títulos únicos y una jerarquía de encabezados lógica.
- [ ] La landing usa regiones semánticas (`header`, `nav`, `main`, `section`, `article` cuando corresponda y `footer`) y contiene todas las secciones y los textos/datos obligatorios de RF-01. **Automatizable + revisión de contenido.**
- [ ] Cada enlace de navegación apunta a un destino existente; el CTA de solicitud abre `application.html`. **Automatizable.**
- [ ] El menú principal de escritorio y móvil contiene únicamente Inicio, Servicios, Cobertura y Contacto, en ese orden. Las secciones adicionales se conservan y no interrumpen el orden relativo de esos destinos. Ambas páginas cargan el favicon SVG local. **Automatizable + revisión visual.**
- [ ] Toda imagen tiene `alt` apropiado y no hay errores de recursos locales. **Automatizable + revisión contextual.**
- [ ] Cada control del formulario tiene etiqueta asociada; campos relacionados están agrupados y los obligatorios están marcados semánticamente con `required` (o equivalente accesible para grupos). **Automatizable.**
- [ ] El JSON-LD de la landing se parsea como JSON y coincide con los datos del apartado 5. **Automatizable.**

### AC-02 — Diseño adaptable, Tailwind y rendimiento

- [ ] Diseño mobile-first legible y funcional en móvil (320–375 px), tablet (768 px) y escritorio (≥1024 px); sin desbordamiento horizontal ni controles inaccesibles. **Prueba de viewport.**
- [ ] Se emplean utilidades de Tailwind y breakpoints apropiados (`sm:`, `md:` y/o `lg:`). No se añade CSS personalizado innecesario; cualquier excepción debe ser pequeña y justificar una limitación concreta. **Revisión de código.**
- [ ] La web puede iniciarse siguiendo el comando `npx` documentado desde un entorno limpio compatible con Codespaces y responde en el puerto indicado. **Prueba manual.**
- [ ] Capturar PageSpeed Insights en la URL pública de Codespaces; objetivo de rendimiento mínimo **80** (ideal >90). Si PageSpeed no puede acceder, ejecutar Lighthouse de Chrome DevTools contra la misma vista y adjuntar captura. No declarar la puntuación cumplida sin evidencia. **Manual / evidencia de entrega.**

### AC-03 — Accesibilidad

- [ ] Toda funcionalidad interactiva se puede operar con teclado; el foco es visible y el orden de navegación es predecible.
- [ ] Los controles y grupos tienen nombres accesibles; ARIA se usa solo cuando mejora la semántica nativa. Menús/diálogos, si los hay, comunican estado y permiten cerrar/operar por teclado.
- [ ] Contraste de texto y controles cumple WCAG AA como objetivo: 4.5:1 para texto normal y 3:1 para texto grande y componentes gráficos relevantes. Revisar con herramienta de contraste.
- [ ] Los errores, cambios de paso, progreso y confirmación de éxito se comunican a tecnologías de asistencia (por ejemplo `aria-live`, `role="alert"` o foco dirigido de manera no disruptiva). Los campos con error exponen `aria-invalid="true"` y una referencia a su mensaje; al corregirse, el estado se actualiza.
- [ ] La experiencia funciona con zoom y con preferencias de movimiento reducido; no depender solo del color para identificar error o éxito.

### AC-04 — Formulario, pasos y validación

- [ ] Están presentes todos los campos/opciones del apartado 5, con obligatoriedad y tipos correctos.
- [ ] El formulario muestra paso y progreso; se puede avanzar y retroceder, no deja avanzar con errores en el paso y conserva valores al retroceder. **Automatizable.**
- [ ] Las reglas de validación y los textos de error coinciden literalmente con la tabla del apartado 5, incluyendo puntuación, ejemplo de email/teléfono y contador de comentarios.
- [ ] Los errores aparecen junto al control correspondiente, se anuncian y bloquean avance/envío. Al corregir un valor, el error correspondiente desaparece sin borrar otros valores.
- [ ] El comentario admite hasta 500 caracteres; el contador está visible y se actualiza al escribir. El límite impide superar 500 y el error conserva el texto exacto requerido para cualquier estado que exceda el límite (por ejemplo, por manipulación del DOM).
- [ ] Al seleccionar volumen «0-100» con un tipo de producto seleccionado, se abre una modal que muestra exactamente la advertencia del briefing. Al confirmar o cancelar, la modal se cierra, se vuelve visualmente al formulario y el valor «0-100» permanece seleccionado. Solo confirmar permite continuar con el envío, sujeto al resto de validaciones; cancelar no envía ni muestra éxito. Para otros volúmenes la modal no aparece.
- [ ] Un envío válido, tras confirmar si corresponde, oculta/limpia errores y presenta el mensaje de éxito completo del apartado 5. No se afirma que los datos fueron enviados a un servidor.
- [ ] El botón de limpiar deja el formulario en su estado inicial y permite volver a empezar.

### AC-05 — Idiomas y selector

- [ ] Ambas páginas presentan selector visible con banderas y etiquetas textuales «Español» y «English»; funciona por teclado y expone nombres accesibles. **Automatizable + revisión manual.**
- [ ] Al cambiar de idioma, el contenido completo, todos los controles y cada estado dinámico (validación, progreso, contador, modal, privacidad y éxito) aparecen en el idioma elegido; no quedan fragmentos funcionales en el otro idioma. **Pruebas por idioma + revisión de contenido.**
- [ ] `document.documentElement.lang` coincide con el idioma activo (`es`/`en`); el idioma inicial sin preferencia es español. **Automatizable.**
- [ ] La selección se conserva entre `index.html` y `application.html`; solo se persiste la preferencia idiomática, nunca los datos del formulario. **Automatizable + inspección de almacenamiento.**
- [ ] `name` y `value` de los controles, reglas de validación y condición de bajo volumen permanecen estables al alternar idiomas; los contratos de mensajes españoles mantienen coincidencia literal y los mensajes ingleses son equivalentes. **Pruebas automatizables + revisión bilingüe.**

### AC-06 — Coherencia de TrackFlow y entrega

- [ ] Todo el contenido y los campos son específicos de TrackFlow y coherentes con `uis/website/BRIEFING.es.md`; la solicitud se presenta como contacto entre empresas, no como soporte de tracking/consumidor.
- [ ] Se prueba la página en varios anchos y cada validación del formulario (camino válido e inválido); se revisa la consola del navegador.
- [ ] La entrega incluye los archivos principales `index.html`, `application.html`, `assets/js/validation.js` y el briefing del website sin modificar.
- [ ] La descripción del PR incluye URL pública de Codespaces y captura de PageSpeed o Lighthouse con resultado ≥80. Se registra la evidencia real; no se inventa ni se presume.
- [ ] El código y documentación de la entrega están pusheados al repositorio remoto. El merge a `main` y la publicación dependen del flujo de revisión del PR.
- [ ] Header y footer de `application.html` mantienen equivalencia visual con `index.html` en escritorio y móvil: tokens de marca y tipografía, logo, colores, fondos, bordes, espaciado, alineación y tratamientos interactivos coherentes; la equivalencia no exige markup ni enlaces idénticos. **Revisión visual comparativa.**

## 5. Contratos de datos y contenido

### 5.1 Datos del formulario

Los `name` deben identificar establemente los datos y los `value` de opciones deben ser inequívocos. Los nombres y valores visibles deben conservar el dominio del briefing.

| Campo / `name` de referencia | Control | Requerido | Regla y mensaje exacto de error |
|---|---|---:|---|
| Nombre de la empresa (`company`) | Texto | Sí | Tras quitar espacios, mínimo 2 caracteres. «El nombre de la empresa debe tener al menos 2 caracteres» |
| Persona de contacto (`contactName`) | Texto | Sí | Debe contener al menos dos palabras no vacías (nombre y apellido). «Ingresa nombre y apellido del contacto» |
| Email corporativo (`email`) | Email | Sí | Formato válido con usuario, `@` y dominio. «Ingresa un email corporativo válido (ejemplo: `<nombre@empresa.com>`)» |
| Teléfono (`phone`) | Teléfono | Sí | Debe comenzar con `+`, incluir código de país y número; ejemplo `+1 213 555 0147`. «El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)» |
| Sitio web (`website`) | URL | No | Vacío permitido; si se proporciona, URL absoluta con `http://` o `https://`. «Si incluyes sitio web, debe ser una URL válida» |
| País de operación (`country`) | Select | Sí | Estados Unidos / España / Ambos / Otro. «Selecciona el país de operación principal» |
| Tipo de producto (`product`) | Select | Sí | Moda / Electrónica / Cosmética / Alimentación / Otro. «Selecciona el tipo de producto que manejas» |
| Volumen mensual (`volume`) | Select | Sí | 0-100 / 101-500 / 501-2000 / 2000+ / No estoy seguro. «Selecciona el volumen mensual estimado» |
| Servicios de interés (`services`) | Checks múltiples | Sí, mínimo uno | Almacenaje / Última milla / Logística inversa. «Selecciona al menos un servicio de interés» |
| Proveedor logístico actual (`current3pl`) | Radios | Sí, una opción | Sí / No / Estoy evaluando opciones. «Indica si actualmente trabajas con otro proveedor logístico» |
| Comentarios (`comments`) | Textarea | No | Máximo 500 caracteres; contador visible. «Los comentarios no pueden exceder 500 caracteres (quedan X)» donde `X` es el número de caracteres restantes según la regla implementada. |
| Aceptación de privacidad (`privacy`) | Checkbox | Sí | Debe estar marcado. «Debes aceptar la política de privacidad para continuar» |

La validación del teléfono debe permitir espacios entre el código y el número sin aceptar un teléfono que no empiece por `+`. El email se valida por formato; el requisito no obliga a bloquear dominios de email gratuitos, por lo que no se debe inferir una lista de dominios corporativos permitidos. La política de privacidad debe enlazar a la información disponible y explicar con veracidad que este prototipo no transmite ni guarda la solicitud.

### 5.2 Advertencia y confirmación

Condición: `volume === "0-100"` y `product` contiene una opción distinta del valor vacío. En esa condición, abrir una modal de confirmación con el siguiente texto exacto:

> Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?

Al responder la modal (confirmar o cancelar), cerrarla y devolver al usuario a la vista del formulario. Conservar el valor «0-100» en el campo de volumen; no reiniciar ni sustituir la selección. La confirmación afirmativa permite proseguir con el envío, siempre que el resto de campos pase la validación; cancelar mantiene el formulario sin enviar y sin mostrar éxito. La modal es una decisión de UX, no una nueva selección persistida ni una promesa de elegibilidad.

### 5.3 Mensaje de éxito

> **¡Gracias por tu interés en TrackFlow!**
>
> Hemos recibido tu solicitud. Nuestro equipo comercial revisará tu información y te contactará en las próximas 24-48 horas para agendar una llamada y conocer tus necesidades logísticas en detalle.
>
> Si tienes alguna consulta urgente, escríbenos directamente a <comercial@trackflow.com>

En el prototipo, «hemos recibido» significa que el formulario pasó validación local; se debe indicar que la interacción es simulada y no se envían datos.

### 5.4 Datos corporativos y Schema.org

El JSON-LD de la landing debe implementar este contrato `Organization` (puede serializarse con formato compacto, manteniendo los mismos valores):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TrackFlow",
  "description": "Gestión de almacenes y entregas de última milla para e-commerce",
  "url": "https://trackflow.com",
  "foundingDate": "2009",
  "address": [
    {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Los Ángeles",
      "addressRegion": "California"
    },
    {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressLocality": "Zaragoza",
      "addressRegion": "Aragón"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-213-555-0147",
    "contactType": "sales",
    "availableLanguage": ["Spanish", "English"]
  },
  "sameAs": ["https://linkedin.com/company/trackflow"],
  "areaServed": [
    { "@type": "Country", "name": "Estados Unidos" },
    { "@type": "Country", "name": "España" }
  ]
}
```

### 5.5 Contenido obligatorio de la landing

- **Hero:** titular y subtítulo exactos del briefing; CTA «Solicitar información» a `application.html`.
- **Gestión de almacenes:** almacenamiento, picking y packing; inventario en tiempo real; almacenes en Los Ángeles y Zaragoza.
- **Última milla:** red de carriers certificados en ambos países; seguimiento unificado; incidencias y devoluciones.
- **Logística inversa:** devoluciones; inspección y reacondicionamiento; integración con plataforma de ventas.
- **Estados Unidos:** almacén en Los Ángeles; cobertura nacional; UPS, FedEx y DHL.
- **España:** almacén en Zaragoza; cobertura peninsular e islas; MRW, SEUR y DHL.
- **Beneficios:** operación binacional con infraestructura propia; +130 profesionales; tecnología propia para visibilidad de inventario; especialización en moda, electrónica y cosmética.
- **Contacto:** `comercial@trackflow.com`, `+1 213 555 0147`, `+34 976 123 456`.
- **Footer:** «© 2025 TrackFlow. Todos los derechos reservados.» y LinkedIn.

## 6. Restricciones, reglas de negocio y casos límite

- La web es un prototipo estático: ninguna prueba local puede demostrar recepción real de leads. No incorporar APIs, persistencia ni afirmaciones de envío real dentro del alcance.
- Priorizar el briefing del website para datos, nombres de campos, textos y validación. Mantener la barra de progreso/multipasos, reset y evidencia de rendimiento como requisitos adicionales del hito.
- El cliente objetivo son empresas que venden e-commerce y quieren externalizar logística. No convertir el formulario en rastreador, solicitud de devolución de consumidor o registro de usuario.
- La modal de confirmación de 0–100 aplica solo cuando está seleccionado un producto; al cerrarse debe devolver visualmente al formulario y conservar el valor de volumen. Si el volumen se modifica después, actualizar la condición de forma coherente. La confirmación no debe saltarse otras validaciones.
- Tratar espacios iniciales/finales como espacios en blanco al validar empresa y nombre; no considerar dos tokens formados solo por espacios como nombre y apellido.
- URL vacía es válida, URL sin protocolo no lo es. En caso de validación nativa y personalizada coexistentes, el usuario debe recibir el mensaje específico de este contrato.
- La restricción de 500 caracteres debe ser efectiva, con contador actualizado; manejar también casos de pegado y el límite en navegadores.
- Al cambiar de paso, no perder datos ni anunciar de forma confusa el contenido. Al limpiar, restaurar también mensajes y ARIA de error.
- El acceso a Tailwind por CDN requiere conexión a internet. Si no carga el CDN, el contenido debe seguir siendo estructuralmente legible y funcional.
- No presentar métricas, testimonios, integración de carriers, datos de tracking o capacidades operativas no confirmadas como datos en vivo; toda demostración debe identificarse claramente.
- Puntuación PageSpeed/Lighthouse, port forwarding público, captura de evidencia, push y merge son verificaciones/procesos de entrega: no pueden darse por satisfechos solo mediante inspección del HTML.
- No se fija un framework, backend, proveedor de analítica, sistema de pruebas o proceso de build; no introducirlos como requisitos implícitos.

## 7. Plan de implementación y verificación

Cada fase debe completarse y verificarse antes de iniciar la siguiente.

1. **Inventario y trazabilidad**
   - Revisar `BRIEFING.es.md`, `index.html`, `application.html`, `assets/js/validation.js` y README.
   - Registrar brechas entre implementación y esta SPEC; no tomar la presencia de un componente como prueba de conformidad.
   - Verificar con búsqueda/inspección que el briefing no se altera.

2. **Landing, contenido y SEO**
   - Alinear secciones, orden, texto, CTA, contacto, footer y elementos visuales con RF-01 y 5.5.
  - Usar el header y footer de la landing como referencia del sistema visual compartido y alinear los elementos equivalentes del formulario con RF-06.
  - Validar semántica, jerarquía, enlaces, texto alternativo, metadatos y JSON-LD con revisión automatizable y manual.

3. **Formulario multipasos y accesibilidad**
   - Implementar pasos, indicador de progreso, navegación anterior/siguiente, persistencia temporal en memoria de los valores, reset y confirmación de bajo volumen.
   - Mantener el flujo usable con teclado, foco visible, estados anunciados y etiquetas/grupos accesibles.

4. **Validación de dominio**
   - Implementar y probar cada campo y mensaje exacto, validación en interacción, errores asociados, contador y bloqueo de avance/envío.
   - Cubrir casos correctos e incorrectos, el umbral de 0–100, la cancelación/confirmación y el restablecimiento completo.

5. **Responsive, estilos y rendimiento**
   - Probar 320–375 px, 768 px y ≥1024 px; revisar sin desbordamiento, Tailwind y excepciones CSS.
   - Documentar y ejecutar el comando `npx` para servir el sitio. Revisar consola y carga de recursos.

6. **Auditoría y entrega**
   - Probar manualmente navegación, todos los estados del formulario, teclado, contraste y contenido.
   - Publicar el puerto de Codespaces, obtener URL pública, correr PageSpeed o Lighthouse sobre esa misma vista y guardar captura con puntuación ≥80.
   - Revisar cambios, subirlos al repositorio y adjuntar URL/captura y resultados a la descripción del PR; el merge sigue el proceso de aprobación.

### Matriz breve de cobertura

| Fuente | Requisitos / aceptación |
|---|---|
| Briefing del website | RF-01 a RF-03, RF-05, AC-01, AC-03 a AC-06, apartados 5.1–5.5 |
| Instrucciones del hito | RF-02 y RF-04, AC-01 a AC-06 (incluye formulario multipasos, reset, selector bilingüe, ejecución Codespaces y evidencia de rendimiento) |
| Contexto técnico del repositorio | Apartado 2 y restricciones del apartado 6 (HTML estático, Tailwind CDN, simulación sin backend ni persistencia) |
