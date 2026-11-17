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

- Fecha y hora:
- Persona que prueba:
- Navegador y versión:
- Sistema operativo/dispositivo:
- URL utilizada (local o pública):
- Ancho de viewport / nivel de zoom:
- Idioma activo:
- Resultado global: ☐ Aprobado ☐ Aprobado con incidencias ☐ Bloqueado
- Enlaces a capturas/evidencia:

**Criterio de resultado:** marca cada caso como `☐ Pendiente`, `☐ Aprobado`, `☐ Fallido` o `☐ No aplica`. En Resultado/evidencia anota qué pasó realmente, datos de prueba no sensibles, captura y/o referencia a la incidencia. No uses datos personales reales.

---

## 1. Arranque, páginas y consola — AC-01 / AC-06

1.1- [ `☐ Aprobado` ] La portada carga en `/` y el formulario carga directamente en `/application.html`.
1.2- [ `☐ Aprobado` ] Recargar ambas páginas no produce pantalla en blanco ni errores visibles.
1.3- [ `☐ Aprobado` ] Revisar DevTools → Console en ambas páginas: no hay errores JS, recursos fallidos ni errores de accesibilidad atribuibles a la página. Anotar warnings relevantes sin ocultarlos. En ambas páginas el Inspeccionador reporta solo una advertencia y es la siguiente advertencia: 
(index):64 cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI: https://tailwindcss.com/docs/installation
1.4- [ `☐ Pendiente` ] Revisar DevTools → Network: scripts, favicon e imágenes locales cargan correctamente; no aparece una solicitud que transmita los datos del formulario. Las capturas de portada (1.4.a), formulario (1.4.b) y confirmación (1.4.c) muestran recursos cargados y no muestran una solicitud de envío. OBS: el bloqueo inicial del formulario ya no se reproduce; se confirmó que el paso 1 muestra los errores esperados y avanza con datos válidos. Falta completar y registrar la inspección de Network durante el envío; por eso no se da por verificado el criterio completo.
1.5- [ `☐ Aprobado` ] Navegar desde los CTA de la portada al formulario y volver mediante el enlace correspondiente; los enlaces internos llegan a la sección correcta.
1.6- [ `☐ Fallido` ] Comprobar que las demos (tracking/login/registro) se identifican como simulaciones y no aparentan completar acciones reales. OBS: el aviso de cuenta creada en español no identifica la simulación (1.6.e); en inglés sí lo hace (1.6.d). En el modal de registro inglés no se ve aviso antes de crear la cuenta (1.6.c). Revisar también que tracking y la confirmación de solicitud no sugieran acciones reales.

**Resultado/evidencia:**

| Página / caso | Resultado | Evidencia o incidencia |
|---|---|---|
| Portada | | |
| Formulario | | |
| CTA / navegación | | |

**Resumen sección 1:** las capturas 1.4.a y 1.4.b muestran la portada y el formulario, respectivamente, con las solicitudes visibles y sin errores HTTP en lo que alcanza a verse; 1.4.c muestra la confirmación del formulario y no una solicitud de envío adicional. Esto respalda la carga de recursos, pero no sustituye la revisión completa de Network durante el envío. La evidencia 1.3 no es una captura de Console, así que el warning de Tailwind anotado en la observación debe conservarse como tal, no como prueba de ausencia de otros errores. Los CTA y la navegación se marcaron aprobados durante la sesión, pero no hay captura asociada. El caso 1.6 falla por mensajes de simulación inconsistentes entre idiomas y por falta de aviso visible antes del registro.

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

| Ancho | Portada ES/EN | Formulario ES/EN (pasos 1–3) | ¿Overflow horizontal? | Evidencia/incidencia |
|---:|---|---|---|---|
| 320 px | ☐ | ☐ | | |
| 375 px | ☐ | ☐ | | |
| 768 px | ☐ | ☐ | | |
| 1024 px o más | ☐ | ☐ | | |

En cada viewport:

3.1- [ `☐ Fallido` ] No hay scroll horizontal accidental, texto cortado, solapamiento ni elementos fuera de pantalla. OBS: en el formulario en español, el texto del botón «Enviar solicitud →» se corta/desborda en el viewport estrecho (3.1.a). En la portada en español, la etiqueta «TRANSPORTISTA» se desborda de la tarjeta del simulador de envío (3.1.b). Las capturas no registran el ancho exacto; conservar 375 px y 320 px como observaciones de la sesión, pendientes de volver a anotar con viewport explícito.
3.2- [ `☐ Aprobado` ] Menú móvil/escritorio, selector de idioma, CTAs, botones del formulario, diálogos y enlaces son visibles y operables.
3.3- [ `☐ Pendiente` ] Los textos ingleses largos no rompen tarjetas, navegación, botones ni encabezados. OBS: las capturas 3.1.a y 3.1.b son de la interfaz en español; no verifican este caso en inglés.
3.4- [ `☐ Aprobado` ] La imagen de contacto y demás recursos conservan proporciones y texto alternativo comprensible.
3.5- [ `☐ Aprobado` ] Header y footer de la página de solicitud se ven coherentes con la marca y usables en móvil y escritorio.

