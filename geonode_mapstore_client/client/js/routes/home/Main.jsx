/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import url from 'url';
import { createSelector } from 'reselect';
import SearchBar from '@js/components/home/SearchBar';
import BrandNavbar from '@js/components/home/BrandNavbar';
import BackgroundHero from '@js/components/home/BackgroundHero';
import Navbar from '@js/components/home/Navbar';
import CardGrid from '@js/components/home/CardGrid';
import FilterForm from '@js/components/home/FilterForm';
import SortHeader from '@js/components/home/SortHeader';
import { Container } from 'react-bootstrap-v1';
import {
    fetchSuggestions,
    searchResources
} from '@js/actions/geonodesearch';
import { hashLocationToHref } from '@js/utils/GNSearchUtils';

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

function Main({
    location,
    theme = 'light',
    params,
    onSearch,
    searchBoxTop,
    navigation,
    background,
    logo,
    jumbotron
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
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);
    const [isBackgroundContentVisible, setIsBackgroundContentVisible] = useState(true);

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

    function handleVisibility(type, visibility) {
        if (type === 'background') {
            setIsBackgroundVisible(visibility);
        }
        if (type === 'content') {
            setIsBackgroundContentVisible(visibility);
        }
    }

    const search = (
        <ConnectedSearchBar
            theme={theme}
            key="search"
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
    );

    const { query } = url.parse(location.search, true);

    return (
        <>
        <div
            className={`gn-page gn-main-route gn-${theme}`}
        >
            <BrandNavbar
                ref={brandNavbarNode}
                theme={theme}
                links={logo}
                style={{
                    backgroundColor: !isBackgroundVisible ? undefined : 'transparent'
                }}
            >
                {!isBackgroundContentVisible && search}
            </BrandNavbar>
            <BackgroundHero
                title={jumbotron.title}
                description={jumbotron.description}
                theme={theme}
                src={background.src}
                contentTop={searchBoxTop}
                offset={brandNavbarHeight}
                onChangeVisibility={handleVisibility}
                imageCredits={background.credits}
            >
                {isBackgroundContentVisible && <div
                    style={{
                        position: 'absolute',
                        top: searchBoxTop,
                        width: '100%',
                        height: brandNavbarHeight,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 20
                    }}>
                    {search}
                </div>}
            </BackgroundHero>
            <Navbar
                theme={theme}
                ref={navbarNode}
                style={{ top: brandNavbarHeight }}
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
                        page={params.page ? parseFloat(params.page) : 1}
                        onLoad={(value) => {
                            handleUpdate({
                                page: value
                            });
                        }}
                        formatHref={handleFormatHref}
                    />
                </Container>
            </div>
        </div>
        </>
    );
}

Main.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array,
    searchBoxTop: PropTypes.number,
    background: PropTypes.object,
    logo: PropTypes.array,
    jumbotron: PropTypes.object
};

Main.defaultProps = {
    searchBoxTop: 200,
    background: {},
    logo: [],
    jumbotron: {}
};

const DEFAULT_PARAMS = {};

const ConnectedMain = connect(
    createSelector([
        state => state?.geoNodeSearch?.params || DEFAULT_PARAMS
    ], (params) => ({
        params
    })),
    {
        onSearch: searchResources
    }
)(Main);

export default ConnectedMain;
