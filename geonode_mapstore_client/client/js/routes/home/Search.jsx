/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import url from 'url';
import castArray from 'lodash/castArray';
import SearchBar from '@js/components/home/SearchBar';
import BrandNavbar from '@js/components/home/BrandNavbar';
import Navbar from '@js/components/home/Navbar';
import DetailPanel from '@js/components/home/DetailPanel';
import FilterForm from '@js/components/home/FilterForm';
import SortHeader from '@js/components/home/SortHeader';
import { hashLocationToHref } from '@js/utils/GNSearchUtils';
import CardGrid from '@js/components/home/CardGrid';
import { Container } from 'react-bootstrap-v1';
import {
    fetchSuggestions,
    searchResources,
    requestResource
} from '@js/actions/geonodesearch';

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

function Search({
    location,
    params,
    onSearch,
    onSelect,
    selectedResource,
    theme,
    match,
    navigation,
    logo
}) {

    const [expanded, setExpanded] = useState(false);
    const brandNavbarNode = useRef();
    const navbarNode = useRef();
    const brandNavbarHeight = brandNavbarNode.current
        ? brandNavbarNode.current.getBoundingClientRect().height
        : 0;
    const navbarHeight = navbarNode.current
        ? navbarNode.current.getBoundingClientRect().height
        : 0;
    const navHeight = navbarHeight + brandNavbarHeight;

    function handleUpdate(newParams, pathname) {
        const { query } = url.parse(location.search, true);
        onSearch({
            ...query,
            ...params,
            ...newParams
        }, pathname);
    }

    function handleFormatHref(options) {
        return hashLocationToHref({
            location,
            ...options
        });
    }

    const detailsWidth = selectedResource ? 500 : 0;

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
        <div
            className={`gn-page gn-main-route gn-${theme}`}
            style={{
                width: `calc(100% - ${detailsWidth}px)`
            }}
        >
            <BrandNavbar
                ref={brandNavbarNode}
                theme={theme}
                links={logo}
                style={{
                    width: `calc(100% - ${detailsWidth}px)`
                }}
            >
                <ConnectedSearchBar
                    key="search"
                    theme={theme}
                    value={params.q || ''}
                    style={{
                        width: '100%',
                        maxWidth: 550
                    }}
                    onChange={(value) =>
                        handleUpdate({
                            q: value
                        }, '/search/')}
                />
            </BrandNavbar>
            <Navbar
                ref={navbarNode}
                theme={theme}
                style={{
                    top: brandNavbarHeight
                }}
                expanded={expanded}
                onToggle={setExpanded}
                items={navigation}
            />
            <div className="gn-background-cover">
                <Container>
                    <div
                        className="gn-sticky-filters-container"
                        style={{
                            top: navHeight
                        }}
                    >
                        <FilterForm
                            query={query}
                            onChange={handleUpdate}
                            formatHref={handleFormatHref}
                        />
                        <SortHeader
                            title="Resources"
                            formatHref={handleFormatHref}
                            theme={theme}
                        />
                    </div>
                    <ConnectedCardGrid
                        theme={theme}
                        isCardActive={resource => resource.pk === pk}
                        page={params.page ? parseFloat(params.page) : 1}
                        onLoad={(value) => {
                            handleUpdate({
                                page: value
                            });
                        }}
                        style={{
                            minHeight: '50vh',
                            paddingTop: navbarHeight
                        }}
                        formatHref={handleFormatHref}
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
                width: detailsWidth,
                height: '100vh',
                zIndex: 999999,
                wordBreak: 'break-word'
            }}>
            <DetailPanel
                resource={selectedResource}
                filters={filters}
                formatHref={handleFormatHref}
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
    pluginsConfig: PropTypes.array,
    logo: PropTypes.array
};

Search.defaultProps = {
    theme: 'light',
    logo: []
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
