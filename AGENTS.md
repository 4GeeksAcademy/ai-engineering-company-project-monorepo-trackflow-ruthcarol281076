# Agent Instructions — TrackFlow

This file defines **how the assistant should work** in the repository. TrackFlow's specific functional and technical context is maintained in [`CONTEXT.md`](./CONTEXT.md); consult that document for project status, technologies, and pending decisions. Do not duplicate that information here.

Spanish is the project's **primary editorial language**. English documents are reference translations and must be kept aligned with their Spanish counterparts.

## Scope

These instructions apply to the entire repository. The agent should inspect and work within the workspace while respecting more specific instructions in folders it modifies.

Before making changes:

1. Consult `AGENTS.es.md` for working rules and `CONTEXT.es.md` for functional and technical context. `AGENTS.md` and `CONTEXT.md` are their English translations.
2. Review the root `README.es.md` and `README.md` for general orientation; in the affected folder, read its local README and available translation.
3. Inspect related code, configuration, and tests to confirm the actual implementation status.
4. Follow local subfolder instructions, which may supplement these rules.

## Working rules

- Keep changes focused on the requested task.
- Do not modify or delete existing changes without authorization.
- Reuse patterns and dependencies already present in the repository.
- Do not invent TrackFlow facts: consult `CONTEXT.md` and relevant component documentation.
- Do not include secrets, credentials, or real personal data.
- Document every new application, service, agent, or pipeline.
- Add or update tests when behavior changes.
- Verify changes with the most specific available test, lint, or typecheck.

## Reference documentation

Use each document for its purpose and avoid duplicating content:

- `AGENTS.es.md` / `AGENTS.md`: assistant workflow, review and validation criteria, and documentation synchronization.
- `CONTEXT.es.md` / `CONTEXT.md`: TrackFlow's cross-cutting functional and technical context, actual status, stack, and pending decisions.
- Root `README.es.md` / `README.md`: general orientation for users and developers, main capabilities, and project setup and usage.
- README in the affected folder or component (for example, `uis/website/README.es.md` and `uis/website/README.md`): that component's purpose, scope, setup, and details.
- Code, configuration, and tests: the source for verifying what is actually implemented; documentation does not replace this check.

When the Spanish and English versions differ, use the Spanish version as the editorial source and correct the corresponding English translation.

## Documentation update order

After an approved change is implemented, update the applicable documentation in this order. Not every change requires updating every document:

1. Update the affected component's README if its usage or behavior changes.
2. Update or add component-specific tests and documentation when its behavior, configuration, or setup changes.
3. Update `CONTEXT.es.md` if the cross-cutting functional or technical status, architecture, stack, or a project decision changes.
4. Update the root `README.es.md` if the highlighted capabilities, requirements, or general setup and usage instructions change.
5. Translate applicable changes into the READMEs, `CONTEXT.md`, and other equivalent English documents. The English version must reflect the approved Spanish content, not introduce new decisions.
6. Modify `AGENTS.es.md` and then `AGENTS.md` only when working rules, reference sources, or the documentation synchronization process change.
7. Review links and consistency between versions, and run available validations. If a change does not apply to a document, do not edit it just to follow the list.

## Repository access

The agent should be able to work with the entire repository and:

- Read any file in the workspace.
- Search text, symbols, and references across all folders.
- Inspect relevant dependencies and configuration.
- Review related files before modifying code.
- Clearly report when an operation requires external permissions.

## Validation

After each change:

1. Run a validation specific to the affected component.
2. Review compilation, lint, or test errors.
3. Summarize the files changed and validations performed.
