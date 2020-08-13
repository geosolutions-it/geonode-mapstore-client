/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import PropTypes from 'prop-types';
import BrandNavbar from '@js/components/BrandNavbar';

import builders from './builders';

// test using layout manager plugin
function Builder({
    pluginsConfig,
    ...props
}) {
    const { type } = props.match?.params || {};
    const Content = builders[type];
    if (Content) {
        // get plugins configuration from an object
        // where each key represent the selected builder type
        const config = pluginsConfig[type];
        return (
            <>
                <BrandNavbar />
                <Content
                    { ...props }
                    pluginsConfig={config}
                />
            </>
        );
    }
    return (
        <div></div>
    );
}

Builder.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array
};

export default Builder;
