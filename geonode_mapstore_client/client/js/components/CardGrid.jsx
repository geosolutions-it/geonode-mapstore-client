/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap-v1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarked, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { hashLocationToHref } from '@js/utils/GNSearchUtils';
import UserSign from '@js/components/UserSign';

function CardGrid({
    resources,
    style,
    loading,
    page,
    isNextPageAvailable,
    onLoad,
    location
}) {

    const state = useRef({});

    state.current = {
        page,
        loading,
        isNextPageAvailable,
        onLoad
    };

    useEffect(() => {
        function onScroll() {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            const clientHeight = window.innerHeight;
            const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
            const offset = 200;
            const isScrolled = scrollTop + clientHeight >= scrollHeight - offset;
            if (isScrolled && !state.current.loading && state.current.isNextPageAvailable) {
                state.current.onLoad(state.current.page + 1);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const truncateStyle = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };

    const types = {
        'layer': {
            icon: faLayerGroup
        },
        'map': {
            icon: faMapMarked
        }
    };

    return (
        <>
        <Row style={style} className="mt-2">
            {resources.map(({ uuid, ...res }) => {
                return (
                    <Col key={uuid} xs={12} sm={6} md={4} lg={3}>
                        <Card className={'shadow-sm'} style={{ margin: '1em 0' }}>
                            <a
                                href={hashLocationToHref({
                                    location,
                                    pathname: `/search/${res.pk}`
                                })}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%'
                                }}></a>
                            <Card.Img
                                variant="top"
                                src={res.thumbnail_url}
                                style={{
                                    height: 128,
                                    objectFit: 'cover'
                                }}
                            />
                            <Card.Body style={{ zIndex: 2, pointerEvents: 'none' }}>
                                <Card.Text style={truncateStyle}>
                                    <FontAwesomeIcon icon={types[res.polymorphic_ctype].icon} />
                                    &nbsp;
                                    <a
                                        style={{ pointerEvents: 'auto' }}
                                        href={hashLocationToHref({
                                            location,
                                            query: {
                                                'filter{polymorphic_ctype_id.in}': res.polymorphic_ctype_id
                                            }
                                        })}>
                                        {res.polymorphic_ctype}
                                    </a>
                                </Card.Text>
                                <a style={{ pointerEvents: 'auto' }} href={res.detail_url}>
                                    <Card.Title
                                        style={truncateStyle}>
                                        {res.title}
                                    </Card.Title>
                                </a>
                                <Card.Text style={truncateStyle}>
                                    {res.abstract}
                                </Card.Text>
                                <Card.Text style={{ ...truncateStyle, pointerEvents: 'auto' }}>
                                    <UserSign
                                        data={res.owner}
                                        href={hashLocationToHref({
                                            location,
                                            query: {
                                                'filter{owner.username.in}': res.owner.username
                                            }
                                        })}
                                    />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
        <Row className="mt-2">
            <Col className="text-center">
                {loading && <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>}
                {!isNextPageAvailable && !loading && <FontAwesomeIcon icon={faDotCircle} />}
            </Col>
        </Row>
        </>
    );
}

CardGrid.defaultProps = {
    page: 1,
    resources: [],
    onLoad: () => {},
    isNextPageAvailable: false,
    loading: false
};

export default CardGrid;
