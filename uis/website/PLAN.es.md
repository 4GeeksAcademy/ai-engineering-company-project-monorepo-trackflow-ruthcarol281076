# Plan de trabajo — Website público bilingüe de TrackFlow

## Propósito y alcance

Este plan guía la implementación y verificación del website público de TrackFlow en español e inglés. La SPEC es el contrato de aceptación: [`SPEC.es.md`](./SPEC.es.md) es la fuente editorial y [`SPEC.md`](./SPEC.md) su traducción sincronizada. El briefing de negocio, el contexto del repositorio y las instrucciones generales siguen siendo fuentes obligatorias.

**Rama de trabajo:** `feature/website-bilingual` (creada desde el checkout que contenía las SPEC; ver nota de base al final).  
**Fuera de alcance:** backend, API, envío real de leads, persistencia de datos del formulario, analítica, login real, framework, build o nuevas dependencias de proyecto.

## Fuentes de requisitos

- `uis/website/SPEC.es.md` y `SPEC.md`: requisitos y criterios de aceptación completos, incluida la localización.
- `uis/website/BRIEFING.es.md` y `BRIEFING.en.md`: dominio, contenido comercial, campos, validaciones y mensajes. No modificar estos briefs.
- `CONTEXT.es.md` / `CONTEXT.md`: frontend estático educativo; sin servicios, base de datos ni persistencia conectada.
- `AGENTS.es.md` / `AGENTS.md`, instrucciones del proyecto y `uis/website/README.es.md` / `README.md`: convenciones editoriales, arquitectura y ejecución.
- Código actual: `index.html`, `application.html`, `assets/js/validation.js`, imágenes y estilos existentes. El estado implementado debe inspeccionarse, no inferirse desde la documentación.

## Decisiones de implementación

1. Mantener HTML estático, CSS y JavaScript nativo, Tailwind CDN y la organización en `uis/website`; no introducir framework/build ni dependencia de runtime.
2. Español es el idioma inicial y fuente editorial. El inglés se traduce de forma completa y coherente.
3. Selector en ambas páginas: bandera 🇪🇸 + «Español» y 🇺🇸 + «English». Las etiquetas textuales son siempre visibles y accesibles; no depender del emoji como nombre.
4. Persistir únicamente la preferencia de idioma en `localStorage` (clave versionada, valor validado `es`/`en`). Nunca persistir campos del formulario, comentarios ni información personal. Si `localStorage` no está disponible, falla o no contiene un valor válido, mostrar la página en español por defecto sin romperla; el selector debe seguir permitiendo cambiar el idioma en la página actual. La conservación entre páginas y recargas se garantiza mediante `localStorage` cuando está disponible.
5. Mantener identificadores `name`, valores de opciones, reglas de negocio y textos exactos españoles exigidos por la SPEC independientes del idioma visual.
6. El éxito del formulario y las simulaciones deben explicar verazmente que no se transmiten ni almacenan datos.
7. La puntuación PageSpeed/Lighthouse, URL pública, captura, push y revisión PR requieren evidencia real; no se darán por aprobadas por inspección de código.
8. `main` será la rama destino del PR, que integrará todos los cambios de esta rama. Antes de publicar, actualizar referencias y revisar el diff y posibles conflictos, ya que `main` puede avanzar.
9. Codespaces proporciona una URL pública temporal para demostración; la URL canónica corresponde al dominio oficial de producción y requiere confirmación. URL temporal verificada para esta sesión (16-11-2026): https://fluffy-halibut-vq5wvjrrxrqcpjj-8080.app.github.dev/ . No usarla como canonical ni como URL alterna indexable; depende de que el Codespace y el servidor sigan activos.
10. Si `localStorage` no está disponible, falla o no contiene un valor válido, mostrar la página en español por defecto sin romperla y mantener el selector funcional en la página actual. La preferencia se conserva entre páginas y recargas mediante `localStorage` cuando está disponible; sin almacenamiento no se garantiza conservarla al navegar o recargar.

## Fases y tareas

### Fase 0 — Alinear documentos y preparar trazabilidad

- [ ] Leer las instrucciones de agentes aplicables y todos los documentos de fuentes arriba citados; revisar `README.md` y `README.es.md` sincronizados.
- [ ] Auditar `index.html`, `application.html`, `assets/js/validation.js`, assets y enlaces; inspeccionar también errores de consola y estado de Git.
- [ ] Crear una matriz de seguimiento de cada AC de SPEC: requisito, archivo/elemento, método de prueba, resultado y evidencia. Registrar brechas antes de editar.
- [ ] Confirmar que los briefs no cambian y que las diferencias necesarias se limitan a SPEC, plan, implementación y documentación de ejecución.
- [x] Verificar la base histórica de la rama: las SPEC no existían en `main` local en el momento de preparación. Decisión confirmada con el propietario: el destino del PR será `main` e integrará todos los cambios de esta rama. No descartar ni reescribir los commits fuente.

