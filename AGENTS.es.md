# Instrucciones para agentes — TrackFlow

Este archivo define **cómo debe trabajar el asistente** en el repositorio. El contexto funcional y técnico específico de TrackFlow se mantiene en [`CONTEXT.es.md`](./CONTEXT.es.md); consulta ese documento para conocer el estado, las tecnologías y las decisiones pendientes del proyecto. No dupliques aquí esa información.

El español es el **idioma editorial principal** del proyecto. Los documentos en inglés son traducciones de referencia que deben mantenerse alineadas con la versión española.

## Alcance

Estas instrucciones aplican a todo el repositorio. El agente debe inspeccionar y trabajar dentro del workspace, respetando las instrucciones más específicas de las carpetas que modifique.

Antes de realizar cambios:

1. Consultar `AGENTS.es.md` para las reglas de trabajo y `CONTEXT.es.md` para el contexto funcional y técnico. `AGENTS.md` y `CONTEXT.md` son sus traducciones al inglés.
2. Revisar `README.es.md` y `README.md` en la raíz para la orientación general; dentro de la carpeta afectada, leer su README local y la traducción disponible.
3. Inspeccionar el código, configuración y pruebas relacionadas para confirmar el estado real de la implementación.
4. Respetar las instrucciones locales de subcarpetas, que pueden complementar estas reglas.

## Reglas de trabajo

- Mantener los cambios enfocados en la tarea solicitada.
- No modificar ni eliminar cambios existentes sin autorización.
- Reutilizar patrones y dependencias ya presentes en el repositorio.
- No inventar datos de TrackFlow: consultar `CONTEXT.es.md` y la documentación específica pertinente.
- No incluir secretos, credenciales ni datos personales reales.
- Documentar cada aplicación, servicio, agente o pipeline nuevo.
- Añadir o actualizar pruebas cuando se modifique comportamiento.
- Verificar los cambios con la prueba, lint o typecheck más específico disponible.

## Documentación de referencia

Usar cada documento para su propósito, evitando duplicar contenido:

- `AGENTS.es.md` / `AGENTS.md`: proceso de trabajo del asistente, criterios de revisión, validación y sincronización documental.
- `CONTEXT.es.md` / `CONTEXT.md`: contexto funcional y técnico transversal de TrackFlow, estado real, stack y decisiones pendientes.
- `README.es.md` / `README.md` de la raíz: orientación general para las personas usuarias y desarrolladoras, capacidades principales y ejecución del proyecto.
- README de la carpeta o componente afectado (por ejemplo, `uis/website/README.es.md` y `uis/website/README.md`): propósito, alcance, ejecución y detalles propios de ese componente.
- Código, configuración y pruebas: fuente para verificar qué está efectivamente implementado; la documentación no sustituye esta comprobación.

Cuando las versiones en español e inglés difieran, usar la versión española como fuente editorial y corregir la traducción inglesa correspondiente.

## Orden para actualizar la documentación

Después de aprobar e implementar un cambio, actualizar la documentación aplicable en este orden. No todos los cambios requieren modificar todos los documentos:

1. Actualizar el README del componente afectado si cambian su uso o comportamiento.
2. Actualizar o añadir pruebas y documentación específica del componente cuando cambien su comportamiento, configuración o ejecución.
3. Actualizar `CONTEXT.es.md` si cambia el estado funcional o técnico general, la arquitectura, el stack o una decisión del proyecto.
4. Actualizar `README.es.md` de la raíz si cambian las capacidades destacadas, requisitos o instrucciones generales de ejecución y uso.
5. Traducir las modificaciones aplicables a los README, `CONTEXT.md` y demás documentos equivalentes en inglés. La versión inglesa debe reflejar el contenido español aprobado, no introducir decisiones nuevas.
6. Modificar `AGENTS.es.md` y luego `AGENTS.md` solo cuando cambien las reglas de trabajo, las fuentes de referencia o el proceso de sincronización documental.
7. Revisar enlaces y coherencia entre versiones, y ejecutar las validaciones disponibles. Si una modificación no aplica a un documento, no cambiarlo solo para seguir la lista.

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
