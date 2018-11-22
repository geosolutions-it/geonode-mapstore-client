/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Rx = require("rxjs");
const {_setThumbnail, updateMapLayoutEpic} = require("./epics");
module.exports = {
    plugins: {
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        IdentifyPlugin: require('../MapStore2/web/client/plugins/Identify'),
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
        TimelinePlugin: require('../MapStore2/web/client/plugins/Timeline'),
        PlaybackPlugin: require('../MapStore2/web/client/plugins/Playback'),
        AddReducersAndEpics: {
            reducers: {
                security: require('../MapStore2/web/client/reducers/security'),
                maps: require('../MapStore2/web/client/reducers/maps'),
                currentMap: require('../MapStore2/web/client/reducers/currentMap'),
                maplayout: require('../MapStore2/web/client/reducers/maplayout')
            },
            epics: {
                _setThumbnail,
                updateMapLayoutEpic,
                zoomToVisibleAreaEpic: () => Rx.Observable.empty()
            }
        }
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('../MapStore2/web/client/components/data/identify/SwipeHeader')
    }
};
