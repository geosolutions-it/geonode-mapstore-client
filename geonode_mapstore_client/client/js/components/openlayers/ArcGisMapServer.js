/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const Layers = require('../../../MapStore2/web/client/utils/openlayers/Layers');
const ol = require('openlayers');
Layers.registerType('arcgis', {
    create: (options) => {
        return new ol.layer.Tile({
            opacity: options.opacity !== undefined ? options.opacity : 1,
            visible: options.visibility !== false,
            zIndex: options.zIndex,
            source: new ol.source.TileArcGISRest({
            params: {LAYERS: `show:${parseInt(options.name || 0, 10)}`},
            url: options.url
            })
        });
    }
});
