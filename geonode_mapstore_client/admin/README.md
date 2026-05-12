# GeoNode Admin App

A React + Vite + SCSS frontend that hosts GeoNode's new administrative UI
(users, groups, data sources, ...). Sibling of the MapStore-based
`client/` app — they do not share build tooling.

The app is mounted at **`/manage/`** in the Django URL space. The existing
`geonode_mapstore_client` Django app serves the shell template
(`admin-app/index.html`) for every `/manage/*` URL; React Router takes
over on the client.

## Stack

| Concern | Pick |
| --- | --- |
| Bundler | Vite 5 (ESM, fast HMR) |
| Framework | React 18 |
| Router | `react-router-dom` v6 (data router, nested layouts) |
| Styling | SCSS, no UI library (shared tokens in `src/styles/_tokens.scss`) |

No state management, form, or component library is pulled in yet — those
decisions are deferred until concrete pages need them.

## Repo layout

Frontend source — this directory (sibling of `client/`):

```
admin/
├── package.json
├── vite.config.js
├── index.html              # Vite's bare entry (used in Mode 2)
├── .env.example
└── src/
    ├── main.jsx            # mounts <RouterProvider> into #gn-admin-root
    ├── router.jsx          # routes (basename: '/manage')
    ├── components/
    │   └── Shell.jsx       # outer layout (sidebar/header to be added)
    ├── pages/
    │   └── Hello.jsx       # smoke-test page; hits /api/v2/categories/
    ├── api/
    │   └── client.js       # same-origin fetch helper with CSRF
    └── styles/
        ├── main.scss
        └── _tokens.scss    # design tokens (color, spacing, type)
```

Django integration — in the parent `geonode_mapstore_client/` package:

| File | Role |
| --- | --- |
| `templates/admin-app/index.html` | Shell rendered for every `/manage/*` URL. Includes the same `head.html`, `header.html`, `_geonode_config.html`, `footer.html` snippets as `page.html` — same GeoNode chrome around `<div id="gn-admin-root">`. |
| `templatetags/admin_app_tags.py` | `{% admin_app_assets %}` — emits Vite dev `<script>` tags when `DEBUG` (or `ADMIN_APP_DEV=True`); otherwise reads the build manifest and emits the hashed bundle tags. |
| `apps.py` | Adds `re_path(r"^manage(?:/.*)?$", ...)` so client-side deep links survive reloads. |

## Quick start

```bash
cd geonode_mapstore_client/admin
cp .env.example .env       # first time only
npm install
npm run dev                # http://localhost:5173, HMR
```

Where you open the app depends on which workflow you pick (see below). The
fastest end-to-end test is **Mode 1** — run your local GeoNode and open
`http://localhost:8000/manage/`.

## Development workflows

Three workflows are supported, selected by env vars in `.env`:

| | `VITE_PROXY_TARGET` | `VITE_PROXY_MANAGE` | Browser opens | `/manage/` shell from | Use when |
|---|---|---|---|---|---|
| **Mode 1** | _(empty)_ | _(unused)_ | `localhost:8000/manage/` | Local Django | You run local GeoNode and want full integration. |
| **Mode 2** | a GeoNode URL | _(empty)_ | `localhost:5173/` | Vite's bare `index.html` | Upstream doesn't have this branch; fast UI iteration. |
| **Mode 3** | a GeoNode URL | `true` | `localhost:5173/` | Upstream Django | Upstream has this branch; chrome + single origin + HMR. |

### Mode 1 — Django serves the shell + Vite serves the JS

Browser hits Django at `http://localhost:8000/manage/`. Django renders the
shell template (GeoNode chrome + React root) and references modules from
`http://localhost:5173/manage/...`. Same-origin API calls go to Django
directly — no proxy needed.

```bash
# Terminal 1 — local GeoNode
cd /path/to/geonode && python manage.py runserver

# Terminal 2 — admin app dev server (leave VITE_PROXY_TARGET empty)
cd geonode_mapstore_client/admin && npm run dev
```

Open `http://localhost:8000/manage/`.

> To test the built bundle served from Django statics instead of the dev
> server, run `npm run build` and set `ADMIN_APP_DEV=False` in Django
> settings.

### Mode 2 — Reverse-proxy + bare admin overlay

