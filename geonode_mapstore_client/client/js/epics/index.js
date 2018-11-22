/**
 * Copyright 2018, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Epics needed to adapt mapstore2 to geonode backend
 */
const Rx = require("rxjs");

const {SELECT_NODE} = require("../../MapStore2/web/client/actions/layers");
const {setPermission, SET_PERMISSION} = require("../../MapStore2/web/client/actions/featuregrid");
const {setEditPermissionStyleEditor} = require("../../MapStore2/web/client/actions/styleeditor");
const {layerEditPermissions, updateThumb} = require("../api/geonode");
const {getSelectedLayer, layersSelector} = require("../../MapStore2/web/client/selectors/layers");
const {mapSelector} = require("../../MapStore2/web/client/selectors/map");
const ConfigUtils = require("../../MapStore2/web/client/utils/ConfigUtils");

const {updateMapLayout} = require('../../MapStore2/web/client/actions/maplayout');
const {TOGGLE_CONTROL, SET_CONTROL_PROPERTY} = require('../../MapStore2/web/client/actions/controls');
const {MAP_CONFIG_LOADED} = require('../../MapStore2/web/client/actions/config');
const {SIZE_CHANGE, CLOSE_FEATURE_GRID, OPEN_FEATURE_GRID} = require('../../MapStore2/web/client/actions/featuregrid');
const {CLOSE_IDENTIFY, ERROR_FEATURE_INFO, TOGGLE_MAPINFO_STATE, LOAD_FEATURE_INFO, EXCEPTIONS_FEATURE_INFO} = require('../../MapStore2/web/client/actions/mapInfo');
const {SHOW_SETTINGS, HIDE_SETTINGS} = require('../../MapStore2/web/client/actions/layers');
const {PURGE_MAPINFO_RESULTS} = require('../../MapStore2/web/client/actions/mapInfo');
const {mapInfoRequestsSelector} = require('../../MapStore2/web/client/selectors/mapinfo');

const {isFeatureGridOpen, getDockSize} = require('../../MapStore2/web/client/selectors/featuregrid');
const {head, get} = require('lodash');
// const {updateMapLayoutEpic} = require('../../MapStore2/web/client/epics/maplayout');

// const {basicError} = require('../../MapStore2/web/client/utils/NotificationUtils');
/**
 * We need to include missing epics. The plugins that normally include this epic is not used.
 */
const {mapSaveMapResourceEpic} = require("../../MapStore2/web/client/epics/maps");


/**
 * When a user selects a layer, the app checks for layer editing permission.
 */
const _setFeatureEditPermission = (action$, {getState} = {}) =>
    action$.ofType(SELECT_NODE).filter(({nodeType}) => nodeType === "layer" && !ConfigUtils.getConfigProp("disableCheckEditPermissions"))
        .switchMap(() => {
            const layer = getSelectedLayer(getState() || {});
            return layer ? layerEditPermissions(layer)
                            .map(permissions => setPermission(permissions))
                            .startWith(setPermission({canEdit: false})).catch(() => Rx.Observable.empty()) : Rx.Observable.of(setPermission({canEdit: false}));
        });
const _setStyleEditorPermission = action$ =>
        action$.ofType(SET_PERMISSION).map(({permission = {}}) => setEditPermissionStyleEditor(permission.canEdit));
/**
 * Update geonode thumbnail for layers or maps
 */
const _setThumbnail = (action$, {getState} = {}) =>
        action$.ofType("GEONODE:CREATE_MAP_THUMBNAIL", "GEONODE:CREATE_LAYER_THUMBNAIL")
        .do(() => {
            try {
                $("#_thumbnail_processing").modal("show");// eslint-disable-line
            } catch(err) {
                console.log(err);// eslint-disable-line
            }
        })
        .exhaustMap(({type}) => {
            const state = getState();
            const layers = layersSelector(state);
            const map = mapSelector(state);
            const isMap = type === "GEONODE:CREATE_MAP_THUMBNAIL";
            const id = isMap ? get(map, "info.id") : (layers[layers.length - 1]).name;
            const endPoint = isMap ? "maps" : "layers";
            const {width, height} = map.size;
            const {maxx, minx, maxy, miny} = map.bbox.bounds;
            const body = {
                    'bbox': [minx, maxx, miny, maxy],
                    'srid': map.bbox.crs,
                    center: map.center,
                    zoom: map.zoom,
                    width,
                    height,
                    'layers': layers.filter(l => l.group !== 'background' && l.visibility).map(({name}) => name).join(',')
                };
            return updateThumb(endPoint, id, body).do(({data, status} = {}) => {
                try {
                    $("#_thumbnail_feedbacks").find('.modal-title').text(status);// eslint-disable-line
                    $("#_thumbnail_feedbacks").find('.modal-body').text(data);// eslint-disable-line
                    $("#_thumbnail_feedbacks").modal("show");// eslint-disable-line
                } catch(err) {
                    console.log(err);// eslint-disable-line
                }
            }).mapTo({type: "THUMBNAIL_UPDATE"}).catch( ({code, message}) => {
                try {
                    if (code === "ECONNABORTED") {
                        $("#_thumbnail_feedbacks").find('.modal-title').text('Timeout');// eslint-disable-line
                        $("#_thumbnail_feedbacks").find('.modal-body').text('Failed from timeout: Could not create Thumbnail');// eslint-disable-line
                        $("#_thumbnail_feedbacks").modal("show");// eslint-disable-line
                    } else {
                        $("#_thumbnail_feedbacks").find('.modal-title').text('Error: ' + message);// eslint-disable-line
                        $("#_thumbnail_feedbacks").find('.modal-body').text('Could not create Thumbnail');// eslint-disable-line
                        $("#_thumbnail_feedbacks").modal("show");// eslint-disable-line
                    }
                } catch(err) {
                    console.log(err);// eslint-disable-line
                } finally {
                    return Rx.Observable.of({type: "THUMBNAIL_UPDATE_ERROR"});
                }
            }).do(() => {
                try {
                    $("#_thumbnail_processing").modal("hide");// eslint-disable-line
                } catch(err) {
                    console.log(err);// eslint-disable-line
                }
            });
        });
