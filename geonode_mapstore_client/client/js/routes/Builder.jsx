/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MapStorePluginsContainer from '@js/plugins/MapStorePluginsContainer';
import useLazyPlugins from '@js/hooks/useLazyPlugins';
import pluginsEntries from '@js/plugins/index';
import BrandNavbar from '@js/components/BrandNavbar';
import { setCurrentStory } from '@mapstore/actions/geostory';

// test GeoStory
import sampleStory from '@mapstore/configs/sampleStory.json';

function Builder({
    dispatch,
    pluginsConfig
}) {

    const { plugins, pending } = useLazyPlugins({
        pluginsEntries,
        pluginsConfig
    });

    const pluginsName = Object.keys(plugins);

    useEffect(() => {
        if (!pending && pluginsName.length > 0) {
            dispatch(
                setCurrentStory(sampleStory)
            );
        }
    }, [pending, pluginsName.length]);

    return (
        <>
            <BrandNavbar />
            <MapStorePluginsContainer
                key="plugins-container-viewer"
                id="plugins-container-viewer"
                className="plugins-container plugins-container-viewer msgapi"
                plugins={plugins}
                pluginsConfig={pluginsConfig}
            />
        </>
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
