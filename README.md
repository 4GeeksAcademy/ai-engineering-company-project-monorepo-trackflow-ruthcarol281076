# TrackFlow — Cross-Border Last-Mile Logistics

## 1. Header and identification

Frontend project for **TrackFlow**, a logistics and warehouse management company founded in 2009 that operates between Los Angeles, United States, and Zaragoza, Spain. It includes a public corporate website and an initial backoffice frontend for displaying demonstrative operational information.

> **AI Engineering · 4Geeks Academy** project. Both interfaces are static demos: they do not connect to APIs and do not include authentication or persistence.

[Project guide in Spanish](./instructions-project.es.md) · [TrackFlow briefing](./BRIEFING.md) · [Versión en español](./README.es.md)

---

## 2. Table of contents

- [Main features](#3-main-features)
- [Technology stack](#4-technology-stack)
- [Prerequisites and installation](#5-prerequisites-and-installation)
- [Usage guide](#6-usage-guide)
- [Project structure](#7-project-structure)
- [Roadmap](#8-roadmap)
- [Contributing](#9-contributing)
- [License](#10-license)
- [Credits and acknowledgments](#11-credits-and-acknowledgments)

## 3. Main features

- Responsive corporate landing page in Spanish, with services, operations, tracking, and contact sections.
- Contact form on a separate page (`application.html`), with browser validation and simulated visual confirmation.
- Demonstration tracking lookup: accepts a shipment code and displays a status generated in the browser; it does not query carriers.
- Login and registration modal with basic client-side validation; it does not create accounts or start real sessions.
- Initial corporate backoffice frontend, responsive and separate from the public website, with navigation for the operational summary, warehouses, shipments, and incidents.
- Backoffice dashboard with sample indicators, a comparison table for the Los Angeles and Zaragoza warehouses, operational signals, and empty states for modules that are not yet connected.
- The backoffice explicitly labels its data as demonstrative; its indicators do not come from real operational systems.
- Branding and content based on the briefing: cross-border logistics, warehouses in Los Angeles and Zaragoza, carrier management, and returns.
- Neither interface requires package installation to be served locally.

## 4. Technology stack

- **HTML5** for the pages and their semantic structure.
- **Embedded CSS** for styling, responsive layouts, animations, and reduced-motion accessibility.
- **Vanilla JavaScript** for navigation, forms, demonstration tracking, modals, and notifications.
- **Tailwind CSS via CDN** for utility styling in both interfaces. An internet connection is required to load it.
- **Google Fonts** (`DM Sans` and `Space Grotesk`) in the backoffice, loaded from Google Fonts.
- **Python 3** as an optional local HTTP server for development and preview.

There is currently no backend, database, package manager, or build process configured for these interfaces.

## 5. Prerequisites and installation

### Prerequisites

- A modern web browser.
- Python 3 to run the recommended local server.
- An internet connection to load Tailwind CSS from its CDN and the remote images included on the pages.

### Get the project

Clone the repository and move to its root directory:

```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_DIRECTORY>
```

If you already have the repository, open a terminal in its root directory.

### Run the interfaces locally

Start each interface in a separate terminal from the repository root.

**Public corporate website** — port `8080`:

```bash
cd uis/website
python3 -m http.server 8080
```

Open <http://localhost:8080/>.

**Internal backoffice** — port `8081`, in another terminal:

```bash
cd uis/backoffice
python3 -m http.server 8081
```

Open <http://localhost:8081/>. To stop either server, return to its terminal and press `Ctrl+C`.

See the specific guides for the [corporate website](./uis/website/README.md) and the [backoffice](./uis/backoffice/README.md) for more details.

## 6. Usage guide

- The corporate home page is served at `/` or `/index.html`.
- The contact form is available at `/application.html` and through the contact link on the landing page.
- Use the navigation links to move between services, operational information, tracking, and contact sections.
- The tracking form displays a demonstration response based on the entered code; it does not represent live data.
- The portal buttons open a login or registration modal. Submitting it only displays a simulated confirmation; credentials are not saved and no users are created.
- The contact form validates fields in the browser and displays a visual confirmation; it does not transmit or store the request.
- In the backoffice, navigate between the operational summary, warehouses, shipments, and incidents. Indicators and statuses are examples; the shipment and activity modules do not show real events because no API is connected yet.

## 7. Project structure

```text
.
├── README.md                     # This guide in English
├── README.es.md                  # Spanish version of this guide
├── BRIEFING.md                   # TrackFlow context in English
├── BRIEFING.es.md                # TrackFlow context in Spanish
├── instructions-project.md       # General project guide in English
├── instructions-project.es.md    # General project guide in Spanish
├── uis/
│   ├── README.md                 # UI folder guidance
│   ├── backoffice/
│   │   ├── index.html            # Static operations dashboard
│   │   ├── README.md             # Backoffice documentation in English
│   │   └── README.es.md          # Backoffice documentation in Spanish
│   └── website/
│       ├── index.html            # Corporate landing page and interactive demos
│       └── application.html      # Contact form
├── agents/                       # Structure and template for future agents
├── data/                         # Space for data, pipelines, and evaluation
├── docs/                         # Cross-cutting documentation
├── infra/                        # Space for infrastructure and deployment
├── mcps/                         # Space for MCP servers
├── packages/                     # Shared packages
├── scripts/                      # Helper scripts
├── services/                     # Space for services and APIs
├── shared/                       # Shared resources
├── skills/                       # Reusable instructions and capabilities
├── workflows/                    # Space for automation workflows
└── internal/                     # Internal developer tools
```

The agents, data, services, and automation folders are part of the project structure; their presence does not mean production systems have been implemented.

## 8. Roadmap

The following capabilities address needs described in the TrackFlow briefing; they are potential goals, not features currently available in the website:

- Build a unified inventory API for the Los Angeles and Zaragoza warehouses and automate order ingestion.
- Integrate carriers for assignment, aggregated tracking events, and performance measurement.
- Develop reverse-logistics workflows, approval rules, and AI-assisted inspection tools.
- Add a knowledge base and a customer support agent for frequently asked questions.
- Unify operational data and add telemetry, dashboards, and executive reports.
- Connect the forms, portal, and tracking experience to real services once a backend, storage, and security policies are available.

## 9. Contributing

1. Review the [TrackFlow briefing](./BRIEFING.md) and the general project guidance in [`instructions-project.md`](./instructions-project.md).
2. Work in the folder responsible for the functionality. For website changes, use `uis/website/`; for backoffice changes, use `uis/backoffice/`.
3. Keep business information consistent with the briefing and clearly label simulations; do not present fictional metrics or integrations as real data.
4. Check the pages in a browser and test links, forms, and layouts on both small and large screens.
5. Document new features, runtime requirements, and integrations in the relevant README.

## 10. License

No software license is specified in this repository. The original template material states that it is maintained by 4Geeks Academy for the AI Engineering track and is intended for exclusive use in the program. Consult the project maintainers before reusing or distributing the content.

## 11. Credits and acknowledgments

- **TrackFlow** is the company scenario described in this project's briefing.
- **4Geeks Academy**, for the educational framework and transversal project template.
- Tailwind CSS is loaded from its CDN; the testimonial images come from Unsplash.

See the [TrackFlow briefing](./BRIEFING.md) for the company's context and the challenges outlined for the project.