// Modified to accept map-layout from Config
const updateMapLayoutEpic = (action$, store) =>
    action$.ofType(MAP_CONFIG_LOADED, SIZE_CHANGE, CLOSE_FEATURE_GRID, OPEN_FEATURE_GRID, CLOSE_IDENTIFY, TOGGLE_MAPINFO_STATE, LOAD_FEATURE_INFO, EXCEPTIONS_FEATURE_INFO, TOGGLE_CONTROL, SET_CONTROL_PROPERTY, SHOW_SETTINGS, HIDE_SETTINGS, ERROR_FEATURE_INFO, PURGE_MAPINFO_RESULTS)
        .switchMap(() => {

            const state = store.getState();

            if (get(state, "browser.mobile")) {
                const bottom = mapInfoRequestsSelector(state).length > 0 ? {bottom: '50%'} : {bottom: undefined};
                const boundingMapRect = {
                    ...bottom
                };
                return Rx.Observable.of(updateMapLayout({
                    boundingMapRect
                }));
            }
            const mapLayout = ConfigUtils.getConfigProp("mapLayout") || {left: {sm: 300, md: 500, lg: 600}, right: {md: 658}, bottom: {sm: 30}};

            if (get(state, "mode") === 'embedded') {
                const height = {height: 'calc(100% - ' + mapLayout.bottom.sm + 'px)'};
                const bottom = mapInfoRequestsSelector(state).length > 0 ? {bottom: '50%'} : {bottom: undefined};
                const boundingMapRect = {
                    ...bottom
                };
                return Rx.Observable.of(updateMapLayout({
                    ...height,
                    boundingMapRect
                }));
            }

            const leftPanels = head([
                get(state, "controls.queryPanel.enabled") && {left: mapLayout.left.lg} || null,
                get(state, "controls.widgetBuilder.enabled") && {left: mapLayout.left.md} || null,
                get(state, "layers.settings.expanded") && {left: mapLayout.left.md} || null,
                get(state, "controls.drawer.enabled") && {left: mapLayout.left.sm} || null
            ].filter(panel => panel)) || {left: 0};

            const rightPanels = head([
                get(state, "controls.details.enabled") && {right: mapLayout.right.md} || null,
                get(state, "controls.annotations.enabled") && {right: mapLayout.right.md} || null,
                get(state, "controls.metadataexplorer.enabled") && {right: mapLayout.right.md} || null,
                get(state, "mapInfo.enabled") && mapInfoRequestsSelector(state).length > 0 && {right: mapLayout.right.md} || null
            ].filter(panel => panel)) || {right: 0};

            const dockSize = getDockSize(state) * 100;
            const bottom = isFeatureGridOpen(state) && {bottom: dockSize + '%', dockSize} || {bottom: mapLayout.bottom.sm};

            const transform = isFeatureGridOpen(state) && {transform: 'translate(0, -' + mapLayout.bottom.sm + 'px)'} || {transform: 'none'};
            const height = {height: 'calc(100% - ' + mapLayout.bottom.sm + 'px)'};

            const boundingMapRect = {
                ...bottom,
                ...leftPanels,
                ...rightPanels
            };

            return Rx.Observable.of(updateMapLayout({
                ...leftPanels,
                ...rightPanels,
                ...bottom,
                ...transform,
                ...height,
                boundingMapRect
            }));
        });
module.exports = {
    mapSaveMapResourceEpic,
    _setFeatureEditPermission,
    _setThumbnail,
    _setStyleEditorPermission,
    updateMapLayoutEpic
};
