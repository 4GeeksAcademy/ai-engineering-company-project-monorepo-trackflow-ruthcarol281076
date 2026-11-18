# Registro de pruebas manuales — TrackFlow

Registro de pruebas manuales de la web en navegador real. Los estados reflejan lo anotado durante la sesión; los resúmenes distinguen entre lo que se probó, lo que muestran las evidencias disponibles y lo que sigue sin corroboración. No marques una comprobación como aprobada solo por inspección del código.

## Cómo ejecutar

Desde la raíz del repositorio:

```bash
cd uis/website
python3 -m http.server 8080
```

Abre `http://localhost:8080/` y `http://localhost:8080/application.html`. Mantén el servidor activo mientras pruebas. Como alternativa, desde `uis/website`, puedes ejecutar `npx serve .`.

## Registro de sesión

- Fecha: 17/11/2026 (sesión responsive; Lighthouse generado el 18/11/2026 a las 03:00 UTC).
- Persona que prueba: no consignada.
- Navegador y versión: no consignados para las pruebas responsive. El JSON de Lighthouse identifica Chrome 157 en el agente de usuario del host y emulación móvil Moto G Power (2022).
- Sistema operativo/dispositivo: no consignado para las pruebas responsive; Lighthouse informa emulación móvil Android 11, viewport 412 × 823.
- URL utilizada (pública de desarrollo): `https://fluffy-halibut-vq5wvjrrxrqcpjj-8080.app.github.dev/index.html#inicio`.
- Ancho de viewport: 1200 px o más, 1032 px, 768 px, 380 px y 320 px; nivel de zoom no consignado.
- Idioma activo: español e inglés.
- Resultado global: versión bilingüe implementada y probada en los tamaños indicados, con una incidencia móvil corregida cuyo retest final no está documentado; quedan comprobaciones de accesibilidad y técnicas pendientes.
- Enlaces a capturas/evidencia: evidencias históricas enlazadas en cada sección; [JSON Lighthouse recibido](evidence/test-website/lighthouse-trackflow-17nov2026.json), con limitaciones descritas en la sección 6.

**Criterio de resultado:** marca cada caso como `☐ Pendiente`, `☐ Aprobado`, `☐ Fallido` o `☐ No aplica`. En Resultado/evidencia anota qué pasó realmente, datos de prueba no sensibles, captura y/o referencia a la incidencia. No uses datos personales reales.

---

## 1. Arranque, páginas y consola — AC-01 / AC-06

1.1- [ `☐ Aprobado` ] La portada carga en `/` y el formulario carga directamente en `/application.html`.
1.2- [ `☐ Aprobado` ] Recargar ambas páginas no produce pantalla en blanco ni errores visibles.
1.3- [ `☐ Aprobado` ] Revisar DevTools → Console en ambas páginas: no hay errores JS, recursos fallidos ni errores de accesibilidad atribuibles a la página. Anotar warnings relevantes sin ocultarlos. En ambas páginas el Inspeccionador reporta solo una advertencia y es la siguiente advertencia: 
(index):64 cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI: https://tailwindcss.com/docs/installation
1.4- [ `☐ Pendiente` ] Revisar DevTools → Network: scripts, favicon e imágenes locales cargan correctamente; no aparece una solicitud que transmita los datos del formulario. Las capturas de portada (1.4.a), formulario (1.4.b) y confirmación (1.4.c) muestran recursos cargados y no muestran una solicitud de envío. OBS: el bloqueo inicial del formulario ya no se reproduce; se confirmó que el paso 1 muestra los errores esperados y avanza con datos válidos. Falta completar y registrar la inspección de Network durante el envío; por eso no se da por verificado el criterio completo.
1.5- [ `☐ Aprobado` ] Navegar desde los CTA de la portada al formulario y volver mediante el enlace correspondiente; los enlaces internos llegan a la sección correcta.
1.6- [ `☐ Pendiente` ] Comprobar que las demos (tracking/login/registro) se identifican como simulaciones y no aparentan completar acciones reales. En la evidencia anterior, el aviso español no identificaba la simulación (1.6.e) y en el modal inglés no se veía aviso previo (1.6.c). Se implementaron avisos de registro localizados, pero falta retest manual ES/EN. Revisar también que tracking y la confirmación de solicitud no sugieran acciones reales.

**Resultado/evidencia:**

| Página / caso | Resultado | Evidencia o incidencia |
|---|---|---|
| Portada | | |
| Formulario | | |
| CTA / navegación | | |

