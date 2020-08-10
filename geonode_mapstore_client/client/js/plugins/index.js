/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

function toLazyPlugin(name, imp) {
    return imp.then((mod) => {
        const impl = mod.default;
        const pluginName = name + 'Plugin'; 
        return {
            default: {
                name,
                component: impl[pluginName],
                reducers: impl.reducers || {},
                epics: impl.epics || {},
                containers: impl.containers || {}
            }
        };
    });
}

// this plugins index combined with the hook `useLazyPlugins`
// provides a way to import dynamically plugins similar to extensions
const plugins = {
    GeoStoryPlugin: () => toLazyPlugin(
        'GeoStory',
        import(/* webpackChunkName: 'plugins/geostory-plugin' */ '@mapstore/plugins/GeoStory')
    ),
    MapPlugin: () => toLazyPlugin(
        'Map',
        import(/* webpackChunkName: 'plugins/map-plugin' */ '@mapstore/plugins/Map')
    ),
    TestPlugin: () => import(/* webpackChunkName: 'plugins/test-plugin' */ '@js/plugins/Test')
};

export default plugins;
