# TrackFlow Corporate Website

TrackFlow's public landing page presenting its last-mile logistics services, warehouses, carriers, and returns operation across Los Angeles and Zaragoza.

## Included

- Entry page at `/` with TrackFlow corporate identity.
- Section order: Hero, Tracking, About, Services, Pulse, Management, Coverage, Testimonials, and Contact. Primary navigation links to About, Services, Management, and Contact; the logo/name returns to Home. Labels are localized in Spanish and English.
- Local SVG favicon (`assets/favicon.svg`) shared by the landing page and inquiry form.
- Services, country coverage, benefits, operations, executive management, tracking, testimonials, and contact sections.
- Local simulations for tracking, customer login, and registration.
- Spanish/English selector on both pages with local flag icons downloaded from Flaticon (`assets/images/flags/`). Spanish is the default; only the selected language preference (`trackflow-language-v1`) is stored in `localStorage`. The page credits Flaticon as the source; item-level author/license metadata could not be verified.
- Three-step commercial inquiry in `application.html`, with progress, navigation between steps without losing values, an error summary, and progressive validation.
- The form collects company, contact, email, phone, optional website, country, product, shipment volume, services, current logistics provider, comments, and privacy acceptance.
- Localized validation messages, a 500-character counter, an accessible confirmation for 0-100 monthly shipments, simulated success confirmation, and full reset.
- Landing profiles and testimonials are illustrative; operational demos are identified as simulations.
- Inquiry, client access, registration, and tracking are local simulations: form data is neither transmitted nor persisted.
- `Organization` Schema.org structured data, SEO metadata, and corporate contact links on the landing page.
- Local WebP image in the right panel of the contact section (`assets/images/contacto.webp`).
- Toast notifications that appear only when a demo interaction needs to show a message.
- Login and registration modal with initial focus, keyboard focus trapping, `Escape` to close, and focus restoration to the element that opened it.
- Tailwind CSS via CDN and local CSS styles.

Login, registration, commercial inquiry, and tracking interactions are simulations. There is no real authentication, lead persistence, or connected API; the form does not transmit or store entered data. Language preference is the only locally persisted value.
Toast notifications stay hidden until an interaction needs to report a result. The login and low-volume dialogs include keyboard support and accessible controls.

## Run locally

From the repository root:

```bash
cd uis/website
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser.

You can also run `npx serve .` from `uis/website`.

## Official ports

| Application | Port | URL |
| --- | ---: | --- |
| Corporate website | `8080` | `http://localhost:8080` |
| Backoffice | `8081` | `http://localhost:8081` |

The backoffice must run on `8081` when both applications are running simultaneously.

## Backoffice relationship

This is the public application. The internal dashboard lives in [`../backoffice/`](../backoffice/) and has its own layout and startup process.