**Resumen sección 1:** las capturas 1.4.a y 1.4.b muestran la portada y el formulario, respectivamente, con las solicitudes visibles y sin errores HTTP en lo que alcanza a verse; 1.4.c muestra la confirmación del formulario y no una solicitud de envío adicional. Esto respalda la carga de recursos, pero no sustituye la revisión completa de Network durante el envío. La evidencia 1.3 no es una captura de Console, así que el warning de Tailwind anotado en la observación debe conservarse como tal, no como prueba de ausencia de otros errores. Los CTA y la navegación se marcaron aprobados durante la sesión, pero no hay captura asociada. El registro simulado tuvo hallazgos en la versión de las capturas; los mensajes ES/EN fueron actualizados y falta confirmar el resultado mediante retest.

**Evidencias:** [1.3](evidence/test-website/test-website-evidence-1-3.jpg) · [1.4.a](evidence/test-website/test-website-evidence-1-4-a.jpg) · [1.4.b](evidence/test-website/test-website-evidence-1-4-b.jpg) · [1.4.c](evidence/test-website/test-website-evidence-1-4-c.jpg) · [1.6.a](evidence/test-website/test-website-evidence-1-6-a.jpg) · [1.6.b](evidence/test-website/test-website-evidence-1-6-b.jpg) · [1.6.c](evidence/test-website/test-website-evidence-1-6-c.jpg) · [1.6.d](evidence/test-website/test-website-evidence-1-6-d.jpg) · [1.6.e](evidence/test-website/test-website-evidence-1-6-e.jpg)

## 2. Idiomas y persistencia — AC-05

Ejecuta estos pasos tanto en la portada como en el formulario:

2.1- [ `☐ Aprobado` ] Sin preferencia guardada (limpia solo `trackflow-language-v1` en DevTools → Application → Local Storage), la página inicia en español y el selector indica Español activo.
2.2- [ `☐ Aprobado` ] Cambiar a English actualiza el contenido visible, selector, etiquetas, navegación, botones, título/estado de página cuando corresponda y atributos accesibles; no quedan frases funcionales en español salvo nombres propios/datos que deban permanecer.
2.3- [ `☐ Aprobado` ] Cambiar de vuelta a Español restaura el texto original sin duplicarlo ni dañarlo.
2.4- [ `☐ Aprobado` ] Recargar y navegar entre ambas páginas conserva el idioma elegido.
2.5- [ `☐ Aprobado` ] Usar el selector únicamente con teclado; sus botones tienen nombre accesible y se anuncia cuál está seleccionado.
2.6- [ `☐ Aprobado` ] Cambiar idioma con errores de formulario visibles: resumen, errores junto a campos y nombres de campo se muestran en el idioma elegido.
2.7- [ `☐ Aprobado` ] Cambiar idioma con el contador de comentarios, progreso, modal de bajo volumen y éxito visibles/en el estado correspondiente: cada texto dinámico se actualiza sin perder datos o selección.
2.8- [ `☐ Aprobado` ] Revisar Application → Local Storage: solo se guarda la preferencia `trackflow-language-v1`; no se guardan nombre, email, teléfono, comentarios ni otros datos del formulario. Repetir tras completar/resetear el formulario.

**Resultado/evidencia:**

| Página / idioma / estado | Resultado | Evidencia o incidencia |
|---|---|---|
| Portada ES ↔ EN | | |
| Formulario ES ↔ EN | | |
| Errores dinámicos ES ↔ EN | | |
| Preferencia entre páginas/recarga | | |
| Inspección de almacenamiento/red | | |

**Resumen sección 2:** las capturas muestran estados visibles de la portada en español e inglés; 2.2 y 2.3 muestran además preferencias `en` y `es` en Local Storage. En 2.1 se ve la portada en español, pero la entrada aparentemente vacía no demuestra por sí sola que la clave se haya borrado. La captura 2.8 muestra el formulario en inglés y la preferencia `en`; la inspección visible parece contener la preferencia de idioma, no datos del formulario. Son estados puntuales: por sí solos no demuestran persistencia tras recarga/navegación, cobertura de todo el contenido y estados dinámicos, ni el comportamiento después de enviar y limpiar el formulario. Esos casos se mantienen como aprobados según el registro manual, con evidencia parcial.

**Evidencias:** [2.1](evidence/test-website/test-website-evidence-2-1.jpg) · [2.2](evidence/test-website/test-website-evidence-2-2.jpg) · [2.3](evidence/test-website/test-website-evidence-2-3.jpg) · [2.8](evidence/test-website/test-website-evidence-2-8.jpg)

## 3. Diseño adaptable y contenido visual — AC-02 / AC-06

Prueba ambos idiomas en la portada y, en el formulario, cada uno de los tres pasos. Usa DevTools responsive mode o dispositivos reales.

