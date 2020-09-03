/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
// geonode specific epics
const epics = require("./epics");

module.exports = {
    plugins: {
        AddGroupPlugin: require('mapstore/web/client/plugins/AddGroup').default,
        IdentifyPlugin: require('mapstore/web/client/plugins/Identify'),
        TOCPlugin: require('mapstore/web/client/plugins/TOC'),
        MapPlugin: require('mapstore/web/client/plugins/Map'),
        ToolbarPlugin: require('mapstore/web/client/plugins/Toolbar'),
        DrawerMenuPlugin: require('mapstore/web/client/plugins/DrawerMenu'),
        ZoomAllPlugin: require('mapstore/web/client/plugins/ZoomAll'),
        MapLoadingPlugin: require('mapstore/web/client/plugins/MapLoading'),
        OmniBarPlugin: require('mapstore/web/client/plugins/OmniBar'),
        BackgroundSelectorPlugin: require('mapstore/web/client/plugins/BackgroundSelector'),
        FullScreenPlugin: require('mapstore/web/client/plugins/FullScreen'),
        ZoomInPlugin: require('mapstore/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('mapstore/web/client/plugins/ZoomOut'),
        ExpanderPlugin: require('mapstore/web/client/plugins/Expander'),
        BurgerMenuPlugin: require('mapstore/web/client/plugins/BurgerMenu'),
        UndoPlugin: require('mapstore/web/client/plugins/History'),
        RedoPlugin: require('mapstore/web/client/plugins/History'),
        ScaleBoxPlugin: require('mapstore/web/client/plugins/ScaleBox'),
        MapFooterPlugin: require('mapstore/web/client/plugins/MapFooter'),
        PrintPlugin: require('mapstore/web/client/plugins/Print'),
        MeasurePlugin: require('mapstore/web/client/plugins/Measure'),
        FilterLayerPlugin: require('mapstore/web/client/plugins/FilterLayer').default,
        TOCItemsSettingsPlugin: require('mapstore/web/client/plugins/TOCItemsSettings').default,
        WidgetsPlugin: require('mapstore/web/client/plugins/Widgets').default,
        WidgetsBuilderPlugin: require('mapstore/web/client/plugins/WidgetsBuilder').default,
        WidgetsTrayPlugin: require('mapstore/web/client/plugins/WidgetsTray').default,
        NotificationsPlugin: require('mapstore/web/client/plugins/Notifications'),
        FeatureEditorPlugin: require('mapstore/web/client/plugins/FeatureEditor').default,
        QueryPanelPlugin: require('mapstore/web/client/plugins/QueryPanel'),
        SavePlugin: require('mapstore/web/client/plugins/Save').default,
        SaveAsPlugin: require('mapstore/web/client/plugins/SaveAs').default,
        MetadataExplorerPlugin: require('mapstore/web/client/plugins/MetadataExplorer'),
        GridContainerPlugin: require('mapstore/web/client/plugins/GridContainer'),
        StyleEditorPlugin: require('mapstore/web/client/plugins/StyleEditor'),
        TimelinePlugin: require('mapstore/web/client/plugins/Timeline'),
        PlaybackPlugin: require('mapstore/web/client/plugins/Playback'),
        MousePositionPlugin: require('mapstore/web/client/plugins/MousePosition'),
        SearchPlugin: require('mapstore/web/client/plugins/Search'),
        SearchServicesConfigPlugin: require('mapstore/web/client/plugins/SearchServicesConfig'),
        AddReducersAndEpics: {
            reducers: {
                security: require('mapstore/web/client/reducers/security'),
                maps: require('mapstore/web/client/reducers/maps'),
                currentMap: require('mapstore/web/client/reducers/currentMap'),
                maplayout: require('mapstore/web/client/reducers/maplayout')
            },
            epics
        }
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('mapstore/web/client/components/data/identify/SwipeHeader')
    }
};
