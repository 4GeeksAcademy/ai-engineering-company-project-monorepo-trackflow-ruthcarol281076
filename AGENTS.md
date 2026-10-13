# AGENTS.md

## Alcance

Estas instrucciones aplican a todo el repositorio. El agente debe poder inspeccionar y trabajar con todos los archivos y carpetas del workspace.

Antes de realizar cambios:

1. Leer `CONTEXT.md`, que contiene el contexto de TrackFlow.
2. Revisar el `README.md` de la carpeta que se vaya a modificar.
3. Buscar implementaciones, referencias y pruebas relacionadas.
4. Respetar las instrucciones locales de subcarpetas.

## Estructura del repositorio

- `uis/`: interfaces frontend.
- `services/`: APIs y workers backend.
- `data/`: datos, pipelines y evaluación.
- `agents/`: agentes de IA.
- `skills/`: capacidades reutilizables.
- `mcps/`: servidores MCP.
- `workflows/`: automatizaciones.
- `packages/`: librerías compartidas.
- `shared/`: esquemas y recursos compartidos.
- `docs/`: arquitectura y documentación transversal.
- `infra/`: infraestructura y despliegue.
- `scripts/`: scripts auxiliares.
- `internal/`: herramientas internas.

## Reglas de trabajo

- Mantener los cambios enfocados en la tarea solicitada.
- No modificar ni eliminar cambios existentes sin autorización.
- Reutilizar patrones y dependencias ya presentes en el repositorio.
- No inventar datos de TrackFlow: consultar `CONTEXT.md`.
- No incluir secretos, credenciales ni datos personales reales.
- Documentar cada aplicación, servicio, agente o pipeline nuevo.
- Añadir o actualizar pruebas cuando se modifique comportamiento.
- Verificar los cambios con la prueba, lint o typecheck más específico disponible.

## Acceso al repositorio

El agente debe trabajar con el repositorio completo y poder:

- Leer cualquier archivo del workspace.
- Buscar texto, símbolos y referencias en todas las carpetas.
- Inspeccionar dependencias y configuraciones relevantes.
- Revisar archivos relacionados antes de modificar código.
- Informar claramente cuando una operación requiera permisos externos.

## Validación

Después de cada cambio:

1. Ejecutar una validación específica del componente afectado.
2. Revisar errores de compilación, lint o pruebas.
3. Resumir los archivos modificados y las validaciones ejecutadas.
