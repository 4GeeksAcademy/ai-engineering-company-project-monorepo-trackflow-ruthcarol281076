# Work plan — TrackFlow bilingual public website

## Purpose and scope

This plan guides implementation and verification of TrackFlow's public website in Spanish and English. The SPEC is the acceptance contract: [`SPEC.es.md`](./SPEC.es.md) is the editorial source and [`SPEC.md`](./SPEC.md) is its synchronized translation. The business brief, repository context, and general instructions remain required sources.

**Working branch:** `feature/website-bilingual` (created from the checkout containing the SPEC files; see base note below).  
**Out of scope:** backend, API, real lead submission, form-data persistence, analytics, real login, framework, build process, or new project runtime dependencies.

## Requirements sources

- `uis/website/SPEC.es.md` and `SPEC.md`: complete requirements and acceptance criteria, including localization.
- `uis/website/BRIEFING.es.md` and `BRIEFING.en.md`: domain, commercial content, fields, validation, and messages. Do not modify these briefs.
- `CONTEXT.es.md` / `CONTEXT.md`: static educational frontend; no connected services, database, or persistence.
- `AGENTS.es.md` / `AGENTS.md`, project instructions, and `uis/website/README.es.md` / `README.md`: editorial conventions, architecture, and run instructions.
- Current code: `index.html`, `application.html`, `assets/js/validation.js`, assets, and existing styles. Inspect implemented state; do not infer it from documentation.

## Implementation decisions

1. Keep static HTML, CSS and native JavaScript, Tailwind CDN, and the `uis/website` organization; do not introduce a framework/build process or runtime dependency.
2. Spanish is the initial language and editorial source. English must be a complete and faithful translation.
3. Selector on both pages: 🇪🇸 flag + “Español” and 🇺🇸 + “English”. Text labels are always visible and accessible; do not rely on emoji for the accessible name.
4. Persist only the language preference in `localStorage` (versioned key, validated `es`/`en` value). Never persist form fields, comments, or personal information. If `localStorage` is unavailable, fails, or contains no valid value, render the page in Spanish by default without breaking it; the selector must still allow changing language on the current page. Preserve the selection across pages and reloads through `localStorage` when available.
5. Keep control `name`s, option values, business rules, and exact Spanish messages required by the SPEC independent of the displayed language.
6. Form success and simulations must truthfully explain that data is not transmitted or stored.
7. PageSpeed/Lighthouse score, public URL, screenshot, push, and PR review require real evidence; code inspection alone does not satisfy them.
8. `main` will be the PR target, and the PR will integrate all changes on this branch. Before publishing, update refs and review the diff and potential conflicts, since `main` may advance.
9. Codespaces provides a temporary public URL for demonstration; the canonical URL belongs to the official production domain and requires confirmation. Temporary URL verified for this session (2026-11-16): https://fluffy-halibut-vq5wvjrrxrqcpjj-8080.app.github.dev/ . Do not use it as a canonical or indexable alternate URL; availability depends on the Codespace and server remaining active.
10. If `localStorage` is unavailable, fails, or contains no valid value, render the page in Spanish by default without breaking it and keep the selector functional on the current page. Preserve the preference across pages and reloads through `localStorage` when available; without storage, persistence across navigation or reload is not guaranteed.

## Phases and tasks

### Phase 0 — Align documents and prepare traceability

- [ ] Read applicable agent instructions and all sources above; check that `README.md` and `README.es.md` are synchronized.
- [ ] Audit `index.html`, `application.html`, `assets/js/validation.js`, assets, and links; also inspect browser console errors and Git status.
- [ ] Create a tracking matrix for each SPEC AC: requirement, file/element, test method, result, and evidence. Record gaps before editing.
- [ ] Confirm the briefs remain unchanged and necessary differences are limited to SPEC, plan, implementation, and run documentation.
- [x] Verify the branch's historical base: the SPEC files were not present on local `main` during plan preparation. Decision confirmed with the owner: the PR target will be `main` and will integrate all changes on this branch. Do not discard or rewrite source commits.

**Output / gate:** reviewed inventory and requirement-to-test map; no simulated capability is presented as real.

### Phase 1 — Localization and shared selector

- [ ] Design a maintainable native-JavaScript translation structure without duplicating validation behavior. Use explicit content/state keys and safe interpolation for variables such as the counter.
- [ ] Add an accessible selector to both page headers; communicate selected language (`aria-pressed` or equivalent), visible focus, keyboard operation, and visible “Español”/“English” labels.
- [ ] Apply language before presenting the view where possible to avoid a flash of the wrong language. Validate the stored language and handle `localStorage` failures.
- [ ] Update `document.documentElement.lang` and every static/dynamic text; preserve brand names, email addresses, phone numbers, `name`, and `value` fragments.
- [ ] Keep the selection when navigating between landing and form and using CTAs, links, and browser back/reload.
- [ ] Localize title, description, and relevant visible metadata. Do not fabricate alternate/canonical URLs for English when no public URL exists. Keep JSON-LD compliant with the TrackFlow contract.

**Tests / gate:** test default language, switching on both pages, cross-page navigation, reload, invalid storage values, and blocked storage; inspect `lang`; verify that only the preference is stored.

### Phase 2 — Landing page, content, and navigation

