# SPEC — TrackFlow Public Website

## 1. Summary and objectives

| Field | Definition |
|---|---|
| Product | TrackFlow public website |
| Milestone | Company's public website |
| Specification status | Target requirements and acceptance criteria; this document is not evidence that they are implemented or verified |
| Base language | Spanish |
| Audience | E-commerce brands interested in outsourcing logistics operations in the United States, Spain, or both markets |
| Primary objective | Professionally present TrackFlow's services and coverage and capture qualified commercial inquiries |
| Scope | Public landing page `index.html` and commercial inquiry form on separate page `application.html`, with client-side validation and simulated confirmation |
| Out of scope | Backend, submission or storage of inquiries, real authentication, carrier lookup, and user analytics/tracking |

The website must explain warehouse management, last-mile deliveries, and reverse logistics, as well as operations in Los Angeles and Zaragoza. The form is for e-commerce businesses, not consumers looking to track packages or manage returns.

This specification combines the TrackFlow brief and milestone requirements. If form requirements conflict, retain the fields, options, business rules, and domain messages from the brief, and adopt the milestone requirement to organize the experience as a multi-step form with a progress bar.

## 2. Context and architecture

### 2.1 Current architecture and boundaries

- Static frontend application within `uis/website/`; it requires no backend, build step, or project dependency installation.
- `index.html`: Spanish-language landing page with metadata, structured data, commercial sections, and links to the form.
- `application.html`: standalone commercial inquiry form.
- `assets/js/validation.js`: form validation and interactions, loaded from `application.html`.
- Semantic HTML, native JavaScript, and Tailwind CSS via CDN; existing custom styles should be limited to justified cases that Tailwind cannot reasonably address.
- Forms, tracking, and any commercial confirmation are local simulations. No data is sent or persisted.
- The documented run method must work in Codespaces using `npx`; the `uis/website` folder can be served with `npx serve .` from that directory. The public URL requires enabling port forwarding for the selected port as **Public** in Codespaces.

### 2.2 Language and content

All experience included in this delivery—landing page, form, validation, warnings, success state, and navigation—must be in Spanish. English is an optional enhancement, not an acceptance requirement.

The landing page must retain the sections and corporate content defined in `BRIEFING.es.md`: header, hero, three services, coverage in two countries, four benefits, contact, and footer. It may include additional demonstration sections, provided they do not replace or contradict required commercial content and are honestly identified as simulations.

## 3. Functional requirements

### FR-01 — Landing page and navigation

- Present the TrackFlow name or logo and clear navigation to Home, Services, Coverage, and Contact.
- Show the headline «Logística que escala con tu e-commerce», the subtitle established in the brief, and a «Solicitar información» call to action linking to `application.html`.
- Present the following in reading order: services, coverage, benefits, contact, and footer. The three services must include every descriptive point in the brief; coverage must specify warehouse, reach, and carriers for the United States and Spain.
- Present the four benefits in the brief: binational operations, +130 professionals, proprietary technology, and e-commerce specialization.
- Publish the commercial email and Los Angeles and Zaragoza phone numbers with working `mailto:` and `tel:` links where appropriate.
- Include the copyright specified in the brief and a LinkedIn link in the footer.

### FR-02 — Multi-step commercial inquiry form

- `application.html` presents an accessible, responsive multi-step form with a progress bar/indicator communicating the current step and progress.
- Organize fields into understandable steps (for example: company and contact; operations and services; review, comments, and privacy). Users can go forward and back without losing entered values.
- Do not advance when required fields in the current step have errors. Validate all fields before simulated submission and require completion of every step.
- Include «Anterior» and «Continuar» controls as appropriate for each step, a final submit button, and a secondary button to clear/reset the form. Reset clears values, errors, progress, counter, warning, and success state.
- The form collects exactly the fields, options, and required status defined in the table in section 5. It must use associated `<label>` elements, appropriate input types, and `<fieldset>/<legend>` for checkbox and radio groups.
- Run validation on blur and/or when a field is edited, as well as on attempts to advance or submit. Show errors next to the field or group and associate them using `aria-describedby`; if an error summary is included, it must identify affected fields.
- No data is transmitted or stored. A valid submission displays the success message from the brief and announces it accessibly.
- If monthly volume is «0-100» and a product type is selected, open a confirmation modal with the low-volume warning. After confirming or canceling, the modal closes and returns visually to the form, preserving the selected «0-100» value. Affirmative confirmation allows submission to continue subject to all other validations; canceling does not submit or show success.

### FR-03 — SEO and structured data

- Include a useful title and description, document language, canonical URL, and basic social metadata on the landing page, consistent with the brand and intended public URL.
- Include Schema.org `Organization` JSON-LD markup on the landing page using the data specified in section 5. The markup must be valid JSON and must not contradict visible content.
- Informative images must have descriptive `alt` text; decorative images must use `alt=""` or otherwise avoid adding noise for screen readers.

