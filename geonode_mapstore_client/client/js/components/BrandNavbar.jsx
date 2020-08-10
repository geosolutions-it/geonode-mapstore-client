/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap-v1';

function BrandNavbar() {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/spa/">GeoNode</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/spa/builder/">Builder (test link)</Nav.Link>
                    <Nav.Link href="/maps/">Maps</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default BrandNavbar;
