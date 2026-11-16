# Web corporativa de TrackFlow

Landing pública de TrackFlow para presentar sus servicios de logística de última milla, almacenes, transportistas y gestión de devoluciones entre Los Ángeles y Zaragoza.

## Qué incluye

- Página de entrada en `/` con la identidad corporativa de TrackFlow.
- Navegación principal en el orden del briefing: Inicio, Servicios, Cobertura y Contacto. Las demostraciones de operación y gestión se intercalan entre Servicios y Cobertura; el seguimiento, los testimonios y los beneficios se mantienen antes de Contacto para conservar un recorrido equilibrado sin perder contenido.
- Favicon SVG local (`assets/favicon.svg`) compartido por la landing y el formulario.
- Secciones de servicios, cobertura por país, beneficios, operación, gestión ejecutiva, seguimiento, testimonios y contacto.
- Simulación local de tracking, acceso de clientes y registro.
- Formulario de solicitud comercial en `application.html` con datos de empresa, persona de contacto, email, teléfono, website, mercado, producto, volumen, servicios, proveedor logístico actual, comentarios y aceptación de privacidad.
- Validación en JavaScript nativo, mensajes por campo, contador de 500 caracteres y confirmación de bajo volumen (0-100 envíos/mes).
- Marcado Schema.org `Organization`, metadatos SEO y enlaces de contacto corporativo en la landing.
- Imagen WebP local en el panel derecho de la sección de contacto (`assets/images/contacto.webp`).
- Avisos visuales que aparecen solo al enviar un formulario o realizar una interacción demostrativa.
- Modal de acceso y registro con foco inicial, navegación de foco por teclado, cierre con `Escape` y devolución del foco al elemento que lo abrió.
- Tailwind CSS por CDN y estilos CSS locales.

Las interacciones de login, registro, solicitud comercial y tracking son simulaciones: no existe autenticación, persistencia ni API conectada. El formulario no transmite ni almacena los datos introducidos.
Los avisos (`toast`) permanecen ocultos hasta que una interacción necesita comunicar un resultado. El modal de acceso se puede usar con teclado; mientras está abierto, el foco permanece dentro de él.

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