### FR-04 — Run and evaluation deployment

- Document and verify a Codespaces-compatible command to serve the website locally using `npx`.
- For external evaluation, expose the server port as **Public** and provide the accessible URL. Configuring permissions/port forwarding is a manual environment step, not a frontend feature.

## 4. Verifiable acceptance criteria

Criteria are identified so they can be linked to manual reviews or automated tests. «Automatable» indicates behavior that can be tested in a browser or with static validation; external procedures are marked manual.

### AC-01 — HTML, structure, and content

- [ ] `index.html` and `application.html` have a doctype, `lang="es"`, viewport metadata, unique titles, and a logical heading hierarchy.
- [ ] The landing page uses semantic regions (`header`, `nav`, `main`, `section`, `article` where appropriate, and `footer`) and contains all sections and required text/data in FR-01. **Automatable + content review.**
- [ ] Every navigation link points to an existing destination; the inquiry CTA opens `application.html`. **Automatable.**
- [ ] Every image has appropriate `alt` text and there are no local resource errors. **Automatable + contextual review.**
- [ ] Every form control has an associated label; related fields are grouped and required fields are semantically marked with `required` (or an accessible equivalent for groups). **Automatable.**
- [ ] The landing page JSON-LD parses as JSON and matches the data in section 5. **Automatable.**

### AC-02 — Responsive design, Tailwind, and performance

- [ ] Mobile-first design is readable and functional on mobile (320–375 px), tablet (768 px), and desktop (≥1024 px), with no horizontal overflow or inaccessible controls. **Viewport test.**
- [ ] Tailwind utilities and appropriate breakpoints (`sm:`, `md:` and/or `lg:`) are used. No unnecessary custom CSS is added; any exception must be small and justified by a specific limitation. **Code review.**
- [ ] The website can be started by following the documented `npx` command from a clean Codespaces-compatible environment and responds on the specified port. **Manual test.**
- [ ] Capture PageSpeed Insights results on the public Codespaces URL; target minimum performance score is **80** (ideally >90). If PageSpeed cannot access it, run Chrome DevTools Lighthouse against the same view and attach a screenshot. Do not claim the score is met without evidence. **Manual / delivery evidence.**

### AC-03 — Accessibility

- [ ] All interactive functionality is operable by keyboard; focus is visible and navigation order is predictable.
- [ ] Controls and groups have accessible names; use ARIA only where it improves native semantics. Menus/dialogs, if present, communicate state and can be operated/closed by keyboard.
- [ ] Text and control contrast targets WCAG AA: 4.5:1 for normal text and 3:1 for large text and relevant graphical components. Check with a contrast tool.
- [ ] Errors, step changes, progress, and success confirmation are communicated to assistive technologies (for example, `aria-live`, `role="alert"`, or non-disruptive focus management). Fields with errors expose `aria-invalid="true"` and a reference to their message; update the state when corrected.
- [ ] The experience works with zoom and reduced-motion preferences; do not rely on color alone to identify error or success.

### AC-04 — Form, steps, and validation

- [ ] All fields/options in section 5 are present, with the correct required status and input types.
- [ ] The form shows the current step and progress; users can move forward and back, cannot advance with errors in the current step, and values are retained when navigating back. **Automatable.**
- [ ] Validation rules and error text match the table in section 5 exactly, including punctuation, email/phone examples, and the comments counter.
- [ ] Errors appear next to the corresponding control, are announced, and block progression/submission. When a value is corrected, its error clears without deleting other values.
- [ ] Comments allow up to 500 characters; the counter is visible and updates while typing. The limit prevents exceeding 500 and the specified error text is retained for any state that exceeds the limit (for example, through DOM manipulation).
- [ ] When volume «0-100» is selected with a product type, a modal opens with the exact warning from the brief. When confirming or canceling, the modal closes, the user returns visually to the form, and «0-100» remains selected. Only confirmation allows submission to continue, subject to all other validations; canceling does not submit or show success. The modal does not appear for other volumes.
- [ ] A valid submission, after confirmation if applicable, hides/clears errors and displays the complete success message from section 5. It does not claim that data was sent to a server.
- [ ] The clear button restores the form to its initial state and allows the user to start over.

### AC-05 — TrackFlow context and delivery