| Ancho | Portada ES | Formulario ES | Portada EN | Formulario EN | Resultado reportado |
|---:|---|---|---|---|---|
| 1200 px o más | OK | OK | OK | OK | Sin incidencias reportadas |
| 1032 px | OK | OK | OK | OK | Sin incidencias reportadas |
| 768 px | OK | OK | OK | OK | Sin incidencias reportadas |
| 380 px | OK | OK | OK | OK | Sin incidencias reportadas |
| 320 px | OK | Incidencia de espaciado checkbox/texto; ajuste aplicado después | OK | OK | Falta confirmar retest del formulario ES tras el ajuste |

En cada viewport:

3.1- [ `☐ Pendiente` ] No hay scroll horizontal accidental, texto cortado, solapamiento ni elementos fuera de pantalla. En la sesión del 17/11, la portada en ambos idiomas y el formulario salvo el formulario ES a 320 px se reportaron OK. Allí se detectó demasiado espacio entre la casilla de privacidad y su texto; se redujo el espacio posteriormente, pero no consta el retest de ese estado. Los hallazgos previos de CTA/etiqueta en 3.1.a y 3.1.b tienen ajustes implementados; no se aportó un retest específico de esos hallazgos.
3.2- [ `☐ Aprobado` ] Menú móvil/escritorio, selector de idioma, CTAs, botones del formulario, diálogos y enlaces son visibles y operables.
3.3- [ `☐ Aprobado` ] En la sesión del 17/11 se reportaron la portada y el formulario en inglés sin incidencias en los cinco anchos anotados (1200 px o más, 1032 px, 768 px, 380 px y 320 px). No se adjuntaron capturas de cada tamaño.
3.4- [ `☐ Aprobado` ] La imagen de contacto y demás recursos conservan proporciones y texto alternativo comprensible.
3.5- [ `☐ Aprobado` ] Header y footer de la página de solicitud se ven coherentes con la marca y usables en móvil y escritorio.

**Resultado/evidencia:**

**Resumen sección 3:** la persona que probó reportó la portada en español y ambas páginas en inglés como correctas en los cinco anchos indicados. En el formulario español a 320 px se detectó una separación excesiva entre la casilla de privacidad y su texto; el espaciado se redujo después. No se confirmó el retest de ese punto ni de los hallazgos responsive anteriores 3.1.a/3.1.b. No se adjuntaron capturas de esta nueva matriz ni medición explícita del overflow horizontal.

**Evidencias:** [3.1.a — botón del formulario](evidence/test-website/test-website-evidence-3-1-a.jpg) · [3.1.b — tarjeta de seguimiento](evidence/test-website/test-website-evidence-3-1-b.jpg)

## 4. Teclado, diálogos y accesibilidad — AC-03

No uses el ratón durante esta sección. Reinicia la página entre flujos si el estado anterior interfiere.

4.1- [ `☐ Aprobado` ] Recorrer la portada con `Tab` y `Shift+Tab`: el foco visible es claro, sigue un orden lógico y no queda atrapado en contenido oculto.
4.2- [ `☐ Aprobado` ] Abrir/cerrar navegación móvil con teclado; el estado expandido/contraído se comunica y el foco permanece utilizable.
4.3- [ `☐ Aprobado` ] Abrir las demos/modal de acceso y registro con teclado; probar campos, botones, cierre con `Escape` y retorno de foco al control que abrió el diálogo.
4.4- [ `☐ Aprobado` ] Recorrer el formulario con teclado: todos los campos, casillas, radios, botones, selector y enlaces se alcanzan y operan. `Enter`/`Space` hacen lo esperado.
4.5- [ `☐ Aprobado` ] Al avanzar o retroceder de paso, el foco llega a un encabezado o al primer campo con error, sin perder datos.
4.6- [ `☐ Aprobado` ] Probar el diálogo de bajo volumen: se etiqueta con título y descripción, el foco queda dentro mientras está abierto, los botones operan con teclado, `Escape` lo cierra y el foco vuelve al formulario.
4.7- [ `☐ Aprobado` ] Los errores, resumen, progreso, contador y éxito se perciben sin depender solo del color; al corregir un campo su estado de error se actualiza.
4.8- [ `☐ Pendiente` ] Inspeccionar con árbol de accesibilidad o lector de pantalla disponible: nombres/roles/estados de controles, agrupaciones, idioma activo y mensajes dinámicos son comprensibles.
4.9- [ `☐ Aprobado` ] Probar zoom de navegador al 200% (y 400% si es viable): se puede completar el flujo sin pérdida de contenido o controles inaccesibles.
4.10- [ `☐ Pendiente` ] Activar preferencia del sistema/navegador “reducir movimiento”: transiciones y animaciones se reducen o eliminan sin impedir comprender estados.
4.11- [ `☐ Pendiente` ] Medir combinaciones principales de texto, botones, foco y controles con una herramienta de contraste: registrar ratios; objetivo WCAG AA, 4.5:1 para texto normal y 3:1 para texto grande y componentes relevantes.

