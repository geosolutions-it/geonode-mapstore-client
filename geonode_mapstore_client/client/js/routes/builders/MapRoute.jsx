/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MapStorePluginsContainer from 'mapstore-sdk/plugins/PluginsContainer';
import useLazyPlugins from 'mapstore-sdk/plugins/hooks/useLazyPlugins';

import pluginsEntries from '@js/plugins/index';

// which path of sdk should include the actions
import { loadMapConfig } from '@mapstore/actions/config';

function MapRoute({
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
                loadMapConfig('/mock-data/map.json', 'map')
            );
        }
    }, [pending, pluginsName.length]);

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

MapRoute.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array
};

export default MapRoute;