- [ ] All content and fields are specific to TrackFlow and consistent with `uis/website/BRIEFING.es.md`; the inquiry is presented as business-to-business contact, not consumer tracking/support.
- [ ] Test the page at multiple widths and every form validation (valid and invalid paths); inspect the browser console.
- [ ] The delivery includes the main files `index.html`, `application.html`, `assets/js/validation.js`, and the website brief, unmodified.
- [ ] The PR description includes a public Codespaces URL and a PageSpeed or Lighthouse screenshot with a result ≥80. Record actual evidence; do not invent or assume it.
- [ ] Code and delivery documentation are pushed to the remote repository. Merging to `main` and deployment depend on the PR approval process.

## 5. Data and content contracts

### 5.1 Form data

`name` attributes must stably identify data and option `value`s must be unambiguous. Visible names and values must preserve the domain specified in the brief.

| Field / reference `name` | Control | Required | Rule and exact error message |
|---|---|---:|---|
| Company name (`company`) | Text | Yes | After trimming whitespace, at least 2 characters. «El nombre de la empresa debe tener al menos 2 caracteres» |
| Contact person (`contactName`) | Text | Yes | Must contain at least two non-empty words (first and last name). «Ingresa nombre y apellido del contacto» |
| Corporate email (`email`) | Email | Yes | Valid format with user, `@`, and domain. «Ingresa un email corporativo válido (ejemplo: `<nombre@empresa.com>`)» |
| Phone (`phone`) | Telephone | Yes | Must start with `+`, include a country code and number; example `+1 213 555 0147`. «El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)» |
| Company website (`website`) | URL | No | Empty is allowed; if provided, it must be an absolute URL with `http://` or `https://`. «Si incluyes sitio web, debe ser una URL válida» |
| Main operating country (`country`) | Select | Yes | Estados Unidos / España / Ambos / Otro. «Selecciona el país de operación principal» |
| Product type (`product`) | Select | Yes | Moda / Electrónica / Cosmética / Alimentación / Otro. «Selecciona el tipo de producto que manejas» |
| Monthly volume (`volume`) | Select | Yes | 0-100 / 101-500 / 501-2000 / 2000+ / No estoy seguro. «Selecciona el volumen mensual estimado» |
| Services of interest (`services`) | Multiple checkboxes | Yes, at least one | Almacenaje / Última milla / Logística inversa. «Selecciona al menos un servicio de interés» |
| Current logistics provider (`current3pl`) | Radios | Yes, one option | Sí / No / Estoy evaluando opciones. «Indica si actualmente trabajas con otro proveedor logístico» |
| Comments (`comments`) | Textarea | No | Maximum 500 characters; visible counter. «Los comentarios no pueden exceder 500 caracteres (quedan X)» where `X` is the remaining character count according to the implemented rule. |
| Privacy acceptance (`privacy`) | Checkbox | Yes | Must be checked. «Debes aceptar la política de privacidad para continuar» |

Phone validation must allow spaces between the country code and number without accepting a phone number that does not start with `+`. Validate email format; the requirement does not require blocking free email domains, so do not infer a list of permitted corporate domains. The privacy policy must link to the available information and truthfully explain that this prototype does not transmit or save the inquiry.

### 5.2 Warning and confirmation

Condition: `volume === "0-100"` and `product` contains a non-empty option. Under this condition, open a confirmation modal with the following exact text:

> Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?

When the modal is answered (confirm or cancel), close it and return the user to the form view. Preserve the «0-100» value in the volume field; do not reset or replace the selection. Affirmative confirmation allows submission to proceed, provided all other fields pass validation; canceling leaves the form unsubmitted and does not show success. The modal is a UX decision, not a newly persisted selection or a promise of eligibility.

### 5.3 Success message

> **¡Gracias por tu interés en TrackFlow!**
>
> Hemos recibido tu solicitud. Nuestro equipo comercial revisará tu información y te contactará en las próximas 24-48 horas para agendar una llamada y conocer tus necesidades logísticas en detalle.
>
> Si tienes alguna consulta urgente, escríbenos directamente a <comercial@trackflow.com>

In the prototype, «hemos recibido» means the form passed local validation; indicate that the interaction is simulated and no data is sent.

### 5.4 Corporate data and Schema.org