**Resultado/evidencia:**

**Resumen sección 3:** se observan dos incidencias responsive concretas en español: el rótulo/flecha del botón de envío del formulario y la etiqueta «TRANSPORTISTA» en la tarjeta del seguimiento. No hay evidencia visual adjunta para los otros anchos de la matriz ni para inglés; tampoco se registra una medición del desbordamiento horizontal de la página completa. El resto de estados aprobados se conserva como resultado de las pruebas realizadas por la persona, aunque la evidencia adjunta no cubre cada viewport.

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

**Resumen sección 5:** los casos 5.1–5.21 aparecen aprobados en el registro manual; incluyen navegación entre pasos, validación, diálogo de volumen bajo, éxito simulado e inicio de un flujo limpio. No se adjuntaron capturas identificadas para esta sección ni se transcribieron los mensajes observados en la matriz de validación por campo. La evidencia 1.4.c/1.6.a muestra el estado de éxito y explica que la solicitud no se envía ni almacena; aun así, el mensaje de éxito también promete contacto comercial en 24–48 horas. Conviene ajustar esa contradicción textual antes de considerar cerrado el caso de éxito.

**Evidencia relacionada:** [confirmación del formulario](evidence/test-website/test-website-evidence-1-6-a.jpg) · [confirmación y Network](evidence/test-website/test-website-evidence-1-4-c.jpg)

## 6. Rendimiento y evidencia de entrega — AC-02 / AC-06

6.1- [ `☐ Aprobado` ] Si hay URL pública de Codespaces, probarla en una ventana privada o navegador externo autorizado y registrar URL/fecha. No exponer datos personales ni secretos. 17/11/2026 14:20, https://fluffy-halibut-vq5wvjrrxrqcpjj-8080.app.github.dev/index.html#inicio .
6.2- [ `☐ Aprobado` ] Ejecutar PageSpeed Insights sobre la URL pública. Si no está disponible, ejecutar Lighthouse en Chrome DevTools sobre la misma vista y registrar la alternativa. Aplicado Page Speed Inside. Imagen anexa de informe de resultados para movil y desktop.
6.3- [ `☐ Aprobado` ] Guardar captura o informe y anotar puntuaciones reales de Performance, Accessibility, Best Practices y SEO. El objetivo indicado por el plan es Performance ≥80; registrar el resultado aunque sea inferior. OBS: la persona que probó confirma que PageSpeed Insights evaluó la URL pública de desarrollo de TrackFlow anotada en esta sección; se consideran válidas las métricas de esas capturas para esa versión y momento.
6.4- [ `☐ No aplica` ] No se ejecutará PageSpeed Insights sobre el formulario; el alcance acordado es la medición de la landing.

**URL pública (si aplica):**

`https://fluffy-halibut-vq5wvjrrxrqcpjj-8080.app.github.dev/index.html#inicio` (copiada del registro; verificar el identificador exacto del host al repetir la prueba).

**Herramienta, fecha e informes/capturas:**

| URL / vista | Performance | Accessibility | Best Practices | SEO | Evidencia |
|---|---:|---:|---:|---:|---|
| | | | | | |
| | | | | | |

**Resultados de PageSpeed Insights para la URL pública de desarrollo de TrackFlow**, según la confirmación de quien realizó la prueba: en móvil (Moto G Power emulado), Performance 100, Accessibility 95, Best Practices 96 y SEO 90; en escritorio: 100, 95, 96 y 90. Las capturas indican 17/11/2026 alrededor de las 14:22. La URL evaluada fue `https://fluffy-halibut-vq5wvjrrxrqcpjj-8080.app.github.dev/index.html#inicio`. Las métricas corresponden a esa versión y fecha; no implican que se haya medido por separado el formulario ni versiones posteriores.

**Evidencias:** [PageSpeed móvil](evidence/test-website/PageSpeed-Insights-11-17-2026_02_25_PM_movil.png) · [PageSpeed escritorio](evidence/test-website/PageSpeed-Insights-11-17-2026_02_26_PM_desktop.png)

## Incidencias encontradas

