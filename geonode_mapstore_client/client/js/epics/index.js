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
const {get} = require("lodash");
const {SELECT_NODE} = require("../../MapStore2/web/client/actions/layers");
const {setPermission, SET_PERMISSION} = require("../../MapStore2/web/client/actions/featuregrid");
const {setEditPermissionStyleEditor} = require("../../MapStore2/web/client/actions/styleeditor")
const {layerEditPermissions, updateThumb} = require("../api/geonode");
const {getSelectedLayer, layersSelector} = require("../../MapStore2/web/client/selectors/layers");
const {mapSelector} = require("../../MapStore2/web/client/selectors/map");
const ConfigUtils = require("../../MapStore2/web/client/utils/ConfigUtils");
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
module.exports = {
    mapSaveMapResourceEpic,
    _setFeatureEditPermission,
    _setThumbnail,
    _setStyleEditorPermission

};
