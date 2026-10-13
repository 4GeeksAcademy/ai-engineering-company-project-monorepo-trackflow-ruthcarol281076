# Carpeta `uis`

Esta carpeta contiene **todos los proyectos con interfaz de usuario** para el proyecto transversal de AI Engineering de la compañía — por ejemplo: un sitio web público, un frontend de panel de administración, una interfaz de ecommerce, portales para clientes, aplicaciones Streamlit/Gradio u otras herramientas sólo-frontend.

Los dos proyectos principales que se almacenan aquí son:

- **`website`** — la presencia web pública de la compañía.
- **`backoffice`** — la aplicación interna de administración. Es el lugar ideal para desarrollar múltiples soluciones dentro de un mismo proyecto: autenticación, gestión de personas, gestión de operaciones, comunicación interna y otras capacidades de back-office.

Organiza `uis/` por **distintas áreas de la compañía** — cada subcarpeta agrupa un ámbito diferente (por ejemplo, web pública frente a operaciones internas) e incluye su propia documentación técnica y funcional.

- **Propósito principal**: centralizar en un único lugar todas las aplicaciones frontend que dan soporte a los casos de uso de la compañía.
- **Recomendación**: documenta en este archivo (o en sub-READMEs) las aplicaciones que vayas añadiendo, su objetivo, tecnología usada y cómo ejecutarlas.

## Iniciar las aplicaciones

Son aplicaciones estáticas independientes. Puedes ejecutarlas desde sus carpetas con puertos distintos:

```bash
# Web corporativa pública
cd uis/website
python3 -m http.server 8080
# http://localhost:8080

# Backoffice interno, en otra terminal
cd uis/backoffice
python3 -m http.server 8081
# http://localhost:8081
```

También puedes usar `npx serve .` dentro de cualquiera de las dos carpetas. Consulta el README de cada aplicación para sus detalles:

- [`website/README.es.md`](./website/README.es.md)
- [`backoffice/README.es.md`](./backoffice/README.es.md)


> _These instructions are also available in [English](./README.md)._