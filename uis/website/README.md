# TrackFlow Corporate Website

TrackFlow's public landing page presenting its last-mile logistics services, warehouses, carriers, and returns operation across Los Angeles and Zaragoza.

## Included

- Entry page at `/` with TrackFlow corporate identity.
- Services, operations, tracking, and contact sections.
- Local simulations for tracking, customer login, and registration.
- Contact form in `application.html`.
- Tailwind CSS via CDN and local CSS styles.

Login, registration, contact, and tracking interactions are simulations. There is no authentication, persistence, or connected API yet.

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
