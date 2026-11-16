# TrackFlow Corporate Website

TrackFlow's public landing page presenting its last-mile logistics services, warehouses, carriers, and returns operation across Los Angeles and Zaragoza.

## Included

- Entry page at `/` with TrackFlow corporate identity.
- Services, country coverage, benefits, operations, executive management, tracking, testimonials, and contact sections. Existing sections are preserved.
- Local simulations for tracking, customer login, and registration.
- Commercial inquiry form in `application.html` for company/contact details, email, phone, website, markets, product, shipment volume, services, current logistics provider, comments, and privacy consent.
- Native JavaScript validation, field-level messages, a 500-character counter, and a low-volume (0-100 shipments/month) confirmation warning.
- `Organization` Schema.org structured data, SEO metadata, and corporate contact links on the landing page.
- Local WebP image in the right panel of the contact section (`assets/images/contacto.webp`).
- Toast notifications that appear only when a demo interaction needs to show a message.
- Login and registration modal with initial focus, keyboard focus trapping, `Escape` to close, and focus restoration to the element that opened it.
- Tailwind CSS via CDN and local CSS styles.

Login, registration, commercial inquiry, and tracking interactions are simulations. There is no authentication, persistence, or connected API; the form does not transmit or store entered data.
Toast notifications stay hidden until an interaction needs to report a result. The login modal supports keyboard use and keeps focus inside while open.

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
