# GeoNode Admin App

A React + Vite + SCSS frontend that hosts the new administrative UI for
GeoNode (users, groups, data sources, ...). Sibling of the MapStore-based
`client/` app — they do not share build tooling.

The app is mounted at `/manage/` in the Django URL space and is served by the
existing `geonode_mapstore_client` Django app via the `admin-app/index.html`
template.

## Stack

| Concern | Pick |
| --- | --- |
| Bundler | Vite 5 (ESM, fast HMR) |
| Framework | React 18 |
| Router | `react-router-dom` v6 (data router, nested layouts) |
| Styling | SCSS, no UI library (shared tokens in `src/styles/_tokens.scss`) |

No state-management, form, or component library is pulled in yet — those
decisions are deferred until concrete pages need them.

## Layout

```
admin/
├── package.json
├── vite.config.js
├── index.html              # Vite entry (standalone mode)
├── .env.example
└── src/
    ├── main.jsx            # React entry, mounts <RouterProvider>
    ├── router.jsx          # route definitions (basename: /manage)
    ├── components/
    │   └── Shell.jsx       # outer layout (sidebar+header to come)
    ├── pages/
    │   └── Hello.jsx       # smoke-test page that calls /api/v2/categories/
    ├── api/
    │   └── client.js       # same-origin fetch helper with CSRF
    └── styles/
        ├── main.scss
        └── _tokens.scss    # design tokens shared across pages
```

The Django side lives in the parent `geonode_mapstore_client` Django app:

- `templates/admin-app/index.html` — the shell rendered for every `/manage/*`
  URL. Uses the `{% admin_app_assets %}` template tag.
- `templatetags/admin_app_tags.py` — emits dev-server module tags when
  `DEBUG=True` (or `ADMIN_APP_DEV=True`), otherwise reads the Vite build
  manifest and emits the hashed asset tags.
- `apps.py` — adds `^manage(?:/.*)?$` to the URL patterns so client-side
  deep links reload correctly.

## Development workflows

Two modes are supported. Pick the one that matches your setup.

### Mode 1 — Django serves the shell + Vite serves the JS *(default)*

Browser hits Django at `http://localhost:8000/manage/`. Django renders
`admin-app/index.html`, which loads JS modules from the Vite dev server at
`http://localhost:5173`. Same-origin API calls go to Django directly — no
proxy needed.

```bash
# Terminal 1 — GeoNode (the usual way)
cd /path/to/geonode && python manage.py runserver

# Terminal 2 — the admin app dev server
cd geonode_mapstore_client/admin
cp .env.example .env   # first time only
npm install
npm run dev            # http://localhost:5173 (modules), HMR enabled
```

Then open `http://localhost:8000/manage/`. You'll see the Hello page.

> If you don't want Vite to kick in (e.g. you want to test the built bundle
> served from Django statics), set `ADMIN_APP_DEV=False` in Django settings.

### Mode 2 — Standalone Vite + API proxy

Useful when you want to develop against a *remote* GeoNode (e.g. staging)
without running Django locally.

```bash
cd geonode_mapstore_client/admin
cp .env.example .env
# In .env, set:
#   VITE_PROXY_TARGET=https://staging.geonode.example.org
npm install
npm run dev
```

Then open `http://localhost:5173/manage/`. Vite serves `index.html` and
proxies `/api/`, `/account/`, `/static/`, ... to the configured target.

## Production build

```bash
cd geonode_mapstore_client/admin
npm run build
```

Output lands in `geonode_mapstore_client/static/admin-app/dist/` (plus a
`.vite/manifest.json` used by the template tag to resolve hashed filenames).
Run `collectstatic` as usual on the Django side.

## Adding a page

1. Create `src/pages/MyPage.jsx`.
2. Register it in `src/router.jsx` under the existing `<Shell />` route.
3. Link to it with `<Link to="my-page">` from anywhere in the shell.

Routes declared in `router.jsx` are relative to the `basename: '/manage'`
configured at the bottom of the file — so `path: 'users'` resolves to
`/manage/users` in the browser.
