import { useEffect, useState } from 'react';

import { apiFetch } from '../api/client.js';

// Smoke test: hit a public GeoNode v2 endpoint to prove the dev proxy /
// same-origin integration works end-to-end (browser -> Vite/Django -> GeoNode).
const PROBE_ENDPOINT = '/api/v2/categories/?page_size=3';

export default function Hello() {
    const [state, setState] = useState({ status: 'loading' });

    useEffect(() => {
        let cancelled = false;
        apiFetch(PROBE_ENDPOINT)
            .then((data) => {
                if (cancelled) return;
                setState({ status: 'ok', data });
            })
            .catch((error) => {
                if (cancelled) return;
                setState({ status: 'error', error: error.message });
            });
        return () => { cancelled = true; };
    }, []);

    return (
        <section className="gn-card">
            <h1>Hello from the GeoNode admin app</h1>
            <p>
                Mounted under <code>/manage/</code>. This is the React + Vite + SCSS
                shell that future admin sections (users, groups, data sources, &hellip;)
                will plug into.
            </p>

            <h2>Backend probe — <code>{PROBE_ENDPOINT}</code></h2>
            {state.status === 'loading' && <p>Calling the API&hellip;</p>}
            {state.status === 'error' && (
                <p style={{ color: 'crimson' }}>
                    Request failed: {state.error}
                </p>
            )}
            {state.status === 'ok' && (
                <pre style={{
                    background: '#0d1117',
                    color: '#e6edf3',
                    padding: '12px',
                    borderRadius: '6px',
                    overflow: 'auto',
                    maxHeight: '320px'
                }}>{JSON.stringify(state.data, null, 2)}</pre>
            )}
        </section>
    );
}