- [ ] Align header, hero, CTA, three services, US/Spain coverage, four benefits, contact, and footer with `BRIEFING.es.md`; translate every block completely into English.
- [ ] Maintain the required order and valid navigation/CTA links in both languages; retain existing simulations only when they do not distract from the commercial objective and are honestly labeled.
- [ ] Limit primary desktop and mobile navigation to Home → Services → Coverage → Contact. Interleave additional operational sections contextually without removing content or changing the relative order of required destinations.
- [ ] Create a local SVG favicon inspired by the TF monogram and include it in `index.html` and `application.html`.
- [ ] Check `mailto:`/`tel:` links, LinkedIn, image alt text, failed resources, and behavior without the Tailwind CDN.
- [ ] Validate HTML semantics, headings, landmarks, title/description, canonical, social metadata, and Organization JSON-LD. Do not present demonstration data/capabilities as real.
- [ ] Use the `index.html` header and footer as the visual reference for their equivalents in `application.html`; preserve brand identity and design system even if the form uses contextual back navigation.

**Tests / gate:** bilingual content review block by block, link validation and navigation order, favicon availability, parseable JSON-LD, comparison against the SPEC content matrix, and visual comparison of both pages' headers/footers on mobile and desktop.

### Phase 3 — Multi-step form and navigation flow

- [ ] Organize all existing fields into logical steps (company/contact; operations/services; comments/privacy and submission), following the SPEC.
- [ ] Implement semantic, localized progress; previous/next navigation, coherent focus on step change, and blocking progression when the current step has errors.
- [ ] Retain values when going forward/back only in page memory. Fully reset fields, steps, errors, `aria-invalid`, counter, modal/warning, and success.
- [ ] Provide localized states and text in both languages. Do not send, serialize, store, or log form data.
- [ ] Implement accessible confirmation for `volume === "0-100"` and a selected product: exact Spanish warning and English equivalent; confirm/cancel closes the dialog, returns to the form view, and preserves the selection; cancel does not show success. Confirmation must not skip validation.

**Tests / gate:** keyboard and screen reader; forward/back with data; blocking errors; modal confirm/cancel; change volume/product; reset from each state.

### Phase 4 — Exhaustive validation and messages

- [ ] Verify field types, `required`, `name`, and `value` against the SPEC; associate labels, fieldsets/legends, errors, and `aria-describedby`.
- [ ] Implement/adjust rules: company ≥2 characters after trim; contact has two words; valid email without blocking free domains; phone starts with `+` and includes country code/number; optional absolute URL with protocol; required selects; at least one service; 3PL radio; required privacy acceptance.
- [ ] Preserve every required Spanish message verbatim. Provide functionally equivalent, localized English translations.
- [ ] Update errors on edit/blur and advance/submit; synchronize `aria-invalid`, announcements, and focus without losing other data.
- [ ] Visible localized counter and real 500-character limit, including paste and DOM-manipulation cases. Keep the exact `X` rule specified in the SPEC.
- [ ] Show the complete localized success message only after validation and any required confirmation; explicitly state submission is simulated and data is not transmitted.

**Tests / gate:** valid/invalid cases per field and language; verify literal Spanish messages; test boundaries of 0/1/2 characters, two tokens, phone, URL, 500/501 characters, groups, privacy, and complete form.

### Phase 5 — Accessibility, responsive behavior, and visual robustness

- [ ] Audit semantics, tab order, visible focus, accessible names, mouse-free navigation, dialog Escape/focus, and announcements for changes/errors.
- [ ] Test zoom and reduced-motion preferences; do not use color as the only signal; measure WCAG AA contrast (4.5:1 normal text, 3:1 large text/relevant components).
- [ ] Test 320, 375, 768, and ≥1024 px on the landing page and every form step; fix horizontal overflow, long English text, buttons, and selector.
- [ ] Use Tailwind utilities and breakpoints; document small CSS exceptions. Check functional content if the CDN, images, or other remote resources fail.

**Tests / gate:** manual accessibility checklist and available tools; breakpoint captures; no overflow or inaccessible controls.

### Phase 6 — End-to-end verification and delivery

- [ ] Run available static checks (HTML/JSON-LD/links/resources) and browser tests for both languages, all flows, clean console, and dynamic states.
- [ ] Test startup from `uis/website` using `npx serve .` and `python3 -m http.server 8080`; document the official Codespaces command and verify the port.
- [ ] In Codespaces, manually set the port to **Public**, save the accessible URL, and test it in a private/external browser session if permitted.
- [ ] Run PageSpeed Insights on the public URL; if inaccessible, run DevTools Lighthouse on the same view. Save screenshot/evidence for performance ≥80; truthfully record if it is not met.
- [ ] Update Spanish and English READMEs: bilingual scope, selector, privacy/no form persistence, run method, and tests performed.
- [ ] Review diff, unchanged brief, synchronized SPEC/PLAN, absence of PII in storage, and docs/links. Push the branch and prepare a PR with summary, AC checklist, URL, and real screenshot. Do not merge without review.

**Exit criteria:** every AC in `SPEC.es.md`/`SPEC.md` has a verifiable result and evidence; external blockers (port forwarding, PSI) are explicitly recorded, not simulated.

## Traceability and verification matrix

| Criterion | Implementation coverage | Minimum verification |
|---|---|---|
| AC-01 HTML, structure, content | Phases 1–2, 4 | DOM inspection, links, resources, labels, JSON-LD, ES/EN content review |
| AC-02 Responsive, Tailwind, performance | Phases 5–6 | Viewports, CSS review, clean startup, PSI/Lighthouse capture ≥80 |
| AC-03 Accessibility | Phases 1, 3, 5 | Keyboard, screen reader/accessibility tree, focus, contrast, zoom, reduced motion |
| AC-04 Form and validation | Phases 3–4 | Field edge cases, steps, reset, modal, success in ES/EN |
| AC-05 Languages and selector | Phase 1 and tests in every phase | Selector, complete string coverage, `lang`, navigation, storage |
| AC-06 TrackFlow context and delivery | Phases 0, 2, 6 | Unchanged brief, consistent headers/footers, honest claims, console, URL/capture/PR |

## Open decisions

No open decisions at this time.