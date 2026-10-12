# Progress — TrackFlow

## Estado actual

**Fecha de actualización:** 2026-10-12

El repositorio se encuentra en la rama `feature/agent-memory-bank`. La rama está dedicada a preparar la documentación del banco de memoria de TrackFlow.

El proyecto sigue siendo una plantilla de monorepo: todavía no hay una aplicación ejecutable completa, un backend de producción, una base de datos conectada ni un agente desplegado. Por tanto, el progreso actual es documental y de definición técnica.

## Completado

- [x] Seleccionar TrackFlow como empresa del proyecto.
- [x] Crear la rama `feature/agent-memory-bank`.
- [x] Crear `AGENTS.md` en la raíz con alcance para todo el monorepo.
- [x] Incorporar el contexto de memoria de TrackFlow en español y en inglés.
- [x] Crear este banco de memoria con `projectbrief.md`, `techContext.md` y `progress.md`.
- [x] Documentar los tipos de memoria válidos y las categorías que nunca deben persistirse.
- [x] Separar conceptualmente la memoria del agente del conocimiento curado de RAG.
- [x] Crear la web corporativa estática en `uis/website/index.html`.
- [x] Crear la página de contacto en `uis/website/application.html`.
- [x] Añadir navegación, simulación de tracking, acceso simulado y validación local del formulario.
- [x] Crear la regla siempre activa `.agents/rules/memory-bank.instructions.md`.
- [x] Definir en la regla el alcance `applyTo: "**/*"` y las lecturas obligatorias del banco de memoria.
- [x] Actualizar `AGENTS.md` con archivos protegidos y flujo previo al commit.
- [x] Crear la skill `.agents/skills/memory-candidate-review/SKILL.md` con objetivo, inputs, output, criterios de aceptación y ejemplos.
- [x] Registrar la skill en `.agents/skills/README.es.md` y `.agents/skills/README.md`.

## Pendiente inmediato

1. Revisar y aprobar el alcance funcional de la memoria del agente.
2. Elegir el almacenamiento de memoria: Redis/KV, vector store separado o solución híbrida.
3. Definir el esquema de una memoria, incluyendo origen, país, transportista, confianza, aprobación y fecha de expiración.
4. Definir el flujo de propuesta, revisión, aprobación, consolidación y recuperación.
5. Añadir pruebas para memorias válidas, memorias rechazadas y protección de datos B2B/B2C.
6. Implementar el agente, sus herramientas MCP y la persistencia en las carpetas correspondientes.
7. Conectar la web corporativa con servicios reales cuando existan: autenticación, formulario de contacto y tracking.

## Riesgos y bloqueos

- El stack definitivo todavía no está decidido.
- No existe una base de datos o servicio de memoria local para validar la persistencia.
- No existe todavía un agente ejecutable con el que medir recuperación o precisión.
- La web corporativa todavía usa simulaciones locales y no persiste datos ni consume APIs reales.
- Las reglas de autorización entre clientes B2B y B2C deben definirse antes de guardar memoria real.
- Las decisiones arquitectónicas de `techContext.md` requieren revisión humana antes de considerarse definitivas.

## Criterios para considerar terminada esta parte

- Los tres documentos existen y describen el mismo alcance.
- `AGENTS.md` obliga a leer el banco de memoria al comenzar una sesión.
- La memoria está separada del corpus RAG.
- Existen pruebas o fixtures para propuestas válidas, propuestas rechazadas y datos sensibles.
- El almacenamiento elegido está documentado y puede ejecutarse localmente.
- El progreso se actualiza después de cada cambio relevante.

## Fuentes

- `CONTEXT.md` y `CONTEXT.es.md`.
- `company-choice.md`.
- `AGENTS.md`.
- `.agents/rules/memory-bank.instructions.md`.
- `.agents/skills/memory-candidate-review/SKILL.md`.
- `.agents/skills/README.es.md` y `.agents/skills/README.md`.
- `memory-bank/CONTEXT-trackflow.es.md`.
- `memory-bank/CONTEXT-trackflow.md`.
- `content/projects/ai-eng-milestone-ai-driven-engineering/README.es.md` del repositorio `ai-engineering-syllabus`.
- `content/contexts/08-agent-engineering/memory/CONTEXT-trackflow.*.md` del repositorio `ai-engineering-syllabus`.
