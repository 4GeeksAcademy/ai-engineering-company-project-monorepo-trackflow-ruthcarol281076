# Contexto del proyecto — TrackFlow

> Este documento define el **contexto funcional y técnico del proyecto**: dominio, estado implementado, stack y decisiones aún no tomadas. El español es la fuente editorial principal; [`CONTEXT.md`](./CONTEXT.md) es su traducción al inglés. No es una guía general de flujo de trabajo: consulta [`AGENTS.es.md`](./AGENTS.es.md) para saber qué documentación usar y cómo mantener sincronizadas las versiones. Distingue el estado **implementado**, el contexto de negocio y las **propuestas** futuras. No presentes capacidades propuestas como si ya existieran.

## 1. Resumen del proyecto (Project Overview)

### Propósito

TrackFlow es una empresa ficticia de logística transfronteriza y gestión de almacenes, con operaciones descritas entre Los Ángeles (Estados Unidos) y Zaragoza (España). Este repositorio contiene actualmente dos demostraciones frontend: un sitio corporativo público para presentar los servicios y simular algunas interacciones, y un backoffice inicial con información operativa de ejemplo.

### Estado actual

El proyecto está en una fase de **prototipo frontend estático/educativo**, no en producción. Las dos interfaces se sirven como archivos HTML y no tienen servicios backend, APIs, base de datos, autenticación ni persistencia conectados. Las interacciones de tracking, acceso/registro y contacto son demostraciones locales; los indicadores del backoffice son datos de ejemplo.

El briefing describe necesidades empresariales y posibles retos, pero no significa que esas soluciones se hayan implementado. Los directorios de servicios, datos y agentes son en su mayoría esqueletos documentales o plantillas.

### Rol de la IA en la aplicación

**Estado actual:** no hay funciones de IA conectadas en las interfaces ni proveedor, modelo o SDK configurado para la aplicación.

**Contexto/propuesta de producto:** el briefing identifica como posibles iniciativas la clasificación visual de devoluciones, búsqueda semántica/RAG, asistentes de atención y dirección, y recomendaciones explicables para elegir transportistas. Ninguna está implementada en este prototipo. La selección de proveedor, modelos, SDK, arquitectura y límites de uso queda **por definir** cuando se apruebe una iniciativa concreta.

## 2. Stack tecnológico (Tech Stack)

### Frontend

- HTML5 estático, con CSS y JavaScript nativo embebidos en los documentos HTML existentes.
- Tailwind CSS se carga desde `https://cdn.tailwindcss.com`; las interfaces requieren conexión a internet para recibir esos estilos.
- El backoffice carga `DM Sans` y `Space Grotesk` desde Google Fonts. Hay imágenes remotas en la web.
- Las páginas se pueden servir con Python 3, sin instalar dependencias del proyecto.
- No se ha detectado configuración de React, Vue, Next.js, TypeScript, Vite ni otro framework o proceso de build para las interfaces actuales.

### Backend / API

No existe backend funcional ni API implementada en el estado actual. `services/` contiene documentación de orientación, no una aplicación API desplegable identificada. Framework y contratos de API quedan **por definir**.

### Base de datos y ORM

No se detecta base de datos, esquema funcional ni ORM configurado. El motor, alojamiento, modelo de datos, estrategia de migraciones y política de retención quedan **por definir**. No se debe asumir PostgreSQL, Supabase, MongoDB, Prisma, Drizzle, pgvector u otra tecnología.

### Servicios de IA

No hay proveedor, modelos, SDK de IA, streaming ni herramientas de inferencia configurados. Quedan **por definir**. Las capacidades de IA del briefing son objetivos de producto propuestos, no integraciones existentes.

## 3. Arquitectura y estructura de carpetas

El repositorio es un monorepo organizado por responsabilidad. La estructura presente incluye carpetas de guía y plantillas; no todas contienen sistemas ejecutables.