The landing page JSON-LD must implement this `Organization` contract (it may be serialized compactly, provided the values remain the same):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TrackFlow",
  "description": "Gestión de almacenes y entregas de última milla para e-commerce",
  "url": "https://trackflow.com",
  "foundingDate": "2009",
  "address": [
    {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Los Ángeles",
      "addressRegion": "California"
    },
    {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressLocality": "Zaragoza",
      "addressRegion": "Aragón"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-213-555-0147",
    "contactType": "sales",
    "availableLanguage": ["Spanish", "English"]
  },
  "sameAs": ["https://linkedin.com/company/trackflow"],
  "areaServed": [
    { "@type": "Country", "name": "Estados Unidos" },
    { "@type": "Country", "name": "España" }
  ]
}
```

### 5.5 Required landing-page content

- **Hero:** exact headline and subtitle from the brief; «Solicitar información» CTA linking to `application.html`.
- **Warehouse management:** storage, picking and packing; real-time inventory; warehouses in Los Angeles and Zaragoza.
- **Last mile:** certified carrier network in both countries; unified shipment tracking; incidents and returns management.
- **Reverse logistics:** returns; inspection and reconditioning; sales-platform integration.
- **United States:** warehouse in Los Angeles; national coverage; UPS, FedEx, and DHL.
- **Spain:** warehouse in Zaragoza; mainland and island coverage; MRW, SEUR, and DHL.
- **Benefits:** binational operation with owned infrastructure; +130 professionals; proprietary technology for inventory visibility; specialization in fashion, electronics, and cosmetics.
- **Contact:** `comercial@trackflow.com`, `+1 213 555 0147`, `+34 976 123 456`.
- **Footer:** «© 2025 TrackFlow. Todos los derechos reservados.» and LinkedIn.

## 6. Constraints, business rules, and edge cases

- The website is a static prototype: no local test can demonstrate actual lead receipt. Do not add APIs, persistence, or claims of real submission within this scope.
- Prioritize the website brief for data, field names, text, and validation. Keep the multi-step/progress bar, reset, and performance evidence as additional milestone requirements.
- The target customer is an e-commerce business seeking to outsource logistics. Do not turn the form into a consumer tracking, consumer returns, or user registration flow.
- The 0–100 confirmation modal applies only when a product is selected; when closed it must return visually to the form and preserve the volume value. If the volume changes afterward, update the condition consistently. Confirmation must not bypass other validations.
- Treat leading/trailing whitespace as blank when validating company and contact name; do not count tokens consisting only of whitespace as first and last name.
- An empty URL is valid; a URL without a protocol is not. If native and custom validation coexist, the user must receive the specific message in this contract.
- The 500-character limit must be enforced, with an updated counter; handle paste and browser-limit cases as well.
- When changing steps, do not lose data or announce content confusingly. On reset, restore error messages and ARIA states too.
- Tailwind via CDN requires an internet connection. If the CDN does not load, content must remain structurally readable and functional.
- Do not present unconfirmed metrics, testimonials, carrier integrations, tracking data, or operational capabilities as live data; clearly identify every demonstration.
- PageSpeed/Lighthouse score, public port forwarding, evidence capture, push, and merge are delivery checks/processes: they cannot be considered satisfied by HTML inspection alone.
- No framework, backend, analytics provider, test system, or build process is specified; do not introduce them as implicit requirements.

## 7. Implementation and verification plan

Complete and verify each phase before starting the next.

1. **Inventory and traceability**
   - Review `BRIEFING.es.md`, `index.html`, `application.html`, `assets/js/validation.js`, and the README.
   - Record gaps between implementation and this SPEC; do not treat the presence of a component as proof of compliance.
   - Verify through search/inspection that the brief is not modified.

2. **Landing page, content, and SEO**
   - Align sections, order, text, CTA, contact details, footer, and visual elements with FR-01 and 5.5.
   - Validate semantics, hierarchy, links, alt text, metadata, and JSON-LD using automated and manual review.

3. **Multi-step form and accessibility**
   - Implement steps, progress indicator, previous/next navigation, temporary in-memory retention of values, reset, and low-volume confirmation.
   - Keep the flow usable by keyboard, with visible focus, announced states, and accessible labels/groups.

4. **Domain validation**
   - Implement and test every field and exact message, interactive validation, associated errors, counter, and progression/submission blocking.
   - Cover valid and invalid cases, the 0–100 threshold, cancel/confirm, and complete reset.

5. **Responsive design, styles, and performance**
   - Test at 320–375 px, 768 px, and ≥1024 px; check for overflow, Tailwind use, and CSS exceptions.
   - Document and run the `npx` command to serve the site. Check the console and resource loading.

6. **Audit and delivery**
   - Manually test navigation, all form states, keyboard use, contrast, and content.
   - Publish the Codespaces port, obtain a public URL, run PageSpeed or Lighthouse on that same view, and save a screenshot with a score ≥80.
   - Review and push changes to the repository; attach the URL/screenshot and results to the PR description. Merging follows the approval process.

### Brief coverage matrix

| Source | Requirements / acceptance |
|---|---|
| Website brief | FR-01 to FR-03, AC-01, AC-03 to AC-05, sections 5.1–5.5 |
| Milestone instructions | FR-02 and FR-04, AC-01 to AC-05 (including multi-step form, reset, Codespaces run method, and performance evidence) |
| Repository technical context | Section 2 and constraints in section 6 (static HTML, Tailwind CDN, simulated behavior without backend or persistence) |
