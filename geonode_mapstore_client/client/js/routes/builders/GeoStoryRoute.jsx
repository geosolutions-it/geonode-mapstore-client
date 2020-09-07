/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MapStorePluginsContainer from 'mapstore/framework/components/plugins/PluginsContainer';
import useLazyPlugins from 'mapstore/framework/hooks/useLazyPlugins';

import pluginsEntries from '@js/plugins/index';

import sampleStory from '../../../mock-data/geostory.json';

import { setCurrentStory } from 'mapstore/framework/actions/geostory';

function GeoStoryRoute({
    dispatch,
    match,
    pluginsConfig
}) {

    const { plugins, pending } = useLazyPlugins({
        pluginsEntries,
        pluginsConfig
    });

    const storyId = match?.params?.id;

    const pluginsName = Object.keys(plugins);

    useEffect(() => {
        if (!pending && pluginsName.length > 0 && storyId) {
            dispatch(
                setCurrentStory(sampleStory)
            );
        }
    }, [pending, pluginsName.length, storyId]);

    return (
        <MapStorePluginsContainer
            key="plugins-container-viewer"
            id="plugins-container-viewer"
            className="plugins-container plugins-container-viewer msgapi"
            plugins={plugins}
            pluginsConfig={pluginsConfig}
        />
    );
}

GeoStoryRoute.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array
};

export default GeoStoryRoute;
