/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import castArray from 'lodash/castArray';
import SearchBar from '@js/components/SearchBar';
import BrandNavbar from '@js/components/BrandNavbar';
import Navbar from '@js/components/Navbar';
import DetailPanel from '@js/components/DetailPanel';
import { hashLocationToHref } from '@js/utils/GNSearchUtils';
import CardGrid from '@js/components/CardGrid';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap-v1';
import {
    fetchSuggestions,
    searchResources,
    requestResource
} from '@js/actions/geonodesearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import geonodeLogo from '../../mock-data/geonode-logo.svg';

const DEFAULT_SUGGESTIONS = [];
const DEFAULT_RESOURCES = [];

const ConnectedSearchBar = connect(
    createSelector([
        state => state?.geoNodeSearch?.suggestions || DEFAULT_SUGGESTIONS,
        state => state?.geoNodeSearch?.loading || false
    ], (suggestions, loading) => ({
        suggestions,
        loading
    })),
    {
        onFetchSuggestions: fetchSuggestions
    }
)(SearchBar);

const ConnectedCardGrid = connect(
    createSelector([
        state => state?.geoNodeSearch?.resources || DEFAULT_RESOURCES,
        state => state?.geoNodeSearch?.loading || false,
        state => state?.geoNodeSearch?.isNextPageAvailable || false
    ], (resources, loading, isNextPageAvailable) => ({
        resources,
        loading,
        isNextPageAvailable
    }))
)(CardGrid);

import url from 'url';

function Search({
    location,
    params,
    onSearch,
    onSelect,
    selectedResource,
    match
}) {

    function handleUpdate(newParams, pathname) {
        const { query } = url.parse(location.search, true);
        onSearch({
            ...query,
            ...params,
            ...newParams
        }, pathname);
    }

    const navbarHeight = 50;

    const detailsWidth = selectedResource ? 30 : 0;
    const mainWidth = 100 - detailsWidth;

    const { query } = url.parse(location.search, true);
    const filters = Object.keys(query).reduce((acc, key) => key.indexOf('filter') === 0
        ? [...acc, ...castArray(query[key]).map((value) => ({ key, value })) ]
        : acc, []);

    const pk = match.params.pk;
    useEffect(() => {
        onSelect(pk);
    }, [ pk ]);

    return (
        <>
        <div style={{
            width: `${mainWidth}%`
        }}>
            <BrandNavbar
                links={[
                    {
                        src: geonodeLogo,
                        href: '#/'
                    }
                ]}
                style={{
                    height: navbarHeight,
                    width: `${mainWidth}%`
                }}
            >
                <ConnectedSearchBar
                    key="search"
                    value={params.q || ''}
                    style={{
                        width: '100%',
                        maxWidth: 550,
                        backgroundColor: '#ffffff'
                    }}
                    onChange={(value) =>
                        handleUpdate({
                            q: value
                        }, '/search/')}
                />
            </BrandNavbar>
            <Navbar
                style={{
                    top: navbarHeight
                }}
            />
            <div
                style={{
                    backgroundColor: 'white',
                    position: 'relative',
                    minHeight: '100vh'
                }}>
                <Container>
                    <div style={{ position: 'sticky', top: navbarHeight * 2, zIndex: 10 }}>
                        <Row
                            
                            
                        >
                            <Col className="bg-primary text-white p-2">
                                <div >
                                    <Button className="mr-3"><FontAwesomeIcon icon={faFilter}/></Button>
                                    {filters.map(({ key, value }) => {
                                        return (<Button
                                            className="mr-1"
                                            variant="outline-light"
                                            // as="a"
                                            size="sm"
                                            href={hashLocationToHref({
                                                location,
                                                query: { [key]: value }
                                            })}>
                                            {value}&nbsp;&nbsp;<FontAwesomeIcon icon={faTimes}/>
                                        </Button>);
                                    })}
                                </div>
                            </Col>
                        </Row>
                        <Row className="bg-light p-2">
                            <Col>
                                <h4>Resources</h4>
                            </Col>
                            <Col  style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-basic" variant="outline-primary">
                                        Order
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['-date']
                                                },
                                                replaceQuery: true
                                            })}>Most recent</Dropdown.Item>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['date']
                                                },
                                                replaceQuery: true
                                            })}>Less recent</Dropdown.Item>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['title']
                                                },
                                                replaceQuery: true
                                            })}>A Z</Dropdown.Item>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['-title']
                                                },
                                                replaceQuery: true
                                            })}>Z A</Dropdown.Item>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['popular_count']
                                                },
                                                replaceQuery: true
                                            })}>Most popular</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                    
                        
                    

                    <ConnectedCardGrid
                        location={location}
                        page={params.page ? parseFloat(params.page) : 1}
                        onLoad={(value) => {
                            handleUpdate({
                                page: value
                            });
                        }}
                        selected={selectedResource}
                        style={{
                            minHeight: '50vh',
                            paddingTop: navbarHeight * 1
                        }}
                    />
                </Container>
            </div>
        </div>
        {selectedResource && <div
            className="bg-light p-4 shadow"
            style={{
                position: 'fixed',
                right: 0,
                top: 0,
                width: `${detailsWidth}%`,
                height: '100vh',
                zIndex: 999999,
                wordBreak: 'break-word'
            }}>
            <DetailPanel
                resource={selectedResource}
                location={location}
                filters={filters}
            />
        </div>}
        </>
    );
}

Search.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array
};

const DEFAULT_PARAMS = {};

const ConnectedSearch = connect(
    createSelector([
        state => state?.geoNodeSearch?.params || DEFAULT_PARAMS,
        state => state?.geoNodeSearch?.selectedResource || null
    ], (params, selectedResource) => ({
        params,
        selectedResource
    })),
    {
        onSearch: searchResources,
        onSelect: requestResource
    }
)(Search);

export default ConnectedSearch;
