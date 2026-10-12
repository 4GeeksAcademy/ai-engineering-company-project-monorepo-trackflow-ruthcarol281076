# Tech Context — TrackFlow

## Estado técnico del repositorio

Este repositorio es todavía una plantilla de monorepo con documentación y estructura de carpetas. Ya existe una web corporativa estática funcional en `uis/website/`, pero todavía no existe una plataforma ejecutable completa, un runner de workspace en la raíz ni un `docker-compose.yml` implementado.

La infraestructura de desarrollo disponible incluye un devcontainer basado en `mcr.microsoft.com/devcontainers/universal:2`, integración con Docker y puertos preparados para servicios locales (`3000`, `8000` y `5678`). El repositorio también contiene el paquete privado `@repo/shared-types`, aunque todavía no tiene scripts de ejecución.

## Web corporativa existente

La aplicación `uis/website/` contiene una landing pública y una página de contacto:

- `uis/website/index.html`: página corporativa de TrackFlow con navegación, servicios, simulación de tracking, portal de acceso y llamadas a contacto.
- `uis/website/application.html`: formulario de contacto dedicado.

Su stack actual es HTML estático, CSS y JavaScript embebidos, con Tailwind CSS cargado desde CDN. Puede ejecutarse localmente con `python3 -m http.server 8080` o `npx serve .` desde `uis/website/`.

El login, registro, formulario y tracking son simulaciones locales: no tienen persistencia, autenticación real ni conexión con una API backend.

## Stack previsto y patrones del repositorio

Las convenciones actuales del repositorio apuntan a:

- FastAPI para una API backend centralizada en `services/`.
- Python para servicios, workers y pipelines cuando corresponda.
- React/Next.js y TypeScript para interfaces en `uis/`.
- HTML, CSS y JavaScript estáticos para la web corporativa actual en `uis/website/`.
- TypeScript para tipos compartidos en `packages/shared/`.
- Docker y el devcontainer para desarrollo local y futura orquestación.
- `agents/` para agentes de IA.
- `mcps/` para herramientas y conexiones de los agentes con sistemas externos.
- `data/` para datos fuente, pipelines, procesamiento y evaluación.

Estos son patrones y recomendaciones de la plantilla, no una afirmación de que todos los componentes ya estén implementados.

## Arquitectura conceptual de la memoria

La memoria del agente debe mantenerse separada del corpus curado de conocimiento utilizado por RAG:

```text
Usuario o sistema
      |
      v
Agente de CX / operaciones
      |
      +--> RAG: consulta conocimiento curado de TrackFlow
      |
      +--> MCP: consulta Incidents Manager, inventario u otras herramientas
      |
      +--> Memoria: guarda hechos operativos aprobados y reutilizables
```

La memoria no debe insertarse en colecciones RAG como `trackflow_knowledge`. Debe utilizar un almacenamiento separado, por ejemplo Redis/KV o una colección vectorial independiente como `trackflow_agent_memory`. La decisión final entre estas alternativas todavía está pendiente.

## Tipos de memoria admitidos

La implementación debe priorizar:

- Reglas de asignación y cobertura de transportistas corregidas.
- Incidencias recurrentes con un patrón verificable.
- Preferencias recurrentes de clientes B2B para informes.

La consolidación debe favorecer la clave transportista + país para evitar entradas duplicadas por ticket.

## Controles de seguridad y calidad

La memoria debe rechazar o enviar a revisión las siguientes categorías:

- Direcciones exactas de clientes B2C.
- Rutas internas o información sensible de seguridad física de almacenes.
- Incidencias aisladas sin repetición o valor futuro.
- Contratos comerciales activos en negociación.
- Datos de un cliente que no correspondan al ámbito autorizado de la sesión.

La memoria persistida debe conservar metadatos suficientes para revisión, como origen, fecha, país, transportista, nivel de confianza y estado de aprobación. El esquema exacto está pendiente de definir.

## Decisiones pendientes

1. Elegir Redis/KV, una base vectorial separada o una arquitectura híbrida.
2. Definir el proveedor del modelo y el framework del agente.
3. Definir el esquema de memoria, sus estados y el flujo de aprobación humana.
4. Definir autenticación y autorización para evitar acceso cruzado entre clientes.
5. Definir retención, eliminación y auditoría de memorias.
6. Definir pruebas de precisión, rechazo de datos sensibles y recuperación de memorias.
7. Definir despliegue, observabilidad y gestión de secretos.

## Restricciones técnicas

- No mezclar memoria episódica o aprobada con el conocimiento curado de RAG.
- No guardar secretos, credenciales ni datos personales reales en el repositorio.
- No afirmar que una decisión tecnológica está implementada hasta que exista código y configuración que la respalden.
- Las decisiones arquitectónicas permanentes deben aprobarse antes de cambiar este documento.

## Fuentes

- `README.md` y `README.es.md` del monorepo.
- `.devcontainer/devcontainer.json`.
- `packages/shared/package.json`.
- `content/contexts/08-agent-engineering/memory/CONTEXT-trackflow.*.md` del repositorio `ai-engineering-syllabus`.
- `content/projects/ai-eng-milestone-agentic-engineering/.learn/solution/README.md` del repositorio `ai-engineering-syllabus`.
