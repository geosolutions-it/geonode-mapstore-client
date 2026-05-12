// Thin same-origin fetch wrapper for the GeoNode API.
//
// Why same-origin: in both dev modes the browser sees a single origin —
//   - Mode 1: Django serves the page; API calls go to Django directly.
//   - Mode 2: Vite serves the page; Vite's proxy forwards /api/, /static/, ...
//     to the configured GeoNode target.
// In neither case does the client need to know about CORS or absolute hosts.

function getCsrfToken() {
    const match = document.cookie.match(/(?:^|; )csrftoken=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : null;
}

export async function apiFetch(path, { method = 'GET', body, headers = {}, ...rest } = {}) {
    const finalHeaders = {
        Accept: 'application/json',
        ...headers
    };
    if (body && !(body instanceof FormData)) {
        finalHeaders['Content-Type'] = finalHeaders['Content-Type'] || 'application/json';
    }
    if (method !== 'GET' && method !== 'HEAD') {
        const csrf = getCsrfToken();
        if (csrf) finalHeaders['X-CSRFToken'] = csrf;
    }

    const res = await fetch(path, {
        method,
        credentials: 'same-origin',
        headers: finalHeaders,
        body: body && !(body instanceof FormData) ? JSON.stringify(body) : body,
        ...rest
    });

    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`${res.status} ${res.statusText}: ${text || path}`);
    }

    const contentType = res.headers.get('content-type') || '';
    return contentType.includes('application/json') ? res.json() : res.text();
}
