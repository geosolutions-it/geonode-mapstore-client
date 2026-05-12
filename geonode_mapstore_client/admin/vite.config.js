import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// The admin app supports two dev workflows:
//
//   1. Django-served shell + Vite-served JS (default).
//      Browser hits Django at http://localhost:8000/manage/. Django renders
//      a template that loads <script type="module" src="http://localhost:5173/src/main.jsx">.
//      Same-origin API calls hit Django directly; no proxy needed.
//
//   2. Standalone Vite + API proxy.
//      Browser hits http://localhost:5173/manage/. Vite serves index.html
//      and proxies API / static / auth paths to a local or remote GeoNode.
//      Useful when you want to develop the UI against a remote staging server
//      without running GeoNode locally.
//
// Mode 1 is selected by default. Set VITE_PROXY_TARGET=http://staging.example.org
// (or your local http://localhost:8000) in .env to enable mode 2.

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const proxyTarget = env.VITE_PROXY_TARGET || '';
    const proxyHost = proxyTarget ? new URL(proxyTarget).host : '';

    // Paths that should be forwarded to GeoNode in standalone mode.
    const proxyPaths = [
        '/api',
        '/account',
        '/o',
        '/static',
        '/avatar',
        '/geoserver',
        '/catalogue',
        '/proxy'
    ];

    const proxy = proxyTarget
        ? Object.fromEntries(
            proxyPaths.map((p) => [
                p,
                {
                    target: proxyTarget,
                    changeOrigin: true,
                    secure: false,
                    headers: { Host: proxyHost }
                }
            ])
        )
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
