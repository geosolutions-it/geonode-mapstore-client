import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// The admin app supports three dev workflows. All three are HMR-enabled.
//
//   1. Django-served shell + Vite-served JS (Mode 1).
//      Browser hits Django at http://localhost:8000/manage/. Django renders
//      the admin-app/index.html template (GeoNode chrome + React root) and
//      loads <script type="module" src="http://localhost:5173/manage/src/main.jsx">.
//      Same-origin API calls hit Django directly; no proxy needed.
//      Selected when VITE_PROXY_TARGET is empty.
//
//   2. Reverse-proxy + admin overlay (Mode 2).
//      Browser hits http://localhost:5173/. Vite forwards everything to the
//      GeoNode target (local or remote) — catalogue, API, auth, static —
//      except /manage/*, which Vite serves itself from index.html (bare
//      shell, no GeoNode chrome).
//      Selected by setting VITE_PROXY_TARGET; default behavior.
//
//   3. Reverse-proxy with Django-rendered /manage shell (Mode 3).
//      Same single-origin model as Mode 2, but /manage/<route> HTML requests
//      are also forwarded to upstream Django so its template renders the
//      GeoNode chrome. Vite still serves dev assets (/manage/src/*,
//      /manage/@*, /manage/node_modules/*) locally for HMR.
//      Requires the upstream to have this branch installed.
//      Selected by setting VITE_PROXY_TARGET *and* VITE_PROXY_MANAGE=true.
//
// HMR WebSocket: fixed at /__vite_admin_hmr (outside /manage) so the proxy
// rules in modes 2 and 3 can be simple.
const HMR_PATH = '/__vite_admin_hmr';

// Mode 2: proxy everything that isn't /manage/* and isn't the HMR ws.
const MODE_2_PROXY_REGEX = `^(?!/manage(?:/|$)|${HMR_PATH}).*`;

// Mode 3: proxy everything that isn't a Vite dev asset path or the HMR ws.
// /manage/<html-route> is forwarded so Django renders the shell, but
// /manage/src/*, /manage/@*, /manage/node_modules/*, /manage/__vite* stay
// local on Vite. The leading `^` is required for Vite to treat the key as a
// regex; the rest is a single negative lookahead.
const MODE_3_PROXY_REGEX =
    `^(?!${HMR_PATH}|/manage/(?:src/|@|node_modules/|__vite)).*`;

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const proxyTarget = env.VITE_PROXY_TARGET || '';
    const proxyManageToUpstream = env.VITE_PROXY_MANAGE === 'true';

    const proxyKey = proxyManageToUpstream ? MODE_3_PROXY_REGEX : MODE_2_PROXY_REGEX;
    const proxy = proxyTarget
        ? {
            [proxyKey]: {
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
            // Pin the HMR ws to a stable path outside /manage so the proxy
            // rules don't accidentally swallow it.
            hmr: { path: HMR_PATH },
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
