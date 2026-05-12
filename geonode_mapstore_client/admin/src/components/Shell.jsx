import { Outlet } from 'react-router-dom';

// Top-level layout. Will grow into the sidebar + header shell from the
// data-sources / users / groups mockups. Kept intentionally bare for the
// first pass.
export default function Shell() {
    return (
        <div className="gn-admin-shell">
            <main className="gn-admin-main">
                <Outlet />
            </main>
        </div>
    );
}
