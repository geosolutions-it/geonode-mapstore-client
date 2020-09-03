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
        MapPlugin: require('mapstore/web/client/plugins/Map'),
        IdentifyPlugin: require('mapstore/web/client/plugins/Identify'),
        ToolbarPlugin: require('mapstore/web/client/plugins/Toolbar'),
        ZoomAllPlugin: require('mapstore/web/client/plugins/ZoomAll'),
        MapLoadingPlugin: require('mapstore/web/client/plugins/MapLoading'),
        OmniBarPlugin: require('mapstore/web/client/plugins/OmniBar'),
        BackgroundSelectorPlugin: require('mapstore/web/client/plugins/BackgroundSelector'),
        FullScreenPlugin: require('mapstore/web/client/plugins/FullScreen'),
        ZoomInPlugin: require('mapstore/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('mapstore/web/client/plugins/ZoomOut'),
        ExpanderPlugin: require('mapstore/web/client/plugins/Expander'),
        BurgerMenuPlugin: require('mapstore/web/client/plugins/BurgerMenu'),
        ScaleBoxPlugin: require('mapstore/web/client/plugins/ScaleBox'),
        MapFooterPlugin: require('mapstore/web/client/plugins/MapFooter'),
        PrintPlugin: require('mapstore/web/client/plugins/Print'),
        TimelinePlugin: require('mapstore/web/client/plugins/Timeline'),
        PlaybackPlugin: require('mapstore/web/client/plugins/Playback'),
        AddReducersAndEpics: {
            reducers: {
                security: require('mapstore/web/client/reducers/security'),
                maps: require('mapstore/web/client/reducers/maps'),
                currentMap: require('mapstore/web/client/reducers/currentMap'),
                maplayout: require('mapstore/web/client/reducers/maplayout')
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
        SwipeHeader: require('mapstore/web/client/components/data/identify/SwipeHeader')
    }
};