**Herramienta/lector utilizado y resultados de contraste:**

| Elemento / combinación | Ratio | Umbral | Resultado/evidencia |
|---|---:|---:|---|
| | | | |

**Resumen sección 4:** el registro marca aprobadas las pruebas de teclado y zoom, pero no adjunta evidencia específica. Siguen sin ejecutar/documentar el árbol de accesibilidad o lector de pantalla (4.8), reducción de movimiento (4.10) y medición de contraste (4.11). No se puede declarar conformidad WCAG completa hasta resolver esos tres puntos y registrar resultados, incluidos los ratios.

## 5. Formulario: pasos y validación — AC-04

Completa en español y repite en inglés. No uses información real. La tabla describe muestras; compara el mensaje observado con el texto literal de `SPEC.es.md`, sección 5, y su equivalente inglés.

### Navegación y conservación de datos

5.1- [ `☐ Aprobado` ] Intentar avanzar desde el paso 1 vacío: no avanza, muestra errores junto a los campos y enfoca/anuncia el primero.
5.2- [ `☐ Aprobado` ] Corregir cada campo: desaparece su error sin borrar valores de otros campos.
5.3- [ `☐ Aprobado` ] Completar el paso 1 con valores de prueba válidos y avanzar; no se pierde lo escrito al volver atrás.
5.4- [ `☐ Aprobado` ] En el paso 2, intentar avanzar sin servicios y sin respuesta 3PL; se bloquea e identifica cada grupo requerido.
5.5- [ `☐ Aprobado` ] Completar el paso 2, avanzar al paso 3 y volver al paso 2: selecciones y radios se conservan.
5.6- [ `☐ Aprobado` ] El indicador y el texto de paso/progreso cambian correctamente entre pasos en español e inglés.

### Casos de validación por campo

| Campo | Prueba inválida | Prueba válida / resultado esperado | Observado (mensaje literal / resultado) |
|---|---|---|---|
| Empresa | Vacío, espacios, un carácter | Al menos 2 caracteres tras quitar espacios; inválido bloquea avance | |
| Contacto | Una sola palabra | Nombre y apellido (dos palabras no vacías) | |
| Email | Formato incorrecto | Email con formato válido; un dominio gratuito válido no se rechaza por ser gratuito | |
| Teléfono | Sin `+` o sin número/código | `+1 213 555 0147` se acepta; no se aceptan entradas sin `+` | |
| Sitio web (opcional) | Valor sin protocolo / URL inválida | Vacío se acepta; URL absoluta `https://...` se acepta | |
| País | Opción vacía | Seleccionar una opción | |
| Tipo de producto | Opción vacía | Seleccionar una opción | |
| Volumen | Opción vacía | Seleccionar una opción distinta de 0–100 o completar flujo bajo volumen | |
| Servicios | Ninguna casilla marcada | Marcar al menos una opción | |
| Proveedor 3PL | Ningún radio seleccionado | Seleccionar Sí, No o Estoy evaluando opciones | |
| Comentarios | Probar 0, 499, 500 caracteres y pegar más de 500 | Contador correcto; no permite exceder 500 en uso normal | |
| Privacidad | Casilla sin marcar | Marcar aceptación para permitir envío | |

5.7- [ `☐ Aprobado` ] Tras un intento de envío inválido, se muestra un resumen con enlaces/identificación comprensible de los errores; los mensajes están junto a cada campo y se anuncian.
5.8- [ `☐ Aprobado` ] En inglés, errores, resumen y controles mantienen consistencia; no cambian los valores internos de las opciones ni la condición de bajo volumen.
5.9- [ `☐ Aprobado` ] (Opcional, si sabes usar DevTools) Forzar `comments` a más de 500 caracteres y probar el estado de error límite; no introduzcas ni compartas datos personales.

### Aviso de volumen 0–100

Prueba ambos órdenes: **primero producto y después volumen**; y **primero volumen y después producto**.