A single dev origin that mirrors a full GeoNode (local or remote), with
the in-dev admin app overlaid at `/manage/`. Vite forwards every path
it doesn't own to `VITE_PROXY_TARGET`; only `/manage/*` is served locally
(from Vite's bare `index.html`, no GeoNode chrome).

```bash
# In .env (pick one):
#   VITE_PROXY_TARGET=http://localhost:8000
#   VITE_PROXY_TARGET=https://stable.demo.geonode.org
npm run dev
```

Open `http://localhost:5173/`:

- `/` and any non-`/manage` path → forwarded to the target. Full GeoNode
  UI, login flow, etc.
- `/manage/` → Vite's bare admin shell with HMR. The session cookie that
  the upstream set during login is rewritten to attach to `localhost`, so
  authenticated API calls Just Work.

**Caveats** (mostly with a remote target):
- Some upstream redirects are absolute (e.g. login bouncing through
  `oauth/`). Local target → harmless `localhost:8000` ↔ `localhost:5173`
  flicker; remote target → you may occasionally land on the remote host
  and need to come back to `localhost:5173`.
- CSRF can fail if the upstream strictly validates `Origin` / `Referer`.
  The proxy passes them through unchanged, so the upstream sees
  `http://localhost:5173`. Most GeoNode installs accept this.

### Mode 3 — Reverse-proxy with Django-rendered `/manage/` shell

Same single-origin model as Mode 2, but `/manage/<route>` HTML requests
are also forwarded to upstream Django so its `admin-app/index.html`
template renders the GeoNode chrome around the React root. Vite still
serves `/manage/src/*`, `/manage/@*`, `/manage/node_modules/*` locally,
so HMR keeps working.

Requires the upstream to have this branch installed — otherwise `/manage/`
returns 404. Best paired with a local target.

```bash
# In .env:
#   VITE_PROXY_TARGET=http://localhost:8000
#   VITE_PROXY_MANAGE=true
npm run dev
```

Open `http://localhost:5173/manage/` — GeoNode header + admin app +
GeoNode footer, with HMR. `localhost:5173/` and other non-`/manage`
paths still proxy to the catalogue.

How the routing splits (negative lookahead on the proxy regex):

| Path pattern | Served by |
|---|---|
| `/manage/`, `/manage/users`, ... | Upstream Django (renders shell) |
| `/manage/src/*`, `/manage/@*`, `/manage/node_modules/*`, `/manage/__vite*` | Vite (dev assets, HMR client) |
| `/__vite_admin_hmr` (WebSocket) | Vite (HMR upgrade — pinned here so the proxy doesn't catch it) |
| Everything else (`/`, `/api/*`, `/static/*`, `/account/*`, ...) | Upstream |

## Configuration

### Env vars (`.env`)

| Var | Default | Meaning |
|---|---|---|
| `VITE_DEV_HOST` | `localhost` | Dev server bind host. |
| `VITE_DEV_PORT` | `5173` | Dev server port. |
| `VITE_PROXY_TARGET` | _(empty)_ | If set, Vite reverse-proxies to this URL (Mode 2/3). Otherwise Mode 1. |
| `VITE_PROXY_MANAGE` | _(empty)_ | When `true` *and* `VITE_PROXY_TARGET` is set, forward `/manage/<html>` to upstream too (Mode 3). |

### Django settings

| Setting | Default | Meaning |
|---|---|---|
| `ADMIN_APP_DEV` | follows `DEBUG` | Emit Vite dev-server tags instead of the built bundle. Set to `False` to force the built bundle even in dev. |
| `ADMIN_APP_DEV_SERVER` | `http://localhost:5173` | Where the dev tags should point. |

## Production build

```bash
npm run build
```

Output lands in `geonode_mapstore_client/static/admin-app/dist/`:

```
static/admin-app/dist/
├── .vite/manifest.json           # entry → hashed asset lookup
└── assets/
    ├── main-<hash>.js
    └── main-<hash>.css
```

The template tag reads `manifest.json` to resolve hashed filenames, so
`collectstatic` is the only deploy step.

## Working on the app

**Add a page**

1. Create `src/pages/MyPage.jsx`.
2. Register it in `src/router.jsx` under the existing `<Shell />` route.
3. Link to it with `<Link to="my-page">` from anywhere in the shell.

Routes are relative to `basename: '/manage'` (configured in
`router.jsx`), so `path: 'users'` resolves to `/manage/users`.

**Call the GeoNode API**

Use `apiFetch` from `src/api/client.js` — it's a thin wrapper around
`fetch` that uses same-origin paths, attaches the CSRF token on writes,
and parses JSON. All three workflows above leave the browser on a single
origin, so the wrapper doesn't need to know about hosts.

```js
import { apiFetch } from '@/api/client.js';

const categories = await apiFetch('/api/v2/categories/?page_size=10');
```

**Styling**

Edit `src/styles/_tokens.scss` for color / spacing / typography choices
that should be shared across pages; per-page styles live next to the page
component. The token file is the seed of a small in-repo design system
that will grow as the Users / Groups / Data Sources pages are ported.
