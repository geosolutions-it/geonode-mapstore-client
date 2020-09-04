/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap-v1';

function BrandNavbar(props) {
    
    let c = props.panelShown ? "gn-panel-shown-container" : "gn-panel-hidden-container";
    return (
        <div 
            style={{width: props.width, top:0, left:0, height:55, zIndex:"100"}}
            className={"m-0 position-fixed " + c}>

            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand href="#">
                    <img
                        style={{width: 160, height: 40}}
                        src="https://master.demo.geonode.org/static/geonode/img/logo.png">
                    </img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#">Sign In</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default BrandNavbar;
