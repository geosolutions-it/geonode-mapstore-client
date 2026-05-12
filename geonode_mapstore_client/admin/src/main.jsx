import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router.jsx';
import './styles/main.scss';

const container = document.getElementById('gn-admin-root');
if (!container) {
    throw new Error('#gn-admin-root container is missing from the host page.');
}

createRoot(container).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
