# Web corporativa de TrackFlow

Landing pública de TrackFlow para presentar sus servicios de logística de última milla, almacenes, transportistas y gestión de devoluciones entre Los Ángeles y Zaragoza.

## Qué incluye

- Página de entrada en `/` con la identidad corporativa de TrackFlow.
- Secciones de servicios, operación, seguimiento y contacto.
- Simulación local de tracking, acceso de clientes y registro.
- Formulario de contacto en `application.html`.
- Imagen WebP local en el panel derecho de la sección de contacto (`assets/images/contacto.webp`).
- Avisos visuales que aparecen solo al enviar un formulario o realizar una interacción demostrativa.
- Modal de acceso y registro con foco inicial, navegación de foco por teclado, cierre con `Escape` y devolución del foco al elemento que lo abrió.
- Tailwind CSS por CDN y estilos CSS locales.

Las interacciones de login, registro, contacto y tracking son simulaciones: no existe autenticación, persistencia ni API conectada.
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
