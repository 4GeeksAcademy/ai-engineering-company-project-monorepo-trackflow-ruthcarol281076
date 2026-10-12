# AGENTS.md

## Alcance

Estas instrucciones aplican a todo el repositorio. El agente debe poder inspeccionar y trabajar con todos los archivos y carpetas del workspace.

Antes de realizar cambios:

1. Leer `CONTEXT.md`, que contiene el contexto de TrackFlow.
2. Leer `memory-bank/projectbrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md`.
3. Revisar el `README.md` de la carpeta que se vaya a modificar.
4. Buscar implementaciones, referencias y pruebas relacionadas.
5. Respetar las instrucciones locales de subcarpetas.

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
- Actualizar `memory-bank/progress.md` después de cada cambio relevante.
- No modificar `memory-bank/techContext.md` sin confirmación humana cuando el cambio altere una decisión arquitectónica.

## Acceso al repositorio

El agente debe trabajar con el repositorio completo y poder:

- Leer cualquier archivo del workspace.
- Buscar texto, símbolos y referencias en todas las carpetas.
- Inspeccionar dependencias y configuraciones relevantes.
- Revisar archivos relacionados antes de modificar código.
- Informar claramente cuando una operación requiera permisos externos.

## Archivos y carpetas protegidos

El agente no debe modificar estos archivos o carpetas sin confirmación explícita del desarrollador:

- `memory-bank/techContext.md`: contiene decisiones arquitectónicas.
- `CONTEXT.md`: fuente principal del contexto de TrackFlow.
- `CONTEXT.es.md`: versión en español del contexto empresarial.
- `AGENTS.md`: instrucciones globales del agente.
- `.devcontainer/`: configuración del entorno de desarrollo.
- `infra/`: infraestructura y despliegue.

## Flujo obligatorio antes de cada commit

Antes de crear un commit, el agente debe seguir estos pasos en orden:

1. Revisar `CONTEXT.md`, los tres documentos de `memory-bank/` y las instrucciones de la carpeta afectada.
2. Buscar referencias, implementaciones y pruebas relacionadas con los cambios.
3. Ejecutar la validación más específica disponible: pruebas, lint, typecheck o comprobación documental.
4. Actualizar `memory-bank/progress.md` con lo realizado, los riesgos y los próximos pasos.
5. Revisar `git diff` y `git status` para confirmar el alcance antes de solicitar o realizar el commit.

## Validación

Después de cada cambio:

1. Ejecutar una validación específica del componente afectado.
2. Revisar errores de compilación, lint o pruebas.
3. Resumir los archivos modificados y las validaciones ejecutadas.