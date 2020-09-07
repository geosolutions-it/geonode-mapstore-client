/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useEffect} from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap-v1';

function Search(props) {

    const MIN_OFFSET = 60;
    const INITIAL_OFFSET = 200;
    const MOVEMENT_START = 140;

    let [inputOffset, setInputOffset] = useState(INITIAL_OFFSET);

    const handleScroll = () => {

        let offset = window.scrollY;
        if (offset < MOVEMENT_START)
            return;

        offset = offset - MOVEMENT_START;
        offset = INITIAL_OFFSET - offset/2;
        if (offset < MIN_OFFSET)
            offset = MIN_OFFSET;

        setInputOffset(offset);
    }

    const onLoad = ()=> {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    useEffect(onLoad, []);
    let c = props.panelShown ? "gn-panel-shown-container" : "gn-panel-hidden-container";
    return (
        <div 
            style={{height:"100vh"}}
            className={"bg-light text-white m-0 "}>
            <div
                className={"gn-search-input position-fixed bg-light pt-4 pb-1 " + c}
                style={{width: props.width, left:0, top:inputOffset, zIndex:"99"}}>
                <Container>
                    <Row>
                        <Col xs={1} sm={2} md={3}></Col>
                        <Col xs={10} sm={8} md={6}>
                            <FormControl
                                placeholder="Search for Data"
                                size="lg"
                            ></FormControl>
                            <a className="d-none d-sm-block btn btn-link text-center w-100 mt-1">
                                Advanced Search
                            </a>
                        </Col>
                        <Col xs={1} sm={2} md={3}></Col>
                    </Row>
                </Container>
            </div>
            <Container>

                <div>Featured</div>
            </Container>
        </div>
    );
}

export default Search;
