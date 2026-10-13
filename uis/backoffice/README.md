# TrackFlow Backoffice

Aplicación interna inicial para visualizar la operación de TrackFlow. Esta primera versión es un skeleton estático: separa el layout del backoffice de la web pública y deja preparados los espacios para conectar inventario, envíos, incidencias y actividad operativa.

## Qué incluye

- Vista de entrada en `/` con bienvenida contextual para operaciones.
- Navegación propia de backoffice, independiente de `uis/website/`.
- Tarjetas de métricas y tabla de almacenes con datos demostrativos tomados de `CONTEXT.md`.
- Estados vacíos para envíos y timeline, sin API ni persistencia.
- Responsive layout para escritorio y móvil.
- Tailwind CSS por CDN y estilos CSS locales para variables, animaciones y estados.

## Ejecutar localmente

Desde esta carpeta:

```bash
python3 -m http.server 8080
```

Después abre `http://localhost:8080` en el navegador.

Si la web corporativa ya está usando el puerto `8080`, inicia el backoffice en otro puerto:

```bash
python3 -m http.server 8081
```

En ese caso, abre `http://localhost:8081`.

## Próximos pasos

- Conectar una API bajo `services/` para inventario y envíos.
- Sustituir los datos demostrativos por respuestas tipadas.
- Añadir autenticación y autorización por área o cliente.
- Incorporar pruebas de accesibilidad y comportamiento responsive.

Los datos visibles en esta versión son demostrativos y no representan datos operativos reales.
