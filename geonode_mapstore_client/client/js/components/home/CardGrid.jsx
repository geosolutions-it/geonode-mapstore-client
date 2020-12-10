/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap-v1';
import HTML from '@mapstore/framework/components/I18N/HTML';
import FaIcon from '@js/components/home/FaIcon';
import ResourceCard from '@js/components/home/ResourceCard';
import { withResizeDetector } from 'react-resize-detector';

const Cards = withResizeDetector(({
    resources,
    formatHref,
    isCardActive,
    width: containerWidth,
    links
}) => {

    const margin = 24;
    const size = 320;
    const count = Math.floor(containerWidth / (size + margin));
    const width = containerWidth >= size + margin * 2
        ? Math.floor((containerWidth - margin * count) / count)
        : '100%';
    const ulPadding = margin / 2;
    const isSingleCard = count === 0 || count === 1;
    return (
        <ul
            style={{
                paddingLeft: isSingleCard ? 0 : ulPadding,
                paddingBottom: margin
            }}
        >
            {resources.map((resource, idx) => {
                return (
                    <li
                        key={resource.pk}
                        style={isSingleCard
                            ? {
                                width: `calc(100% - ${margin}px)`,
                                margin: margin / 2
                            }
                            : {
                                width: width,
                                marginRight: (idx + 1) % count === 0 ? 0 : margin,
                                marginTop: margin
                            }}
                    >
                        <ResourceCard
                            active={isCardActive(resource)}
                            data={resource}
                            formatHref={formatHref}
                            links={links}
                        />
                    </li>
                );
            })}
        </ul>
    );
});

function CardGrid({
    resources,
    loading,
    page,
    isNextPageAvailable,
    onLoad,
    formatHref,
    isCardActive,
    containerStyle,
    header,
    cardLinks,
    column,
    messageId,
    children,
    pageSize
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

    const hasResources = resources?.length > 0;

    return (
        <div className="gn-card-grid">
            {header}
            <div style={{
                display: 'flex',
                ...(pageSize === 'sm' && {
                    flexDirection: 'column'
                })
            }}>
                <div style={{ flex: 1 }}>
                    <div className="gn-card-grid-container" style={containerStyle}>
                        {children}
                        {messageId && <div className="gn-card-grid-message">
                            <h1><HTML msgId={`gnhome.${messageId}Title`}/></h1>
                            <p>
                                <HTML msgId={`gnhome.${messageId}Content`}/>
                            </p>
                        </div>}
                        <Cards
                            resources={resources}
                            formatHref={formatHref}
                            isCardActive={isCardActive}
                            links={cardLinks}
                        />
                        <div className="gn-card-grid-pagination">
                            {loading && <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>}
                            {hasResources && !isNextPageAvailable && !loading && <FaIcon name="dot-circle" />}
                        </div>
                    </div>
                </div>
                {column}
            </div>
        </div>
    );
}

CardGrid.defaultProps = {
    page: 1,
    resources: [],
    onLoad: () => { },
    isNextPageAvailable: false,
    loading: false,
    formatHref: () => '#',
    isCardActive: () => false
};

export default CardGrid;
