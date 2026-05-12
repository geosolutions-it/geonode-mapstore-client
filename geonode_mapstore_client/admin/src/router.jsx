import { createBrowserRouter, Navigate } from 'react-router-dom';

import Shell from './components/Shell.jsx';
import Hello from './pages/Hello.jsx';

// The admin app is mounted under /manage/ in the Django URL space.
// `basename` keeps the routes declared here mount-agnostic.
export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Shell />,
            children: [
                { index: true, element: <Navigate to="hello" replace /> },
                { path: 'hello', element: <Hello /> }
            ]
        }
    ],
    { basename: '/manage' }
);
