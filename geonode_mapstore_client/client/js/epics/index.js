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

module.exports = {
    mapSaveMapResourceEpic,
    _setFeatureEditPermission

};