5.10- [ `☐ Aprobado` ] Al quedar seleccionados producto y volumen `0-100`, aparece el diálogo inmediatamente y muestra exactamente: «Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?»
5.11- [ `☐ Aprobado` ] La misma advertencia aparece traducida en inglés cuando el idioma está en English.
5.12- [ `☐ Aprobado` ] Cancelar cierra el diálogo, no muestra éxito, mantiene producto y volumen seleccionados y devuelve el foco al formulario.
5.13- [ `☐ Aprobado` ] Después de cancelar, intentar enviar un formulario completo vuelve a solicitar confirmación; cancelar ese intento tampoco muestra éxito.
5.14- [ `☐ Aprobado` ] Confirmar cuando el diálogo se abrió por selección solamente lo cierra; no muestra éxito ni envía datos por sí mismo.
5.15- [ `☐ Aprobado` ] Tras confirmar, completar y enviar el formulario válido permite llegar al éxito sin volver a pedir confirmación mientras la combinación seleccionada no cambie.
5.16- [ `☐ Aprobado` ] Intentar confirmar el diálogo que aparece durante un envío válido permite continuar solo si todas las validaciones pasan; probar también con otro campo inválido y comprobar que se bloquea y enfoca el error.
5.17- [ `☐ Aprobado` ] Cambiar a un volumen distinto de `0-100`: no aparece advertencia. Volver a `0-100` con producto elegido: se vuelve a solicitar confirmación.
5.18- [ `☐ Aprobado` ] Con volumen `0-100` pero sin producto elegido no aparece el diálogo; al seleccionar producto se aplica la condición.

### Éxito y reinicio

5.19- [ `☐ Aprobado` ] Con datos válidos, enviar (y confirmar volumen bajo si corresponde): aparece el mensaje completo de éxito en el idioma actual.
5.20- [ `☐ Fallido` ] El mensaje no afirma que el servidor recibió datos; la página explica que el resultado es una simulación local. OBS: la confirmación indica que el equipo contactará en 24–48 horas, aunque también explica que la solicitud es simulada y no se envía ni almacena (1.6.a/1.4.c); el texto es contradictorio.
5.21- [ `☐ Aprobado` ] Pulsar “Limpiar formulario” desde pasos distintos y después de errores, modal o éxito: vuelve al paso inicial, vacía campos, contador, errores, resumen y estado de éxito; se puede iniciar un flujo nuevo.

**Resultado/evidencia del formulario:**

| Flujo / idioma | Resultado | Evidencia o incidencia |
|---|---|---|
| Errores ES | | |
| Errores EN | | |
| Pasos y retención | | |
| Volumen bajo: orden 1 | | |
| Volumen bajo: orden 2 | | |
| Éxito / reset | | |

**Resumen sección 5:** los casos 5.1–5.21 aparecen aprobados en el registro manual; incluyen navegación entre pasos, validación, diálogo de volumen bajo, éxito simulado e inicio de un flujo limpio. No se adjuntaron capturas identificadas para esta sección ni se transcribieron los mensajes observados en la matriz de validación por campo. La evidencia 1.4.c/1.6.a muestra el estado de éxito e indica que la solicitud no se envía ni almacena, mientras también conserva la referencia ilustrativa a contacto en 24–48 horas. El usuario decidió mantener ese contenido comercial: se registra como decisión aceptada, no como cambio pendiente, y no implica que la promesa corresponda a un servicio real.

**Evidencia relacionada:** [confirmación del formulario](evidence/test-website/test-website-evidence-1-6-a.jpg) · [confirmación y Network](evidence/test-website/test-website-evidence-1-4-c.jpg)

## 6. Rendimiento y evidencia de entrega — AC-02 / AC-06

6.1- [ `☐ Aprobado` ] Se usó la URL pública de desarrollo de Codespaces anotada abajo. El registro previo indica una evaluación el 17/11/2026 alrededor de las 14:20; el JSON Lighthouse tiene `fetchTime` 2026-11-18 03:00:23 UTC. No se verificó que la URL temporal siga disponible.
6.2- [ `☐ Aprobado` ] Se ejecutó PageSpeed Insights en la sesión previa y se recibió un JSON de Lighthouse para la landing. El JSON no es una medición válida del sitio: sus auditorías detectan texto y enlaces de una página de advertencia de GitHub/Codespaces, además de scripts de una extensión de Chrome.
6.3- [ `☐ Pendiente` ] Guardar una medición representativa y anotar puntuaciones de la website. Las capturas de PageSpeed Insights de la sesión anterior se mantienen como resultados de esa corrida. No usar las puntuaciones del JSON como métricas de TrackFlow; repetir Lighthouse en una ventana/perfil sin extensiones y tras verificar que se ve la landing real. El objetivo indicado por el plan es Performance ≥80.
6.4- [ `☐ No aplica` ] No se ejecutará PageSpeed Insights sobre el formulario; el alcance acordado es la medición de la landing.

