/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import { Navbar as RBNavbar, Nav, NavDropdown } from 'react-bootstrap-v1';

const Navbar = forwardRef(({
    style,
    expanded,
    onToggle,
    theme,
    items
}, ref) => {
    return items.length > 0
        ? (
            <RBNavbar
                expanded={expanded}
                ref={ref}
                sticky="top"
                style={style}
                collapseOnSelect
                expand="lg"
                onToggle={onToggle}
                bg={theme}
                variant={theme}
            >
                <RBNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <RBNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {items.map(({ type, label, links, href }, idx) => {
                            if (type === 'dropdown') {
                                return (
                                    <NavDropdown
                                        key={idx}
                                        title={label}
                                        id={'gn-navbar-dropdown-label-' + label}
                                    >
                                        {links.map((link, jdx) => {
                                            return (
                                                <NavDropdown.Item
                                                    key={jdx}
                                                    href={link.href}
                                                >
                                                    {link.label}
                                                </NavDropdown.Item>
                                            );
                                        })}
                                    </NavDropdown>
                                );
                            }
                            if (type === 'link') {
                                return <Nav.Link key={idx} href={href}>{label}</Nav.Link>;
                            }
                            return null;
                        })}
                    </Nav>
                    <Nav />
                </RBNavbar.Collapse>
            </RBNavbar>
        )
        : <div ref={ref} />;
});

Navbar.defaultProps = {
    theme: 'light',
    expanded: false,
    onToggle: () => {}
};

export default Navbar;
