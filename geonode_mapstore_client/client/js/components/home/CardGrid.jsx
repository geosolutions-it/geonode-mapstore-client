/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';
import { Row, Col, Card, Spinner, Dropdown} from 'react-bootstrap-v1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarked, faLayerGroup, faFile, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import UserSign from '@js/components/home/UserSign';
import Tag from '@js/components/home/Tag';

function CardGrid({
    resources,
    style,
    loading,
    page,
    isNextPageAvailable,
    onLoad,
    formatHref,
    isCardActive,
    theme
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

    const types = {
        'layer': {
            icon: faLayerGroup
        },
        'map': {
            icon: faMapMarked
        },
        'document': {
            icon: faFile
        }
    };

    const links = [
        {
            href: '#/',
            label: 'Link to action'
        }
    ];

    return (
        <>
        <Row style={style} className="mt-2">
            {resources.map((res) => {
                return (
                    <Col
                        key={res.pk}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                    >
                        <Card
                            className={`gn-resource-card${isCardActive(res) ? ' active' : ''}`}
                        >
                            <a
                                className="gn-resource-card-link"
                                href={formatHref({
                                    pathname: `/search/${res.pk}`
                                })}
                            />
                            <Card.Img
                                variant="top"
                                src={res.thumbnail_url}
                            />
                            <Card.Body>
                                <Card.Text>
                                    {types[res.polymorphic_ctype] &&
                                        <>
                                        <Tag
                                            href={formatHref({
                                                query: {
                                                    'filter{res.polymorphic_ctype.in}': res.polymorphic_ctype
                                                }
                                            })}>
                                            <FontAwesomeIcon icon={types[res.polymorphic_ctype].icon} />
                                        </Tag>
                                        &nbsp; &nbsp;
                                        {res?.category?.identifier && <Tag
                                            className="gn-resource-card-category"
                                            href={formatHref({
                                                query: {
                                                    'filter{res.category.identifier.in}': res.category.identifier
                                                }
                                            })}>
                                            {res.category.identifier}
                                        </Tag>}
                                        </>
                                    }
                                    &nbsp;
                                </Card.Text>
                                <a href={res.detail_url}>
                                    <Card.Title>
                                        {res.title}
                                    </Card.Title>
                                </a>
                                <Card.Text>
                                    {res.abstract ? res.abstract : '...'}
                                </Card.Text>
                                <Card.Text>
                                    <UserSign
                                        data={res.owner}
                                        href={formatHref({
                                            query: {
                                                'filter{owner.username.in}': res.owner.username
                                            }
                                        })}
                                    />
                                </Card.Text>
                                <Dropdown
                                    className="gn-card-options"
                                    alignRight
                                >
                                    <Dropdown.Toggle
                                        id={`gn-card-options-${res.pk}`}
                                        variant={theme}
                                        size="sm"
                                    >
                                        <FontAwesomeIcon icon={faEllipsisV}/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {links.map(({ label, href }) => {
                                            return (
                                                <Dropdown.Item
                                                    key={href}
                                                    href={href}
                                                >
                                                    {label}
                                                </Dropdown.Item>
                                            );
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
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
    loading: false,
    formatHref: () => '#',
    isCardActive: () => false
};

export default CardGrid;
