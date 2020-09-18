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
    style
}, ref) => {

    return (
        <RBNavbar
            ref={ref}
            sticky="top"
            style={style}
            collapseOnSelect
            expand="lg"
            bg="light"
        >
            <RBNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <RBNavbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Data" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Layers</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Documents</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Remote Services</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Maps</Nav.Link>
                    <NavDropdown title="About" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">People</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Groups</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Groups Categories</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav />
            </RBNavbar.Collapse>
        </RBNavbar>
    );
});

Navbar.defaultProps = {

};

export default Navbar;
