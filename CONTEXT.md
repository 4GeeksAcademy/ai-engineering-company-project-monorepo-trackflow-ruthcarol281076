# TrackFlow Project Context

> This document defines the project's **functional and technical context**: domain, implemented state, stack, and decisions that have not yet been made. Spanish is the primary editorial source; this file is its English translation. It is not a general workflow guide: consult [`AGENTS.md`](./AGENTS.md) for which documentation to use and how to keep versions synchronized. Distinguish **implemented** state, business context, and future **proposals**. Do not present proposed capabilities as if they already existed.

## 1. Project Overview

### Purpose

TrackFlow is a fictional cross-border logistics and warehouse management company, with operations described between Los Angeles (United States) and Zaragoza (Spain). This repository currently contains two frontend demonstrations: a public corporate website presenting the services and simulating some interactions, and an initial backoffice with sample operational information.

### Current status

The project is in a **static/educational frontend prototype** phase, not production. Both interfaces are served as HTML files and have no connected backend services, APIs, database, authentication, or persistence. Tracking, sign-in/registration, and contact interactions are local demonstrations; the backoffice indicators are sample data.

The briefing describes business needs and possible challenges, but that does not mean those solutions have been implemented. The services, data, and agents directories are mostly documentation skeletons or templates.

### Role of AI in the application

**Current status:** no AI features are connected to the interfaces, and no provider, model, or SDK is configured for the application.

**Product context/proposal:** the briefing identifies possible initiatives such as visual returns classification, semantic search/RAG, customer service and executive assistants, and explainable recommendations for carrier selection. None is implemented in this prototype. Provider, model, SDK, architecture, and usage limits remain **undefined** until a specific initiative is approved.

## 2. Tech Stack

### Frontend

- Static HTML5, with CSS and native JavaScript embedded in the existing HTML documents.
- Tailwind CSS is loaded from `https://cdn.tailwindcss.com`; the interfaces require an internet connection to receive these styles.
- The backoffice loads `DM Sans` and `Space Grotesk` from Google Fonts. The website also uses remote images.
- The pages can be served with Python 3 without installing project dependencies.
- No React, Vue, Next.js, TypeScript, Vite, or other framework or build process is configured for the current interfaces.

### Backend / API

There is no functional backend or implemented API at present. `services/` contains guidance documentation, not an identified deployable API application. The framework and API contracts remain **undefined**.

### Database and ORM

No database, functional schema, or ORM is configured. The engine, hosting, data model, migration strategy, and retention policy remain **undefined**. Do not assume PostgreSQL, Supabase, MongoDB, Prisma, Drizzle, pgvector, or any other technology.

### AI services

No AI provider, models, SDK, streaming, or inference tools are configured. These remain **undefined**. The AI capabilities in the briefing are proposed product goals, not existing integrations.

## 3. Architecture and Folder Structure

The repository is a monorepo organized by responsibility. Its current structure includes guidance and template folders; not all of them contain executable systems.

```text
.
├── CONTEXT.es.md          # Functional and technical context in Spanish (editorial source)
├── CONTEXT.md             # English translation of the functional and technical context
├── AGENTS.es.md           # Assistant workflow instructions in Spanish
├── AGENTS.md              # English translation of assistant workflow instructions
├── uis/
│   ├── website/           # Public website: index.html and application.html
│   └── backoffice/        # Static internal dashboard: index.html
├── services/              # Documented space for APIs and workers; no backend implemented
├── agents/                # Guides, tools, and template for future agents
│   ├── _template/         # Agent skeleton and example tests
│   └── tools/             # Guide for agent tools
├── skills/                # Reusable capabilities; includes code-review, data-analysis, and research
├── mcps/                  # Documented space for MCP servers
├── workflows/             # Documented space for automations
├── data/
│   ├── raw/               # Space for source data
│   ├── pipelines/         # Space for pipelines
│   ├── process/            # Space for processed data
│   └── eval/              # Space for evaluation
├── packages/
│   └── shared/            # Example metadata and shared TypeScript types
├── shared/                # Shared resources and schemas
├── docs/                  # Cross-cutting documentation
├── infra/                 # Space for infrastructure and deployment
├── scripts/               # Space for helper scripts
└── internal/              # Space for internal tools
```

### Current frontend applications

- `uis/website/index.html`: corporate landing page with navigation and browser-based demonstrations.
- `uis/website/application.html`: contact form with browser validation and simulated confirmation.
- `uis/backoffice/index.html`: static dashboard with sample indicators, warehouse comparison, and operational sections.
- `packages/shared/types/index.ts`: generic `Id` and `BaseEntity` examples; these do not yet constitute a TrackFlow domain model.

### Run locally

From the repository root, start each interface in a separate terminal:

