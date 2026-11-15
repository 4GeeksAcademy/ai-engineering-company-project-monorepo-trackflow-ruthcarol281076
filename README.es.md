# TrackFlow — Logística transfronteriza de última milla

## 1. Cabecera e identificación

Proyecto frontend de **TrackFlow**, empresa de logística y gestión de almacenes fundada en 2009 que opera entre Los Ángeles (Estados Unidos) y Zaragoza (España). Incluye un sitio corporativo público y un frontend inicial de backoffice para visualizar información operativa demostrativa.

> Proyecto de **AI Engineering · 4Geeks Academy**. Ambas interfaces son estáticas y demostrativas: no se conectan a APIs ni incluyen autenticación o persistencia.

[Guía general del proyecto](./instructions-project.es.md) · [Briefing de TrackFlow](./BRIEFING.es.md)

---

## 2. Tabla de contenidos

- [Características principales](#3-características-principales)
- [Tecnologías utilizadas](#4-tecnologías-utilizadas)
- [Requisitos previos e instalación](#5-requisitos-previos-e-instalación)
- [Guía de uso](#6-guía-de-uso)
- [Estructura del proyecto](#7-estructura-del-proyecto)
- [Hoja de ruta](#8-hoja-de-ruta)
- [Cómo contribuir](#9-cómo-contribuir)
- [Licencia](#10-licencia)
- [Créditos y agradecimientos](#11-créditos-y-agradecimientos)

## 3. Características principales

- Landing corporativa responsive en español, con secciones de servicios, operación, seguimiento y contacto.
- Formulario de contacto en una página independiente (`application.html`), con validación del navegador y confirmación visual simulada.
- Consulta de seguimiento demostrativa: acepta un código de envío y presenta un estado generado en el navegador; no consulta transportistas.
- Ventana modal de acceso y registro con validación básica en el cliente; no crea cuentas ni inicia sesiones reales.
- Frontend inicial de backoffice corporativo, responsive y separado de la web pública, con navegación para resumen operativo, almacenes, envíos e incidencias.
- Dashboard del backoffice con indicadores de ejemplo, tabla comparativa de los almacenes de Los Ángeles y Zaragoza, señales operativas y estados vacíos para módulos aún no conectados.
- El backoffice identifica explícitamente sus datos como demostrativos; sus indicadores no proceden de sistemas operativos reales.
- Contenido de marca basado en el briefing: logística transfronteriza, almacenes en Los Ángeles y Zaragoza, gestión de transportistas y devoluciones.
- Ninguna de las interfaces requiere instalar paquetes para servirse localmente.

## 4. Tecnologías utilizadas

- **HTML5** para las páginas y su estructura semántica.
- **CSS** integrado para estilos, diseño responsive, animaciones y accesibilidad de movimiento reducido.
- **JavaScript nativo** integrado para navegación, formularios, seguimiento demostrativo, modales y notificaciones.
- **Tailwind CSS vía CDN** para utilidades de estilo en ambas interfaces. Se necesita conexión a internet para cargarlo.
- **Google Fonts** (`DM Sans` y `Space Grotesk`) en el backoffice, cargadas desde Google Fonts.
- **Python 3** como servidor HTTP local opcional para desarrollo y previsualización.

No hay actualmente un backend, una base de datos, un gestor de paquetes ni un proceso de compilación configurados para estas interfaces.

## 5. Requisitos previos e instalación

### Requisitos

- Navegador web moderno.
- Python 3 para ejecutar el servidor local recomendado.
- Conexión a internet para cargar Tailwind CSS desde su CDN y las imágenes remotas incluidas en la página.

### Obtener el proyecto

Clona el repositorio y entra en la carpeta raíz:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <CARPETA_DEL_REPOSITORIO>
```

Si ya tienes el repositorio, abre una terminal en su carpeta raíz.

### Iniciar las interfaces localmente

Inicia cada interfaz en una terminal independiente desde la raíz del repositorio.

**Web corporativa pública** — puerto `8080`:

```bash
cd uis/website
python3 -m http.server 8080
```

Abre <http://localhost:8080/>.

**Backoffice interno** — puerto `8081`, en otra terminal:

```bash
cd uis/backoffice
python3 -m http.server 8081
```

Abre <http://localhost:8081/>. Para detener cualquiera de los servidores, vuelve a su terminal y pulsa `Ctrl+C`.

Consulta las guías específicas de la [web corporativa](./uis/website/README.es.md) y el [backoffice](./uis/backoffice/README.es.md) para más detalles.

## 6. Guía de uso

- La página principal se sirve en `/` o `/index.html`.
- El formulario de contacto está disponible en `/application.html` y también desde el enlace de contacto de la landing.
- Usa los enlaces de navegación para saltar a servicios, información operativa, seguimiento y contacto.
- El formulario de seguimiento muestra una respuesta de demostración a partir del código introducido; no representa datos en vivo.
- Los botones del portal abren un modal de acceso o registro. El envío solo muestra una confirmación simulada y no guarda credenciales ni crea usuarios.
- El formulario de contacto valida campos en el navegador y muestra una confirmación visual; no transmite ni almacena la solicitud.
- En el backoffice, navega entre el resumen operativo, los almacenes, los envíos y las incidencias. Los indicadores y estados mostrados son ejemplos; los módulos de envíos y actividad no presentan eventos reales porque aún no existe una API conectada.

## 7. Estructura del proyecto

```text
.
├── README.md                     # Guía del proyecto en inglés
├── README.es.md                  # Esta guía en español
├── BRIEFING.md                   # Contexto de TrackFlow en inglés
├── BRIEFING.es.md                # Contexto de TrackFlow en español
├── instructions-project.md       # Guía general del proyecto en inglés
├── instructions-project.es.md    # Guía general del proyecto en español
├── uis/
│   ├── README.md                 # Orientación sobre interfaces
│   ├── backoffice/
│   │   ├── index.html            # Dashboard estático de operaciones
│   │   ├── README.md             # Documentación del backoffice en inglés
│   │   └── README.es.md          # Documentación del backoffice en español
│   └── website/
│       ├── index.html            # Landing corporativa y demostraciones interactivas
│       └── application.html      # Formulario de contacto
├── agents/                       # Estructura y plantilla para futuros agentes
├── data/                         # Espacio para datos, pipelines y evaluación
├── docs/                         # Documentación transversal
├── infra/                        # Espacio para infraestructura y despliegue
├── mcps/                         # Espacio para servidores MCP
├── packages/                     # Paquetes compartidos
├── scripts/                      # Scripts de ayuda
├── services/                     # Espacio para servicios y API
├── shared/                       # Recursos compartidos
├── skills/                       # Instrucciones y capacidades reutilizables
├── workflows/                    # Espacio para automatizaciones
└── internal/                     # Herramientas internas de desarrollo
```

Las carpetas de agentes, datos, servicios y automatización son parte de la estructura del proyecto; su presencia no implica que haya sistemas de producción implementados.

## 8. Hoja de ruta

Las siguientes capacidades corresponden a necesidades descritas en el briefing de TrackFlow; son objetivos posibles y no funcionalidades disponibles en la web actual:

- Crear una API unificada de inventario para los almacenes de Los Ángeles y Zaragoza y automatizar la ingesta de pedidos.
- Integrar transportistas para asignación, agregación de eventos de seguimiento y medición de rendimiento.
- Desarrollar flujos de logística inversa, reglas de aprobación y herramientas de inspección asistida por IA.
- Incorporar una base de conocimiento y un agente de atención al cliente para consultas frecuentes.
- Unificar datos operativos y añadir telemetría, paneles e informes ejecutivos.
- Conectar los formularios, el portal y el seguimiento con servicios reales cuando existan backend, almacenamiento y políticas de seguridad.

## 9. Cómo contribuir

1. Revisa el [briefing de TrackFlow](./BRIEFING.es.md) y las instrucciones generales en [`instructions-project.es.md`](./instructions-project.es.md).
2. Trabaja dentro de la carpeta responsable de la funcionalidad. Para cambios en la web, usa `uis/website/`.
3. Mantén los datos de negocio coherentes con el briefing y señala claramente las simulaciones; no presentes métricas o integraciones ficticias como datos reales.
4. Comprueba las páginas en un navegador y prueba los enlaces, formularios y diseños en pantallas pequeñas y grandes.
5. Documenta las nuevas funcionalidades, requisitos de ejecución e integraciones en el README correspondiente.

## 10. Licencia

No se especifica una licencia de software en este repositorio. El material de plantilla original indica que es mantenido por 4Geeks Academy para el track de AI Engineering y está destinado al uso exclusivo del programa. Consulta con los responsables del proyecto antes de reutilizar o distribuir el contenido.

## 11. Créditos y agradecimientos

- **TrackFlow** es el escenario empresarial descrito en el briefing de este proyecto.
- **4Geeks Academy**, por el marco formativo y la plantilla del proyecto transversal.
- La hoja de estilos Tailwind CSS se carga desde su CDN; las imágenes de testimonios proceden de Unsplash.

Consulta el [briefing en español](./BRIEFING.es.md) para conocer el contexto empresarial y los retos planteados para TrackFlow.
