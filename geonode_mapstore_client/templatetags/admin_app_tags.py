# -*- coding: utf-8 -*-
"""Template tags for the GeoNode admin React app.

In development, the Django template loads JS modules directly from the Vite
dev server (default ``http://localhost:5173``) so Hot Module Replacement works
end-to-end while the page itself is rendered by Django.

In production, the same template reads Vite's build manifest and emits the
hashed ``<script>`` / ``<link>`` tags for the built bundle (collected by
``collectstatic``).
"""
import json
import os
from functools import lru_cache

from django import template
from django.conf import settings
from django.templatetags.static import static
from django.utils.safestring import mark_safe

register = template.Library()

# Entry registered as Rollup input in vite.config.js -> rollupOptions.input
ADMIN_APP_ENTRY = "src/main.jsx"

# Must match `base` in vite.config.js (dev branch). Vite serves all dev
# assets under this prefix, so the <script> tags need to include it.
ADMIN_APP_DEV_BASE = "/manage/"


def _dev_server_url():
    return getattr(settings, "ADMIN_APP_DEV_SERVER", "http://localhost:5173")


def _is_dev():
    # Two ways to flip into dev mode:
    #   - explicit setting: ADMIN_APP_DEV = True
    #   - implicit: DEBUG is on and ADMIN_APP_DEV is not explicitly False
    explicit = getattr(settings, "ADMIN_APP_DEV", None)
    if explicit is not None:
        return bool(explicit)
    return bool(getattr(settings, "DEBUG", False))


def _manifest_path():
    # Vite >= 5 writes manifest.json under <outDir>/.vite/manifest.json
    return os.path.join(
        os.path.dirname(os.path.dirname(__file__)),
        "static", "admin-app", "dist", ".vite", "manifest.json",
    )


@lru_cache(maxsize=1)
def _load_manifest():
    path = _manifest_path()
    try:
        with open(path, "r", encoding="utf-8") as fh:
            return json.load(fh)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


@register.simple_tag
def admin_app_assets():
    """Emit the <script>/<link> tags for the admin app entry.

    Dev mode emits Vite's HMR client + the source entry. Prod mode resolves
    the entry through the build manifest and emits hashed asset URLs.
    """
    if _is_dev():
        dev = _dev_server_url().rstrip("/")
        base = ADMIN_APP_DEV_BASE
        return mark_safe(
            f'<script type="module" src="{dev}{base}@vite/client"></script>\n'
            f'<script type="module" src="{dev}{base}{ADMIN_APP_ENTRY}"></script>'
        )

    manifest = _load_manifest()
    entry = manifest.get(ADMIN_APP_ENTRY)
    if not entry:
        # Build hasn't run yet — fail loudly in the page rather than silently.
        return mark_safe(
            "<!-- admin app manifest missing: run `npm run build` "
            "in geonode_mapstore_client/admin -->"
        )

    tags = []
    for css in entry.get("css", []) or []:
        tags.append(
            f'<link rel="stylesheet" href="{static("admin-app/dist/" + css)}">'
        )
    tags.append(
        f'<script type="module" '
        f'src="{static("admin-app/dist/" + entry["file"])}"></script>'
    )
    return mark_safe("\n".join(tags))
