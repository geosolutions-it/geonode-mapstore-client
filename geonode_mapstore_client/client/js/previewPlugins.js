/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
    plugins: {
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
        MapLoadingPlugin: require('../MapStore2/web/client/plugins/MapLoading'),
        OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar'),
        BackgroundSelectorPlugin: require('../MapStore2/web/client/plugins/BackgroundSelector'),
        FullScreenPlugin: require('../MapStore2/web/client/plugins/FullScreen'),
        ZoomInPlugin: require('../MapStore2/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('../MapStore2/web/client/plugins/ZoomOut'),
        ExpanderPlugin: require('../MapStore2/web/client/plugins/Expander'),
        BurgerMenuPlugin: require('../MapStore2/web/client/plugins/BurgerMenu'),
        ScaleBoxPlugin: require('../MapStore2/web/client/plugins/ScaleBox'),
        MapFooterPlugin: require('../MapStore2/web/client/plugins/MapFooter'),
        PrintPlugin: require('../MapStore2/web/client/plugins/Print'),
        AddReducersAndEpics: {
            reducers: {
                security: require('../MapStore2/web/client/reducers/security'),
                maps: require('../MapStore2/web/client/reducers/maps'),
                currentMap: require('../MapStore2/web/client/reducers/currentMap')
            }
        }
    },
    requires: {
    }
};
