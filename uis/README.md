# `uis` folder

This folder contains **all projects with a user interface** for the cross-functional AI Engineering company project — for example: a public website, admin dashboard frontend, ecommerce UI, customer portals, Streamlit/Gradio app or other frontend-only tools.

The two main projects stored here are:

- **`website`** — the company's public-facing web presence.
- **`backoffice`** — the internal admin application. This is the ideal place to develop multiple solutions within a single project: authentication, people management, operations management, internal communication, and other back-office capabilities.

Organize `uis/` by **different concerns** — each subfolder covers a distinct area of the company (for example, public web vs internal operations) and includes its own technical and functional documentation.

- **Main purpose**: to centralize in a single place all frontend applications that support the company's use cases.
- **Recommendation**: document in this file (or in sub-READMEs) the applications you add, their objective, the technology used, and how to run them.

## Start the applications

These are independent static applications. Run them from their own folders using different ports:

```bash
# Public corporate website
cd uis/website
python3 -m http.server 8080
# http://localhost:8080

# Internal backoffice, in another terminal
cd uis/backoffice
python3 -m http.server 8081
# http://localhost:8081
```

You can also use `npx serve .` inside either application folder. See each application's README for details:

- [`website/README.md`](./website/README.md)
- [`backoffice/README.md`](./backoffice/README.md)


> _Estas instrucciones también están disponibles en [español](./README.es.md)._
