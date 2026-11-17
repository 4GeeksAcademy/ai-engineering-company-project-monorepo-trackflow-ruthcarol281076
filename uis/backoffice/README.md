# TrackFlow Backoffice

Initial internal application for monitoring TrackFlow operations. This first version is a static skeleton: it has its own backoffice layout, separate from the public website, and prepares spaces for inventory, shipments, incidents, and operational activity.

## Included

- Entry route at `/` with an operations-focused welcome view.
- Dedicated backoffice navigation, independent from `uis/website/`.
- Metric cards and a warehouse table with sample data taken from `CONTEXT.md`.
- Empty states for shipments and the activity timeline, with no API or persistence yet.
- Responsive layout for desktop and mobile.
- Tailwind CSS via CDN and local CSS styles for variables, animations, and states.

## Run locally

From this folder:

```bash
python3 -m http.server 8081
```

Open `http://localhost:8081` in your browser. Port `8080` is reserved for the corporate website.

## Next steps

- Connect an API under `services/` for inventory and shipments.
- Replace sample data with typed API responses.
- Add authentication and authorization by area or client.
- Add accessibility and responsive behavior tests.

The data displayed in this version is demonstrative and does not represent real operational data.
