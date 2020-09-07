/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap-v1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function DetailPanel(props) {

    let className = "position-fixed shadow-lg m-0";
    if (props.isShown)
        className += " gn-panel-shown"
    else
        className += " d-none";

    const onCloseClick = ()=> {
        props.onClose();
    }

    if (!props.selected)
        return (<></>)

    return (
        <div
            style={{border:"solid 1px #ccc", background:"#f1f2f4"}}
            className={className}>
            <div className="w-100 h-100 px-4 pt-2">
                <Row>
                    <Col xs={9}>
                        <div className="mt-1 text-truncate">{props.selected.title}</div>
                    </Col>
                    <Col xs={3}>
                        <ButtonGroup className="float-right">
                            <Button
                                variant="outline-secondary"
                                size="sm">
                                <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
                            </Button>
                            <Button
                                onClick={onCloseClick}
                                variant="outline-secondary"
                                size="sm">
                                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                            </Button> 
                        </ButtonGroup>
                    </Col>
                </Row>
                <hr className="my-2"></hr>
                <div style={{overflowX: "hidden", overflowY:"auto", height: "calc(100% - 60px)"}}>
                <Row>
                    <Col xs={12} sm={6} md={12}>
                        <img 
                            style={{objectFit: "cover"}}
                            className="w-100 gn-detail-panel-image"
                            src={props.selected.img}>
                        </img>
                    </Col>
                    <Col xs={12} sm={6} md={12}>
                        <h4 className="d-none d-sm-block text-truncate mt-2">{props.selected.title}</h4>
                        <div className="mt-2 mb-4">{props.selected.description}</div>
                        <div><b>Region</b>: {props.selected.region}</div>
                        <div><b>License</b>: {props.selected.license}</div>
                        <div><b>Language</b>: {props.selected.language}</div>
                    </Col>
                </Row>
                </div>
            </div>
        </div>
    );
}

export default DetailPanel;