```bash
cd uis/website
python3 -m http.server 8080
```

Public website: <http://localhost:8080/>.

```bash
cd uis/backoffice
python3 -m http.server 8081
```

Backoffice: <http://localhost:8081/>. To stop a server, press `Ctrl+C` in its terminal.

## 4. Coding Standards

### Observed conventions

- Keep the static interfaces in their corresponding `uis/` folders; do not mix the public website and the backoffice.
- Existing pages use semantic HTML, CSS, and native JavaScript embedded in their files. Do not assume a framework or build process is part of the stack.
- Keep the design responsive and interactions keyboard-accessible; respect reduced-motion preferences when adding animations.
- The public UI is written in Spanish. Preserve its language and tone unless localization is explicitly requested; backoffice content should also remain consistent with the product.
- In documentation, clearly state what is real, simulated, and proposed.
- The shared package contains example TypeScript types, but the current frontend is not configured to compile TypeScript.

### Recommendations for new changes

- Use descriptive names consistent with the file and domain. In JavaScript, use `camelCase` for variables and functions; use `PascalCase` for types/components if introduced; prefer `kebab-case` for new filenames.
- Keep code modular within the prototype's constraints. Extract repeated logic when it improves readability without adding unnecessary infrastructure.
- Add comments only when they clarify non-obvious logic or important decisions.
- Validate forms on the client for the demonstration experience, but do not treat client-side validation as a substitute for validation and security in a future backend.
- Handle external resource failures reasonably and do not show an operation as successful if no network request was made.

### To be defined

No formatter, linter, test system, component convention, or API error-handling policy is established for the applications. If a backend or framework is introduced, define these rules in component-specific documentation and add automated checks.

## 5. AI & Prompt Guidelines

### Current status

- No application system prompts or model calls exist.
- There is no streaming, model-output validation, or Zod/JSON Schema integration for AI responses.
- Forms, tracking, and indicators are demonstrations; do not attribute them to an agent or model.

### Proposal for future AI features

When an AI feature is approved:

1. Store versioned and documented prompts in a dedicated location for the agent or feature (for example, `agents/<name>/prompts/`) instead of scattering system text through the UI. This location is a **proposal**, not an existing convention.
2. Define the provider, model, SDK, privacy controls, rate limits, error handling, and cost strategy before connecting the feature.
3. Validate any structured output on the server using an explicit schema. Zod or JSON Schema are options to evaluate; the project has not selected one.
4. Do not expose provider keys in the browser. Authenticated model calls must go through a backend when one exists.
5. Add evaluations and test cases in `data/eval/` to measure quality, safety, and regressions.
6. Use streaming only when the use case and backend require it; transport, cancellation, and client rendering remain undefined.
7. Do not allow a model to make sensitive operational decisions (for example, approving returns or selecting carriers) without defined rules, limits, traceability, and human oversight.

## 6. Data Model and Environment Variables

### Key entities

There are no implemented business tables or entities. As a future, subject-to-validation **initial domain proposal**, the following could be defined:

- `Warehouse`: Los Angeles or Zaragoza warehouse.
- `SKU` and `InventoryItem`: product and stock per warehouse.
- `Order` and `Shipment`: order and shipment, including statuses and tracking events.
- `Carrier`: carrier and service metrics.
- `Return`: return request, inspection, and resolution.
- `Client`: TrackFlow brand client.

These entities are a proposal derived from the briefing, not existing tables or an approved schema. Agree on identifiers, relationships, states, auditing, privacy, and sources of truth before persisting data. Avoid adding real customer or personal data to the repository.

### Environment variables

No environment variables required by the interfaces or configuration files for executable services have been identified. There is no `DATABASE_URL`, AI provider key, or other credential defined as necessary for this prototype.

If a backend, database, or external service is added, document **only the names** of the required variables and their purposes here; keep values locally outside version control and never include secrets in the frontend. The specific list remains **undefined**.

## 7. Project-Specific Limits and Cautions

This section records only distinctions specific to TrackFlow's status and domain; documentation sources and general workflow, review, and synchronization procedures are defined in [`AGENTS.md`](./AGENTS.md) and its Spanish source, [`AGENTS.es.md`](./AGENTS.es.md).

- Always distinguish business-context facts, features present in the prototype, and roadmap ideas. The briefing does not prove a system has been built.
- Tracking, forms, sign-in/registration, and backoffice indicators are demonstrations; do not describe them as real operations or as connected to services.
- Backend systems, APIs, databases, carrier integrations, AI, and persistence are not implemented in the prototype described here. Their technologies and contracts remain undecided.
- The entities in section 6 are domain proposals, not approved tables, contracts, or models.
- Do not assume real personal or customer data may be used. Any future inclusion requires first defining its source, authorization, privacy, and controls.