**URL pública (si aplica):**

`https://fluffy-halibut-vq5wvjrrxrqcpjj-8080.app.github.dev/index.html#inicio` (copiada del registro; verificar el identificador exacto del host al repetir la prueba).

**Herramienta, fecha e informes/capturas:**

| URL / vista | Performance | Accessibility | Best Practices | SEO | Evidencia |
|---|---:|---:|---:|---:|---|
| PageSpeed Insights, landing, móvil (Moto G Power emulado), 17/11/2026 aprox. 14:22 | 100 | 95 | 96 | 90 | [captura móvil](evidence/test-website/PageSpeed-Insights-11-17-2026_02_25_PM_movil.png) |
| PageSpeed Insights, landing, escritorio, 17/11/2026 aprox. 14:22 | 100 | 95 | 96 | 90 | [captura escritorio](evidence/test-website/PageSpeed-Insights-11-17-2026_02_26_PM_desktop.png) |

**Resultados de PageSpeed Insights para la URL pública de desarrollo de TrackFlow**, según la confirmación de quien realizó la prueba: en móvil (Moto G Power emulado), Performance 100, Accessibility 95, Best Practices 96 y SEO 90; en escritorio: 100, 95, 96 y 90. Las capturas indican 17/11/2026 alrededor de las 14:22. La URL evaluada fue `https://fluffy-halibut-vq5wvjrrxrqcpjj-8080.app.github.dev/index.html#inicio`. Las métricas corresponden a esa versión y fecha; no implican que se haya medido por separado el formulario ni versiones posteriores.

**JSON Lighthouse recibido:** la corrida figura con Lighthouse 13.5.0, emulación móvil (412 × 823; agente emulado Moto G Power 2022) y `fetchTime` `2026-11-18T03:00:23.594Z`. El archivo registra puntuaciones Performance 80, Accessibility 95, Best Practices 92 y SEO 90. **No se atribuyen a la website:** pese a que la URL solicitada es la landing, el informe encuentra en el DOM frases como «Only continue to visit the website if you trust whoever sent you the link», enlaces de reporte de abuso de GitHub y scripts `chrome-extension://`; también puntúa como ausentes el doctype y la meta descripción, que sí existen en `index.html`. Registra además un 404 para `/favicon.ico`, trabajo de una extensión que afectó el rendimiento y contrastes pertenecientes a esa advertencia. Estos indicios apuntan a una página intermedia del proxy/entorno, no al contenido de TrackFlow. Las puntuaciones y hallazgos del JSON se conservan solo como evidencia del intento, no como evaluación de calidad de la landing. Repetir desde un perfil limpio, verificando visualmente la página auditada. Este JSON y las mediciones PageSpeed anteriores son corridas distintas y no deben combinarse.

**Evidencias:** [PageSpeed móvil](evidence/test-website/PageSpeed-Insights-11-17-2026_02_25_PM_movil.png) · [PageSpeed escritorio](evidence/test-website/PageSpeed-Insights-11-17-2026_02_26_PM_desktop.png) · [JSON Lighthouse](evidence/test-website/lighthouse-trackflow-17nov2026.json)

## Incidencias encontradas

| ID | AC / caso | Pasos para reproducir | Resultado esperado | Resultado observado | Severidad / evidencia | Estado |
|---|---|---|---|---|---|---|
| 1 | AC-06 / 3.1.a | Abrir el formulario en español en viewport estrecho y revisar el CTA de envío. | Etiqueta y flecha visibles, sin recorte ni desbordamiento. | El reporte anterior indicaba recorte de «Enviar solicitud →»; se ajustó el estilo del CTA. | Media · [captura anterior](evidence/test-website/test-website-evidence-3-1-a.jpg) | Cambio implementado; retest específico no consignado |
| 2 | AC-02 / 3.1.b | Abrir la portada en español y revisar la tarjeta de seguimiento en viewport estrecho. | «TRANSPORTISTA» permanece dentro de su tarjeta. | El reporte anterior indicaba que la palabra rebasaba la tarjeta; se uniformó el tamaño de subtítulos del hero. | Media · [captura anterior](evidence/test-website/test-website-evidence-3-1-b.jpg) | Cambio implementado; retest específico no consignado |
| 3 | AC-06 / 1.6 | Ejecutar registro simulado en inglés y español. | El usuario entiende antes y después que no se crea una cuenta real. | En la versión de las capturas, aviso final español insuficiente y aviso previo inglés no visible; se actualizaron avisos/toast en ambos idiomas. | Alta · [1.6.c](evidence/test-website/test-website-evidence-1-6-c.jpg), [1.6.d](evidence/test-website/test-website-evidence-1-6-d.jpg), [1.6.e](evidence/test-website/test-website-evidence-1-6-e.jpg) | Ajuste implementado; retest ES/EN pendiente |
| 4 | AC-04 / 5.19–5.20 | Completar y enviar el formulario de prueba. | Según la decisión registrada, conservar el texto comercial aprobado. | La confirmación mantiene la referencia ilustrativa a 24–48 horas y aclara que la solicitud es simulada y no se envía ni almacena. | Nota · [captura](evidence/test-website/test-website-evidence-1-6-a.jpg) | Se conserva deliberadamente por decisión del usuario; no es cambio pendiente |

