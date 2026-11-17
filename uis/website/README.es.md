# Web corporativa de TrackFlow

Landing pública de TrackFlow para presentar sus servicios de logística de última milla, almacenes, transportistas y gestión de devoluciones entre Los Ángeles y Zaragoza.

## Qué incluye

- Página de entrada en `/` con la identidad corporativa de TrackFlow.
- Orden de secciones: Hero, Rastreo, Nosotros, Servicios, Pulso, Gestión, Cobertura, Testimonios y Contacto. La navegación principal enlaza a Nosotros, Servicios, Gestión y Contacto; el logo/nombre vuelve al inicio. Etiquetas localizadas en español e inglés.
- Favicon SVG local (`assets/favicon.svg`) compartido por la landing y el formulario.
- Secciones de servicios, cobertura por país, beneficios, operación, gestión ejecutiva, seguimiento, testimonios y contacto.
- Simulación local de tracking, acceso de clientes y registro.
- Selector Español/English en ambas páginas con iconos locales de banderas descargados de Flaticon (`assets/images/flags/`). Español es el idioma predeterminado; solo se guarda la preferencia `trackflow-language-v1` en `localStorage`. La página atribuye la fuente Flaticon; no se pudieron verificar los metadatos de autoría/licencia del elemento individual.
- Formulario comercial de tres pasos en `application.html`, con progreso, navegación entre pasos sin perder valores, resumen y validación progresiva de errores.
- El formulario recoge empresa, persona de contacto, email, teléfono, sitio web opcional, país, producto, volumen, servicios, proveedor logístico actual, comentarios y aceptación de privacidad.
- Mensajes de validación localizados, contador de 500 caracteres, confirmación accesible para volúmenes de 0-100 envíos mensuales, confirmación de éxito simulada y opción para reiniciar el formulario.
- Los perfiles y testimonios de la landing son ilustrativos; las demos operativas se identifican como simulaciones.
- Marcado Schema.org `Organization`, metadatos SEO y enlaces de contacto corporativo en la landing.
- Imagen WebP local en el panel derecho de la sección de contacto (`assets/images/contacto.webp`).
- Avisos visuales que aparecen solo al enviar un formulario o realizar una interacción demostrativa.
- Modal de acceso y registro con foco inicial, navegación de foco por teclado, cierre con `Escape` y devolución del foco al elemento que lo abrió.
- Tailwind CSS por CDN y estilos CSS locales.

Las interacciones de login, registro, solicitud comercial y tracking son simulaciones: no existe autenticación, persistencia de leads ni API conectada. El formulario no transmite ni almacena los datos introducidos. La preferencia de idioma es el único dato que persiste localmente.
Los avisos (`toast`) permanecen ocultos hasta que una interacción necesita comunicar un resultado. Los diálogos de acceso y de bajo volumen incluyen soporte de teclado y controles accesibles.

## Ejecutar localmente

Desde la raíz del repositorio:

```bash
cd uis/website
python3 -m http.server 8080
```

Abre `http://localhost:8080` en el navegador.

También puedes usar `npx serve .` desde `uis/website`.

## Puertos oficiales

| Aplicación | Puerto | URL |
| --- | ---: | --- |
| Web corporativa | `8080` | `http://localhost:8080` |
| Backoffice | `8081` | `http://localhost:8081` |

El backoffice debe ejecutarse en `8081` cuando ambas aplicaciones estén levantadas simultáneamente.

## Relación con el backoffice

Esta es la aplicación pública. El dashboard interno se encuentra en [`../backoffice/`](../backoffice/) y tiene un layout y un proceso de inicio independientes.