**Salida / gate:** inventario y mapa requisito-a-prueba revisados; ninguna capacidad simulada se presenta como real.

### Fase 1 — Localización y selector compartido

- [ ] Diseñar una estructura de traducciones mantenible en JS nativo, sin duplicar el comportamiento de validación. Elegir claves explícitas por contenido/estado y usar interpolación segura para variables como contador.
- [ ] Incorporar selector accesible en header de ambas páginas; marcar idioma seleccionado (`aria-pressed` o patrón equivalente), foco visible, operación por teclado y etiquetas visibles «Español»/«English».
- [ ] Aplicar idioma antes de presentar la vista cuando sea posible para evitar destello de idioma incorrecto. Validar el idioma almacenado y capturar fallos de `localStorage`.
- [ ] Actualizar `document.documentElement.lang` y todos los textos estáticos y dinámicos; preservar fragmentos con nombres de marca, correos, teléfonos, `name` y `value`.
- [ ] Mantener la selección al navegar entre landing y formulario y al usar CTA, enlaces y volver/recargar.
- [ ] Localizar título, descripción y metadatos visibles pertinentes. No fabricar URL alterna/canonical para inglés si no hay URL publicada. Mantener JSON-LD conforme al contrato de TrackFlow.

**Pruebas / gate:** probar idioma por defecto, cambio en ambas páginas, navegación cruzada, recarga, valores inválidos de storage y storage bloqueado; inspeccionar `lang`; verificar que solo se almacena preferencia.

### Fase 2 — Landing, contenido y navegación

- [ ] Alinear header, hero, CTA, tres servicios, cobertura Estados Unidos/España, cuatro beneficios, contacto y footer con `BRIEFING.es.md`; traducir cada bloque completo al inglés.
- [ ] Mantener el orden requerido y los enlaces de navegación/CTA válidos en ambos idiomas; preservar simulaciones existentes únicamente si no distraen del objetivo comercial y están rotuladas honestamente.
- [ ] Limitar el menú principal de escritorio y móvil a Inicio → Servicios → Cobertura → Contacto. Intercalar las secciones operativas adicionales de forma contextual, sin quitar contenido ni alterar el orden relativo de los destinos obligatorios.
- [ ] Crear un favicon SVG local inspirado en el monograma TF e incluirlo en `index.html` y `application.html`.
- [ ] Revisar enlaces `mailto:`/`tel:`, LinkedIn, alt de imágenes, fallos de recursos y experiencia sin cargar Tailwind CDN.
- [ ] Validar semántica HTML, encabezados, landmarks, título/description, canonical, metadatos sociales y JSON-LD Organization. No declarar como real ningún dato/servicio demostrativo.
- [ ] Usar el header y footer de `index.html` como referencia visual para los equivalentes de `application.html`; conservar identidad de marca y sistema de diseño aunque la navegación contextual del formulario sea distinta.

**Pruebas / gate:** inspección de contenido bilingüe campo por campo, validación de enlaces y orden de navegación, disponibilidad del favicon, JSON-LD parseable, contraste de secciones con la matriz de contenido de SPEC y comparación visual de header/footer entre páginas en móvil y escritorio.

### Fase 3 — Formulario multipasos y flujo de navegación

- [ ] Organizar todos los campos existentes en pasos lógicos (empresa/contacto; operación/servicios; comentarios/privacidad y envío), siguiendo SPEC.
- [ ] Implementar progreso semántico y localizado; navegación anterior/siguiente, foco coherente al cambiar paso y bloqueo de avance por errores del paso actual.
- [ ] Conservar valores al avanzar/retroceder solo en memoria de página. Reset completo: campos, pasos, errores, `aria-invalid`, contador, modal/aviso y éxito.
- [ ] Proveer estados y textos localizados en ambos idiomas. No enviar, serializar, guardar ni registrar datos del formulario.
- [ ] Implementar confirmación accesible para `volume === "0-100"` y producto seleccionado: advertencia exacta en español y equivalente inglés; confirmar/cancelar cierra el diálogo, devuelve a la vista de formulario, mantiene selección, y cancelar no presenta éxito. Confirmar no salta ninguna validación.

**Pruebas / gate:** teclado y lector de pantalla; avanzar/retroceder con datos; errores bloqueantes; modal confirmar/cancelar; cambiar volumen/producto; reset desde cada estado.

### Fase 4 — Validación exhaustiva y mensajes