## Resumen ejecutivo de la sesión

- **Responsive bilingüe:** en la sesión del 17/11 se reportó la portada y el formulario en español e inglés en 1200 px o más, 1032 px, 768 px, 380 px y 320 px. Todo se reportó OK salvo el espacio de la casilla de privacidad en el formulario español a 320 px; se aplicó un ajuste posterior y falta confirmar ese retest.
- **Ajustes posteriores reportados:** separación checkbox/texto de privacidad reducida en móvil; Enviar solo visible en el paso 3 y Atrás desactivado después del envío simulado; selectores ES/EN alineados; subtítulos Transportista/Próximo hito uniformados. Las dos imágenes de testimonios se alojan localmente. Estos cambios no equivalen por sí solos a una aprobación manual de cada flujo.
- **Validaciones pendientes o evidencia insuficiente:** inspección de Network completa (1.4); accesibilidad con lector/árbol, reducción de movimiento y ratios de contraste (4.8, 4.10, 4.11); retest final de la incidencia a 320 px y retest específico de hallazgos responsive anteriores. Los estados sin capturas siguen siendo resultados declarados, no evidencia adjunta.
- **Rendimiento:** las capturas históricas de PageSpeed Insights registran 100/95/96/90 en móvil y escritorio para la corrida descrita. El JSON Lighthouse posterior no es representativo de la landing porque audita contenido intermedio del proxy/extensión; debe repetirse. Ninguna de estas mediciones se hizo sobre el formulario.

## Implementación aprobada y estado de verificación

La persona solicitante confirmó que **todos los elementos del plan son obligatorios** (M8) y que el texto comercial de éxito, incluida la referencia a 24–48 horas, debe permanecer intacto. Las decisiones M1–M7 quedaron aprobadas según las respuestas registradas en esta sección, con la única excepción de texto explícitamente acordada para el color coral del rótulo «Solicitud comercial». Se implementaron los cambios de interfaz/localización enumerados a continuación; esto no equivale a una nueva aprobación de pruebas manuales.

| Elemento acordado | Implementación | Estado |
|---|---|---|
| CTA comercial en viewport estrecho y etiqueta «Transportista» | CTA flexible y de ancho completo en móvil; tipografía reducida para la etiqueta. | Implementado; falta repetición visual ES/EN a 320/375 px. |
| Privacidad a 320 px en el formulario español | Se redujo la separación entre casilla y texto de aceptación para móvil. | Implementado después del hallazgo; falta confirmar retest a 320 px. |
| Paso final del formulario | Enviar solo se muestra en el paso 3; Atrás se desactiva tras el éxito simulado y vuelve a habilitarse al reiniciar. | Implementado; sin retest manual posterior consignado. |
| Controles de idioma de portada y formulario | Etiquetas ES/EN y alineación de icono/texto ajustadas, conservando nombres accesibles. | Implementado; las pruebas responsive reportan idiomas correctos, pero no hay retest funcional documentado de todos los estados. |
| Subtítulos del hero | «Transportista» y «Próximo hito» usan el mismo tamaño y estilo tipográfico. | Implementado; retest visual específico no consignado. |
| Imágenes de testimonios | Dos retratos remotos se reemplazaron por archivos locales. | Implementado; se verificó la existencia de los archivos, no un retest visual documentado. |
| Registro simulado | Aviso visible en el modo de registro y mensaje final español «Acceso simulado creado. Te esperamos en TrackFlow»; traducción inglesa incluida. | Implementado; falta prueba manual ES/EN de aviso y toast. |
| Confirmación de solicitud comercial | Se conservó sin cambios el contenido de éxito, incluida la promesa ilustrativa de contacto en 24–48 horas, conforme a la decisión expresa del usuario. | Implementado según decisión; no volver a tratar el texto como cambio pendiente. |
| Rótulo «Solicitud comercial» | Color `var(--coral)` en `application.html`. | Implementado; contraste/visual aún por revisar. |
| Selector de idioma | Banderas locales para España y Estados Unidos. Se añadió enlace de fuente Flaticon; no se pudo verificar autoría ni licencia del elemento individual porque la búsqueda de Flaticon devolvió 403. | Implementado; confirmar requisitos de atribución/licencia antes de distribución. |
| Cintas Hero y Rastreo | Alineación vertical centrada; textos acordados preservados. Traducción inglesa añadida a la cinta de Rastreo. | Implementado; falta revisión visual responsive. |
| Imagen de Management | Superposición radial transparente en el centro y fundido blanco hacia los bordes. | Implementado; falta revisión visual en móvil/escritorio. |
| Orden de secciones y navegación | DOM: Hero → Rastreo → Nosotros → Servicios → Pulso → Gestión → Cobertura → Testimonios → Contacto. Menú ES/EN con enlaces aprobados; logo/nombre enlaza al inicio. Testimonios con fondo blanco y paleta ajustada. | Implementado; falta recorrido manual de enlaces en escritorio/móvil. |

