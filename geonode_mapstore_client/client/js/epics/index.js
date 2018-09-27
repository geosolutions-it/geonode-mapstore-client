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
const {setPermission} = require("../../MapStore2/web/client/actions/featuregrid");
const {layerEditPermissions} = require("../api/geonode");
const {getSelectedLayer} = require("../../MapStore2/web/client/selectors/layers");
const ConfigUtils = require("../../MapStore2/web/client/utils/ConfigUtils");
// const {basicError} = require('../../MapStore2/web/client/utils/NotificationUtils');
/**
 * We need to include missing epics. The plugins that normally include this epic is not used.
 */
const {mapSaveMapResourceEpic} = require("../../MapStore2/web/client/epics/maps");
/**
 *  Geonode doesn't use mapstore routing system. Ms2 router emit the first route changed action
 *  after map config is already loaded, so we need to prevents widgets clear action.
 */
const clearWidgetsOnLocationChange = () => Rx.Observable.empty();

const _setFeatureEditPermission = (action$, {getState} = {}) =>
    action$.ofType(SELECT_NODE).filter(({nodeType}) => nodeType === "layer" && !ConfigUtils.getConfigProp("disableCheckEditPermissions"))
        .switchMap(() => {
            const layer = getSelectedLayer(getState() || {});
            return layer ? layerEditPermissions(layer)
                            .map(permissions => setPermission(permissions))
                            .startWith(setPermission({canEdit: false})).catch(() => Rx.Observable.empty()) : Rx.Observable.of(setPermission({canEdit: false}));
        });

module.exports = {
    mapSaveMapResourceEpic,
    clearWidgetsOnLocationChange,
    _setFeatureEditPermission

};