```text
.
├── CONTEXT.es.md          # Contexto técnico y funcional en español
├── CONTEXT.md             # Traducción al inglés del contexto técnico y funcional
├── AGENTS.es.md           # Instrucciones de trabajo para el asistente, en español
├── AGENTS.md              # Traducción al inglés de las instrucciones para el asistente
├── uis/
│   ├── website/           # Web pública: index.html y application.html
│   └── backoffice/        # Dashboard interno estático: index.html
├── services/              # Espacio documentado para APIs y workers; sin backend implementado
├── agents/                # Guías, herramientas y plantilla para futuros agentes
│   ├── _template/         # Esqueleto de agente y pruebas de ejemplo
│   └── tools/             # Guía para herramientas de agentes
├── skills/                # Capacidades reutilizables; incluye code-review, data-analysis y research
├── mcps/                  # Espacio documentado para servidores MCP
├── workflows/             # Espacio documentado para automatizaciones
├── data/
│   ├── raw/               # Espacio para datos de origen
│   ├── pipelines/         # Espacio para pipelines
│   ├── process/           # Espacio para datos procesados
│   └── eval/              # Espacio para evaluación
├── packages/
│   └── shared/            # Metadatos y tipos TypeScript compartidos de ejemplo
├── shared/                # Recursos y esquemas compartidos
├── docs/                  # Documentación transversal
├── infra/                 # Espacio para infraestructura y despliegue
├── scripts/               # Espacio para scripts auxiliares
└── internal/              # Espacio para herramientas internas
```

### Aplicaciones frontend actuales

- `uis/website/index.html`: landing corporativa con navegación y demostraciones en el navegador.
- `uis/website/application.html`: formulario de contacto con validación del navegador y confirmación simulada.
- `uis/backoffice/index.html`: dashboard estático con indicadores de muestra, comparativa de almacenes y secciones operativas.
- `packages/shared/types/index.ts`: ejemplos genéricos `Id` y `BaseEntity`; no constituye todavía un modelo de dominio de TrackFlow.

### Ejecución local

Desde la raíz del repositorio, iniciar cada interfaz en una terminal independiente:

```bash
cd uis/website
python3 -m http.server 8080
```

Web pública: <http://localhost:8080/>.

```bash
cd uis/backoffice
python3 -m http.server 8081
```

Backoffice: <http://localhost:8081/>. Para detener cada servidor, usar `Ctrl+C` en su terminal.

## 4. Convenciones de código y estilo (Coding Standards)

### Convenciones observadas

- Mantener las interfaces estáticas en las carpetas correspondientes de `uis/`; no mezclar la web pública con el backoffice.
- Las páginas existentes usan HTML semántico, CSS y JavaScript nativo integrados en sus archivos. No introducir framework ni compilación suponiendo que ya forman parte del stack.
- Mantener el diseño adaptable y las interacciones accesibles en teclado; respetar las preferencias de movimiento reducido cuando se añadan animaciones.
- La UI pública está redactada en español. Mantener su idioma y tono salvo petición explícita de localización; el contenido del backoffice también debe ser coherente con el producto.
- En documentación, indicar con claridad qué es real, qué está simulado y qué es una propuesta.
- El paquete compartido tiene tipos TypeScript de ejemplo, pero el frontend actual no está configurado para compilar TypeScript.

### Recomendaciones para cambios nuevos

- Usar nombres descriptivos y consistentes con el archivo y dominio existente. JavaScript: `camelCase` para variables y funciones; tipos/componentes, si se incorporan, `PascalCase`; nombres de archivo nuevos, preferentemente `kebab-case`.
- Mantener el código modular dentro de las posibilidades del prototipo. Extraer lógica repetida si mejora legibilidad sin introducir infraestructura innecesaria.
- Añadir comentarios solo cuando aclaren lógica no obvia o decisiones importantes.
- Validar formularios en el cliente para la experiencia de demostración, pero no tratar esa validación como sustituto de validación y seguridad en un futuro backend.
- Gestionar fallos de recursos externos de forma razonable y no mostrar como éxito una operación de red que no se realizó.

### Por definir

No hay formatter, linter, sistema de pruebas, convención de componentes ni política de manejo de errores de API establecida para las aplicaciones. Al incorporar backend o framework, definir estas reglas en documentación específica y añadir validaciones automatizadas.

