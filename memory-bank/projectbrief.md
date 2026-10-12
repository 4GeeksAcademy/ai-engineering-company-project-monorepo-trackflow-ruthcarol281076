# Project Brief — TrackFlow

## Descripción del negocio

TrackFlow es una empresa de logística de última milla y gestión de almacenes que opera en Los Ángeles (Estados Unidos) y Zaragoza (España). Almacena inventario de marcas de comercio electrónico, prepara y empaqueta pedidos, coordina envíos con transportistas y gestiona devoluciones y reacondicionamiento.

La operación conecta tres necesidades principales:

- Visibilidad del inventario por SKU y almacén.
- Seguimiento de envíos y coordinación de transportistas.
- Atención a clientes B2B, marcas que contratan el servicio, y clientes B2C, destinatarios finales de los paquetes.

La empresa trabaja con dos almacenes que utilizan sistemas diferentes, ocho transportistas y varios procesos que todavía dependen de hojas de cálculo, correos, portales aislados y revisiones manuales.

## Problema que resuelve el proyecto

TrackFlow no dispone de una visión unificada y suficientemente actualizada de inventario, envíos, incidencias y devoluciones. Esto provoca discrepancias de stock, seguimiento manual de paquetes, decisiones inconsistentes en devoluciones, consultas repetitivas para el equipo de CX y reportes ejecutivos preparados manualmente.

El proyecto de TrackFlow Tech busca construir sistemas, integraciones y automatizaciones inteligentes que reduzcan ese trabajo manual y permitan operar la logística de ambos países con información más consistente y trazable.

## Objetivos del proyecto

1. Unificar la información operativa de los dos almacenes.
2. Mejorar el seguimiento de envíos y la gestión del rendimiento de transportistas.
3. Automatizar o asistir la gestión de devoluciones e incidencias.
4. Proporcionar una base para agentes de IA orientados a operaciones y atención al cliente.
5. Mantener una memoria de agente útil, controlada y separada del conocimiento curado utilizado por RAG.
6. Centralizar métricas, eventos y reportes para facilitar decisiones operativas y ejecutivas.

## Alcance actual: memoria del agente

El foco de esta rama es documentar la memoria del agente de TrackFlow. La memoria debe ayudar al agente a conservar conocimiento operativo que se repite entre sesiones, especialmente:

- Reglas corregidas de asignación y cobertura de transportistas.
- Contexto de incidencias conocidas y recurrentes.
- Preferencias recurrentes de clientes B2B sobre sus reportes mensuales.

La consolidación recomendada es por transportista y país, en lugar de crear una entrada aislada por cada ticket.

## Información que no debe memorizarse

- Direcciones exactas de clientes B2C.
- Rutas internas de los almacenes.
- Datos de una incidencia puntual sin patrón repetible.
- Información de contratos comerciales activos en negociación.
- Cualquier otro dato sensible que no sea necesario para mejorar el comportamiento operativo del agente.

Las validaciones deben cubrir explícitamente a clientes B2B y B2C y proteger la información sensible de ubicación.

## Usuarios y áreas implicadas

- Ana Whitfield: operaciones de almacén.
- Carlos Vega: última milla y gestión de transportistas.
- Sofía Ramos: logística inversa.
- Valentina Cruz: experiencia del cliente y agente CX.
- Miguel Torres: comercial y relación con clientes.
- Andrés Kim: tecnología y operación de los sistemas.
- Dirección ejecutiva: seguimiento de KPIs y reportes consolidados.

## Fuera de alcance de esta rama

- Implementar una plataforma completa de inventario.
- Construir un agregador productivo para las ocho APIs de transportistas.
- Crear un CRM o un sistema completo de tickets.
- Sustituir la base de conocimiento RAG por memoria episódica.
- Mezclar memorias del agente con colecciones de conocimiento de la empresa.

## Fuentes

- `CONTEXT.md` y `CONTEXT.es.md` del monorepo.
- `company-choice.md`.
- `content/contexts/00-general-contexts/CONTEXT-trackflow-briefing.*.md` del repositorio `ai-engineering-syllabus`.
- `content/contexts/08-agent-engineering/memory/CONTEXT-trackflow.*.md` del repositorio `ai-engineering-syllabus`.
- `content/projects/ai-eng-milestone-ai-driven-engineering/README.es.md` del repositorio `ai-engineering-syllabus`.
