# Memory Candidate Review

## Objetivo

Evaluar una observación operativa de TrackFlow y decidir si debe convertirse en una propuesta de memoria para un agente.

La skill solo analiza y clasifica. No persiste memorias, no modifica el corpus RAG y no ejecuta acciones externas.

## Cuándo usarla

Usa esta skill cuando una conversación, incidencia, corrección de un operador o reporte contenga información que podría reutilizarse en futuras sesiones del agente.

No la uses para consultar el estado actual de un paquete, modificar una política oficial, actualizar el CRM o guardar directamente una memoria.

## Inputs

Todos los campos deben estar presentes. Si un valor no se conoce, usa `unknown` o `null` según corresponda.

```yaml
candidate_text: string
country: "US" | "ES" | "unknown"
carrier: string | null
client_type: "B2B" | "B2C" | "unknown"
source_type: "conversation" | "incident" | "operator_correction" | "report"
repetition_count: number
```

### Descripción de inputs

- `candidate_text`: texto que se quiere evaluar.
- `country`: país relacionado con la observación.
- `carrier`: transportista relacionado, si existe.
- `client_type`: tipo de cliente afectado.
- `source_type`: origen de la observación.
- `repetition_count`: número de veces que se ha observado el mismo patrón.

## Proceso

1. Identificar si el texto contiene una regla de transportista, una incidencia recurrente, una preferencia B2B o información no memorizable.
2. Comprobar si existe evidencia de repetición o una corrección explícita de un operador.
3. Detectar datos sensibles de ubicación, información comercial restringida o consultas puntuales.
4. Clasificar el resultado como `propose`, `reject` o `needs_review`.
5. Devolver una propuesta normalizada solo cuando la información sea reutilizable y segura.

## Output

La respuesta debe ser YAML válido y contener todos estos campos:

```yaml
decision: "propose" | "reject" | "needs_review"
category: "carrier_rule" | "recurring_incident" | "b2b_report_preference" | "sensitive_data" | "one_off" | "commercial_contract" | "unknown"
reason: string
normalized_memory: string | null
scope:
  country: "US" | "ES" | "unknown" | null
  carrier: string | null
  client_type: "B2B" | "B2C" | "unknown" | null
confidence: number
```

`confidence` debe ser un número entre `0` y `1`.

## Reglas de decisión

### Proponer memoria

Usa `decision: propose` cuando el candidato sea una regla corregida de transportista, una incidencia recurrente verificable o una preferencia recurrente de un cliente B2B.

La propuesta debe ser generalizable, no incluir datos personales innecesarios y conservar el ámbito de país, transportista o cliente cuando sea necesario.

### Rechazar

Usa `decision: reject` para:

- Consultas puntuales de tracking.
- Cierres de conversación o tareas de un solo uso.
- Direcciones exactas de clientes B2C.
- Rutas internas de almacenes o información sensible de seguridad física.
- Contratos comerciales activos en negociación.
- Incidencias aisladas sin patrón reutilizable.

En estos casos, `normalized_memory` debe ser `null`.

### Solicitar revisión

Usa `decision: needs_review` cuando la observación parezca relevante, pero falte evidencia de repetición, ámbito, fuente fiable o autorización suficiente.

## Criterios de aceptación

La skill se considera correcta si cumple todos estos criterios:

1. Tiene un único objetivo: evaluar candidatos de memoria.
2. Documenta todos sus inputs y valores permitidos.
3. Devuelve siempre una decisión, categoría, justificación, ámbito y confianza.
4. Propone reglas corregidas de transportistas.
5. Propone incidencias recurrentes solo cuando existe un patrón verificable.
6. Propone preferencias recurrentes de reportes B2B.
7. Rechaza consultas puntuales de tracking.
8. Rechaza direcciones B2C y rutas internas de almacenes.
9. Rechaza información de contratos comerciales activos.
10. Solicita revisión cuando faltan datos para decidir con seguridad.
11. Nunca persiste datos ni escribe en una colección RAG.
12. Diferencia explícitamente entre clientes B2B y B2C.
13. Devuelve una confianza dentro del rango `0..1`.

## Ejemplos

### Regla de transportista

Input:

```yaml
candidate_text: "SEUR ya no cubre esa zona rural de Zaragoza; desde el mes pasado usamos el transportista local."
country: "ES"
carrier: "SEUR"
client_type: "B2B"
source_type: "operator_correction"
repetition_count: 3
```

Output esperado:

```yaml
decision: "propose"
category: "carrier_rule"
reason: "Es una corrección operativa repetida y acotada a un transportista y país."
normalized_memory: "En ciertas zonas rurales de Zaragoza, SEUR no cubre la ruta; usar el transportista local."
scope:
  country: "ES"
  carrier: "SEUR"
  client_type: "B2B"
confidence: 0.95
```

### Consulta puntual

Input:

```yaml
candidate_text: "¿Dónde está el paquete con tracking XJ4471?"
country: "unknown"
carrier: null
client_type: "B2C"
source_type: "conversation"
repetition_count: 1
```

Output esperado:

```yaml
decision: "reject"
category: "one_off"
reason: "Es una consulta puntual de tracking y no un patrón reutilizable."
normalized_memory: null
scope:
  country: null
  carrier: null
  client_type: "B2C"
confidence: 0.99
```

### Evidencia insuficiente

Input:

```yaml
candidate_text: "Este transportista está teniendo problemas últimamente."
country: "US"
carrier: "DHL"
client_type: "unknown"
source_type: "conversation"
repetition_count: 1
```

Output esperado:

```yaml
decision: "needs_review"
category: "unknown"
reason: "La observación podría ser relevante, pero no aporta evidencia suficiente ni un patrón verificable."
normalized_memory: null
scope:
  country: "US"
  carrier: "DHL"
  client_type: null
confidence: 0.55
```

## Limitaciones

- La skill no sustituye la aprobación humana para memorias sensibles o de alto impacto.
- La skill no decide permisos de acceso entre clientes.
- La skill no actualiza políticas oficiales de TrackFlow.
- La persistencia, expiración, auditoría y eliminación de memorias pertenecen a otro componente.