## 5. Reglas específicas de IA (AI & Prompt Guidelines)

### Estado actual

- No existen prompts de sistema de la aplicación ni llamadas a modelos detectadas.
- No existe streaming, validación de salidas de modelos ni integración de Zod/JSON Schema para respuestas de IA.
- Los formularios, el tracking y los indicadores actuales son demostrativos; no atribuirlos a un agente o modelo.

### Propuesta para futuras funciones con IA

Cuando se apruebe una función de IA:

1. Guardar prompts versionados y documentados en una ubicación dedicada del agente o función (por ejemplo, `agents/<nombre>/prompts/`), en lugar de dispersar textos de sistema por la UI. Esta ubicación es una **propuesta**, no una convención ya implementada.
2. Definir el proveedor, modelo, SDK, controles de privacidad, límites de tasa, tratamiento de errores y estrategia de costes antes de conectar la función.
3. Validar cualquier salida estructurada en el servidor con un esquema explícito. Zod o JSON Schema son opciones por evaluar; el proyecto no ha elegido una.
4. No exponer claves del proveedor al navegador. Las llamadas autenticadas a modelos deben pasar por backend cuando exista.
5. Añadir evaluaciones y casos de prueba en `data/eval/` para medir calidad, seguridad y regresiones.
6. Usar streaming únicamente si el caso de uso y el backend lo requieren; transporte, cancelación y representación en cliente quedan por definir.
7. No permitir que un modelo ejecute decisiones operativas sensibles (por ejemplo, aprobar devoluciones o elegir transportista) sin reglas, límites, trazabilidad y supervisión humana definidos.

## 6. Modelo de datos y variables de entorno

### Entidades clave

No hay tablas o entidades de negocio implementadas. Como **propuesta inicial de dominio**, futura y sujeta a validación, podrían definirse:

- `Warehouse`: almacén de Los Ángeles o Zaragoza.
- `SKU` e `InventoryItem`: producto y existencias por almacén.
- `Order` y `Shipment`: pedido y envío, incluyendo estados y eventos de seguimiento.
- `Carrier`: transportista y métricas de servicio.
- `Return`: solicitud, inspección y resolución de una devolución.
- `Client`: marca cliente de TrackFlow.

Estas entidades son una propuesta derivada del briefing, no tablas existentes ni un esquema aprobado. Acordar identificadores, relaciones, estados, auditoría, privacidad y fuentes de verdad antes de persistir datos. Evitar cargar datos personales o reales de clientes en el repositorio.

### Variables de entorno

Actualmente no se detectan variables de entorno requeridas por las interfaces ni archivos de configuración de servicios ejecutables. No hay `DATABASE_URL`, claves de proveedores de IA u otras credenciales definidas como necesarias para este prototipo.

Si se incorporan backend, base de datos o servicios externos, documentar aquí **solo los nombres** de las variables requeridas y sus propósitos; guardar los valores localmente fuera del control de versiones y nunca incluir secretos en el frontend. La lista concreta está **por definir**.

## 7. Límites y cautelas específicas del proyecto

Esta sección registra únicamente distinciones propias del estado y el dominio de TrackFlow; las fuentes documentales y el procedimiento general de trabajo, revisión y sincronización están definidos en [`AGENTS.es.md`](./AGENTS.es.md) y su traducción [`AGENTS.md`](./AGENTS.md).

- Distinguir siempre los hechos del contexto empresarial, las funciones presentes en el prototipo y las ideas de roadmap. El briefing no demuestra que un sistema esté construido.
- El tracking, los formularios, el acceso/registro y los indicadores del backoffice son demostraciones; no describirlos como operaciones reales ni conectadas a servicios.
- Los sistemas backend, APIs, bases de datos, integraciones de transportistas, IA y persistencia no están implementados en el prototipo descrito aquí. Sus tecnologías y contratos siguen pendientes de decisión.
- Las entidades del apartado 6 son propuestas de dominio, no tablas, contratos ni modelos aprobados.
- No asumir el uso de datos personales o de clientes reales. Cualquier futura incorporación requiere definir primero su origen, autorización, privacidad y controles.