### Validación técnica de esta implementación

Comprobaciones completadas: ambas páginas se parsearon con el parser HTML de Python; no se encontraron IDs duplicados, anclas de página faltantes ni rutas relativas rotas (incluidos enlaces entre `application.html` e `index.html`). Se verificaron el orden de nueve secciones y la presencia de los dos PNG locales. `git diff --check` terminó sin errores. No fue posible ejecutar `node --check`: este entorno no tiene Node/NodeJS ni Deno/Bun instalados. La matriz de pruebas manuales previa describe la versión probada originalmente; no debe interpretarse como una nueva prueba del código actualizado.

No se repitió PageSpeed Insights: la medición registrada corresponde a la landing pública y su versión/fecha especificadas en la sección 6. No ejecutar PageSpeed sobre `application.html`, según el alcance acordado. No se realizó revisión visual/manual en navegador en esta continuación. Las verificaciones de Console/Network, accesibilidad (lector/árbol, movimiento reducido y contraste) y cobertura completa de viewports continúan pendientes de prueba en navegador.

**Estado de Flaticon:** los PNG se sirven desde `https://cdn-icons-png.flaticon.com/512/197/197593.png` (España) y `https://cdn-icons-png.flaticon.com/512/197/197560.png` (Estados Unidos); se guardaron en `assets/images/flags/`. La página enlaza la colección general de banderas de Flaticon como fuente. La página de búsqueda respondió 403 durante la consulta, por lo que no se verificaron nombre del autor, elemento exacto ni licencia/atribución específica. No se afirma que la atribución incluida satisfaga los términos de licencia; verificar antes de publicación/distribución.

## Cierre de sesión — versión bilingüe

- **Estado de implementación:** se da por completada esta versión bilingüe de la website respecto de los ajustes descritos en este registro. La portada y el formulario fueron reportados en español e inglés y probados en los cinco anchos indicados. Esto cierra la implementación solicitada, no certifica producción ni conformidad WCAG completa.
- **Incidencia responsive residual:** se ajustó el espacio de la casilla de privacidad del formulario ES a 320 px, pero no consta el retest posterior. Los cambios previos de CTA/etiqueta también requieren retest específico para cerrar sus incidencias visuales.
- **Formulario e idioma:** se aplicaron los cambios de visibilidad del botón Enviar, estado del botón Atrás tras el éxito, alineación de selectores e igualdad de subtítulos. La tabla de implementación distingue el cambio de código de la prueba manual no consignada.
- **Pruebas técnicas pendientes:** revisión completa de Console/Network y almacenamiento (1.4), árbol de accesibilidad/lector de pantalla (4.8), movimiento reducido (4.10) y contraste de colores (4.11). No declarar aprobación global de accesibilidad a partir de Lighthouse.
- **Rendimiento:** conservar las puntuaciones PageSpeed anteriores solo para su corrida y fecha. El JSON Lighthouse recibido se archiva, pero sus puntuaciones no son válidas para la landing al mostrar indicios de una página intermedia del proxy de Codespaces y una extensión; repetir en un perfil limpio verificando el contenido auditado.
- **Evidencias:** [carpeta de evidencias](evidence/test-website/) y [JSON Lighthouse](evidence/test-website/lighthouse-trackflow-17nov2026.json). No se recibieron capturas de retest de los cambios posteriores.
- **Alcance funcional:** el sitio sigue siendo un prototipo frontend estático; tracking, acceso/registro y solicitud comercial son simulaciones locales, sin backend ni transmisión de datos.