| ID | AC / caso | Pasos para reproducir | Resultado esperado | Resultado observado | Severidad / evidencia | Estado |
|---|---|---|---|---|---|---|
| 1 | AC-06 / 3.1.a | Abrir el formulario en español en viewport estrecho y revisar el CTA de envío. | Etiqueta y flecha visibles, sin recorte ni desbordamiento. | «Enviar solicitud →» se corta/desborda. | Media · [captura](evidence/test-website/test-website-evidence-3-1-a.jpg) | Cambio implementado; retest pendiente |
| 2 | AC-02 / 3.1.b | Abrir la portada en español y revisar la tarjeta de seguimiento en viewport estrecho. | «TRANSPORTISTA» permanece dentro de su tarjeta. | La palabra rebasa la tarjeta. | Media · [captura](evidence/test-website/test-website-evidence-3-1-b.jpg) | Cambio implementado; retest pendiente |
| 3 | AC-06 / 1.6 | Ejecutar registro simulado en inglés y español. | El usuario entiende antes y después que no se crea una cuenta real. | Aviso final en español no indica simulación; el inglés sí. Modal inglés sin aviso previo visible. | Alta · [1.6.c](evidence/test-website/test-website-evidence-1-6-c.jpg), [1.6.d](evidence/test-website/test-website-evidence-1-6-d.jpg), [1.6.e](evidence/test-website/test-website-evidence-1-6-e.jpg) | Cambio implementado; retest pendiente |
| 4 | AC-04 / 5.19–5.20 | Completar y enviar el formulario de prueba. | Confirmación coherente con una simulación local, sin promesa de contacto real. | La confirmación promete contacto en 24–48 h y a la vez dice que no se envía ni almacena. | Alta · [captura](evidence/test-website/test-website-evidence-1-6-a.jpg) | Se conserva deliberadamente por decisión del usuario; no es cambio pendiente |

## Resumen ejecutivo de la sesión

- **Funcionamiento general:** portada, formulario, cambio de idioma y principales flujos figuran como probados/aprobados por la persona que realizó la sesión. Las capturas aportan evidencia parcial de carga, idiomas, almacenamiento, registro simulado y confirmación del formulario.
- **Hallazgos de la versión original:** 1.6 y 3.1 tienen ajustes implementados y requieren retest manual; el texto 5.19–5.20 se conserva intencionalmente por decisión del usuario.
- **Validaciones pendientes o evidencia insuficiente:** inspección de Network completa (1.4); accesibilidad con lector/árbol, reducción de movimiento y ratios de contraste (4.8, 4.10, 4.11); prueba de inglés largo (3.3). Los estados aprobados sin capturas específicas siguen siendo resultado declarado de la sesión, no evidencia adjunta.
- **PageSpeed:** se evaluó la landing pública de desarrollo de TrackFlow y las capturas registran 100/95/96/90 tanto en móvil como en escritorio. No se evaluará PageSpeed en el formulario, según el alcance confirmado.

## Implementación aprobada y estado de verificación

La persona solicitante confirmó que **todos los elementos del plan son obligatorios** (M8) y que el texto comercial de éxito, incluida la referencia a 24–48 horas, debe permanecer intacto. Las decisiones M1–M7 quedaron aprobadas según las respuestas registradas en esta sección, con la única excepción de texto explícitamente acordada para el color coral del rótulo «Solicitud comercial». Se implementaron los cambios de interfaz/localización enumerados a continuación; esto no equivale a una nueva aprobación de pruebas manuales.

| Elemento acordado | Implementación | Estado |
|---|---|---|
| CTA comercial en viewport estrecho y etiqueta «Transportista» | CTA flexible y de ancho completo en móvil; tipografía reducida para la etiqueta. | Implementado; falta repetición visual ES/EN a 320/375 px. |
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

## Cierre de sesión

- Implementación: ajustes acordados aplicados en archivos de la website; M8 confirmó que todos eran obligatorios.
- Validación técnica: parseo HTML, comprobación de IDs/anclas/rutas relativas/orden DOM/recursos locales y `git diff --check` completados; no se detectaron fallos. No se ejecutó `node --check` porque no hay runtime JS instalado.
- Retest manual visual/navegación ES/EN: pendiente; no se declara conformidad responsive ni visual del código actualizado.
- Retest visual de la website, pruebas de Console/Network y accesibilidad: pendientes; no se declaran ejecutadas.
- Incidencias: hallazgos 3.1.a, 3.1.b y registro 1.6 ajustados en código, con retest pendiente. El texto comercial 5.19–5.20 permanece sin cambios por decisión expresa.
- Evidencia anterior: `evidence/test-website/`; no se han añadido capturas de retest en esta implementación.
- PageSpeed: se conserva el resultado previo de la landing y su fecha/URL documentadas; no se midió esta versión y no se ejecutará en el formulario.
- Licencia de banderas: atribución genérica de fuente añadida; autoría y licencia del recurso individual no verificadas, revisar antes de publicar.
