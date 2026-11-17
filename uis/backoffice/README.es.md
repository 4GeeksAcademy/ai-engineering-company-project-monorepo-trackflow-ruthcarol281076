# Backoffice de TrackFlow

Aplicación interna inicial para visualizar la operación de TrackFlow. Esta primera versión es un skeleton estático: separa el layout del backoffice de la web pública y deja preparados los espacios para conectar inventario, envíos, incidencias y actividad operativa.

## Qué incluye

- Vista de entrada en `/` con bienvenida contextual para operaciones.
- Navegación propia de backoffice, independiente de `uis/website/`.
- Tarjetas de métricas y tabla de almacenes con datos demostrativos tomados de `CONTEXT.md`.
- Estados vacíos para envíos y timeline, sin API ni persistencia.
- Diseño responsive para escritorio y móvil.
- Tailwind CSS por CDN y estilos CSS locales para variables, animaciones y estados.

## Ejecutar localmente

Desde esta carpeta:

```bash
python3 -m http.server 8081
```

Después abre `http://localhost:8081` en el navegador. El puerto `8080` queda reservado para la web corporativa.

## Próximos pasos

- Conectar una API bajo `services/` para inventario y envíos.
- Sustituir los datos demostrativos por respuestas tipadas.
- Añadir autenticación y autorización por área o cliente.
- Incorporar pruebas de accesibilidad y comportamiento responsive.

Los datos visibles en esta versión son demostrativos y no representan datos operativos reales.