- [ ] Verificar campo por campo tipos, `required`, `name` y `value` de SPEC; asociar labels, fieldsets/legends, errores y `aria-describedby`.
- [ ] Implementar/ajustar reglas: empresa ≥2 caracteres tras trim; contacto con dos palabras; email válido sin bloquear dominios gratuitos; teléfono inicia `+` con código/número; URL opcional absoluta con protocolo; selects requeridos; al menos un servicio; radio 3PL; privacidad requerida.
- [ ] Preservar literalmente en español todos los mensajes requeridos. Proporcionar traducciones inglesas funcionalmente equivalentes y localizadas.
- [ ] Actualizar errores al editar/blur y en avance/envío; sincronizar `aria-invalid`, anuncios y foco sin perder otros datos.
- [ ] Contador visible localizado y límite real de 500 caracteres, incluyendo pegado y casos de manipulación DOM. Mantener regla exacta de `X` descrita por SPEC.
- [ ] Mostrar mensaje de éxito completo localizado solo tras validación y confirmación requerida; declarar explícitamente que el envío es simulado y los datos no se transmiten.

**Pruebas / gate:** tabla de casos válidos/ inválidos por campo y por idioma; confirmar coincidencia literal de mensajes ES; prueba de frontera 0/1/2 caracteres, dos tokens, teléfono, URL, 500/501 caracteres, grupos, privacidad y formulario completo.

### Fase 5 — Accesibilidad, responsive y robustez visual

- [ ] Auditar semántica, orden de tabulación, foco visible, nombres accesibles, navegación sin ratón, diálogo con Escape/foco y anuncios de cambios/errores.
- [ ] Probar preferencias de zoom y movimiento reducido; no usar color como única señal; medir contraste AA (4.5:1 texto normal, 3:1 grande/componentes relevantes).
- [ ] Probar 320, 375, 768 y ≥1024 px en landing y cada paso del formulario; arreglar overflow horizontal, texto largo inglés, botones y selector.
- [ ] Usar utilities y breakpoints Tailwind; documentar excepciones CSS pequeñas. Comprobar contenido funcional si falla CDN, imágenes u otros recursos remotos.

**Pruebas / gate:** checklist de accesibilidad manual y herramientas disponibles; capturas de breakpoints; cero desbordamiento o controles inaccesibles.

### Fase 6 — Verificación integral y entrega

- [ ] Ejecutar validaciones estáticas disponibles (HTML/JSON-LD/enlaces/recursos) y pruebas de navegador de ambos idiomas, todos los flujos, consola limpia y estados dinámicos.
- [ ] Probar arranque desde `uis/website` con `npx serve .` y con `python3 -m http.server 8080`; documentar el comando oficial Codespaces y verificar puerto.
- [ ] En Codespaces, publicar manualmente el puerto como **Public**, guardar URL accesible y probarla en sesión privada/navegador externo si está permitido.
- [ ] Ejecutar PageSpeed Insights en la URL pública; si no es accesible, Lighthouse DevTools sobre la misma vista. Guardar captura/evidencia de puntuación de rendimiento ≥80; registrar honestamente si no se cumple.
- [ ] Actualizar README español e inglés: alcance bilingüe, selector, privacidad/no persistencia de formulario, forma de ejecutar y pruebas realizadas.
- [ ] Revisar diff, brief intacto, SPEC/PLAN sincronizados, almacenamiento sin PII y documentación/enlaces. Push a la rama y preparar PR con resumen, checklist AC, URL y captura real. No hacer merge sin revisión.

**Criterio de cierre:** todos los AC de `SPEC.es.md`/`SPEC.md` tienen resultado comprobable y evidencia; cualquier bloqueo externo (port forwarding, PSI) queda explícito, no se simula.

## Matriz de trazabilidad y verificación

| Criterio | Cobertura de implementación | Verificación mínima |
|---|---|---|
| AC-01 HTML, estructura y contenido | Fases 1–2, 4 | Inspección DOM, enlaces, recursos, etiquetas, JSON-LD y revisión ES/EN |
| AC-02 Responsive, Tailwind y rendimiento | Fases 5–6 | Viewports, revisión CSS, arranque limpio y captura PSI/Lighthouse ≥80 |
| AC-03 Accesibilidad | Fases 1, 3, 5 | Teclado, lector/árbol accesible, foco, contraste, zoom y movimiento reducido |
| AC-04 Formulario y validación | Fases 3–4 | Casos límite por campo, pasos, reset, modal y éxito en ES/EN |
| AC-05 Idiomas y selector | Fase 1 y pruebas de todas las fases | Selector, cobertura integral de cadenas, `lang`, navegación y storage |
| AC-06 Coherencia y entrega | Fases 0, 2, 6 | Brief intacto, header/footer coherentes, no claims engañosos, consola, URL/captura/PR |

## Registro de decisiones pendientes

Sin decisiones pendientes por el momento.