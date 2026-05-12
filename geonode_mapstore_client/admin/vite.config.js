import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// The admin app supports two dev workflows:
//
//   1. Django-served shell + Vite-served JS.
//      Browser hits Django at http://localhost:8000/manage/. Django renders
//      a template that loads <script type="module" src="http://localhost:5173/src/main.jsx">.
//      Same-origin API calls hit Django directly; no proxy needed.
//      Selected when VITE_PROXY_TARGET is empty.
//
//   2. Reverse-proxy + admin overlay (default with VITE_PROXY_TARGET set).
//      Browser hits http://localhost:5173/. Vite forwards everything to the
//      GeoNode target (local or remote) — catalogue, API, auth, static files
//      — except /manage/*, which Vite serves itself with HMR. The result is a
//      single origin where the full GeoNode UI is available, with the in-dev
//      admin app overlaid at /manage/.
//
// Set VITE_PROXY_TARGET=http://localhost:8000 (local) or =https://stable.demo.geonode.org
// (remote) in .env to enable mode 2.

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const proxyTarget = env.VITE_PROXY_TARGET || '';

    // One regex catch-all: forward everything to GeoNode EXCEPT /manage/*
    // (the admin app) and Vite's own dev-server endpoints. The latter all
    // live under /manage/ too because `base: '/manage/'` reroutes them
    // there (e.g. /manage/@vite/client, /manage/src/main.jsx, the HMR
    // websocket). So a single negative lookahead on /manage is sufficient.
    const proxy = proxyTarget
        ? {
            '^(?!/manage(?:/|$)).*': {
                target: proxyTarget,
                changeOrigin: true,
                secure: false,
                ws: true,
                // Strip the Domain attribute on Set-Cookie so cookies issued
                // by the upstream (sessionid, csrftoken) attach to localhost
                // and travel back on subsequent proxied requests.
                cookieDomainRewrite: '',
                // Tell the upstream the request came from localhost:5173 so
                // it can build correct redirect URLs (requires
                // USE_X_FORWARDED_HOST=True on Django for absolute Location
                // headers; relative redirects work without it).
                xfwd: true
            }
        }
        : undefined;

    return {
        plugins: [react()],
        // Mount the dev server under /manage/ so the URL space matches the
        // Django route. Vite rewrites asset URLs automatically.
        base: mode === 'production' ? '/static/admin-app/dist/' : '/manage/',
        resolve: {
            alias: {
                '@': path.resolve(import.meta.dirname, 'src')
            }
        },
        server: {
            host: env.VITE_DEV_HOST || 'localhost',
            port: Number(env.VITE_DEV_PORT) || 5173,
            strictPort: true,
            // CORS open so Django (port 8000) can load modules from Vite (port 5173).
            cors: true,
            origin: `http://${env.VITE_DEV_HOST || 'localhost'}:${env.VITE_DEV_PORT || 5173}`,
            proxy
        },
        build: {
            // Emit into the Django static dir so collectstatic picks it up.
            outDir: path.resolve(import.meta.dirname, '../static/admin-app/dist'),
            emptyOutDir: true,
            // manifest.json lets the Django template resolve hashed filenames.
            manifest: true,
            rollupOptions: {
                input: path.resolve(import.meta.dirname, 'src/main.jsx')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        }
    };
});
