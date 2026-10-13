# Web corporativa de TrackFlow

Landing pública de TrackFlow para presentar sus servicios de logística de última milla, almacenes, transportistas y gestión de devoluciones entre Los Ángeles y Zaragoza.

## Qué incluye

- Página de entrada en `/` con la identidad corporativa de TrackFlow.
- Secciones de servicios, operación, seguimiento y contacto.
- Simulación local de tracking, acceso de clientes y registro.
- Formulario de contacto en `application.html`.
- Tailwind CSS por CDN y estilos CSS locales.

Las interacciones de login, registro, contacto y tracking son simulaciones: no existe autenticación, persistencia ni API conectada.

## Ejecutar localmente

Desde la raíz del repositorio:

```bash
cd uis/website
python3 -m http.server 8080
```

Abre `http://localhost:8080` en el navegador.

También puedes usar `npx serve .` desde `uis/website`.

## Relación con el backoffice

Esta es la aplicación pública. El dashboard interno se encuentra en [`../backoffice/`](../backoffice/) y tiene un layout y un proceso de inicio independientes.
