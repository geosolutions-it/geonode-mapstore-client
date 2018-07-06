/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
        IdentifyPlugin: require('../MapStore2/web/client/plugins/Identify'),
        TOCPlugin: require('../MapStore2/web/client/plugins/TOC'),
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
        DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu'),
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
        MapLoadingPlugin: require('../MapStore2/web/client/plugins/MapLoading'),
        OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar'),
        BackgroundSelectorPlugin: require('../MapStore2/web/client/plugins/BackgroundSelector'),
        FullScreenPlugin: require('../MapStore2/web/client/plugins/FullScreen'),
        ZoomInPlugin: require('../MapStore2/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('../MapStore2/web/client/plugins/ZoomOut'),
        ExpanderPlugin: require('../MapStore2/web/client/plugins/Expander'),
        BurgerMenuPlugin: require('../MapStore2/web/client/plugins/BurgerMenu'),
        UndoPlugin: require('../MapStore2/web/client/plugins/History'),
        RedoPlugin: require('../MapStore2/web/client/plugins/History'),
        ScaleBoxPlugin: require('../MapStore2/web/client/plugins/ScaleBox'),
        MapFooterPlugin: require('../MapStore2/web/client/plugins/MapFooter'),
        PrintPlugin: require('../MapStore2/web/client/plugins/Print'),
        MeasurePlugin: require('../MapStore2/web/client/plugins/Measure')
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('../MapStore2/web/client/components/data/identify/SwipeHeader')
    }
};
