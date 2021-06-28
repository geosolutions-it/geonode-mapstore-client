/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import turfBbox from '@turf/bbox';
import uuid from 'uuid';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';

function getExtentFromResource({ ll_bbox_polygon: llBboxPolygon }) {
    if (!llBboxPolygon) {
        return null;
    }
    const extent = turfBbox({
        type: 'Feature',
        properties: {},
        geometry: llBboxPolygon
    });
    const [minx, miny, maxx, maxy] = extent;
    const bbox = {
        crs: 'EPSG:4326',
        bounds: { minx, miny, maxx, maxy }
    };
    return bbox;
}

/**
* convert resource layer configuration to a mapstore layer object
* @memberof MenuUtils
* @param {object} resource geonode layer resource
* @return {object}
*/
export const resourceToLayerConfig = (resource) => {

    const {
        alternate,
        links = [],
        featureinfo_custom_template: template,
        title
    } = resource;

    const bbox = getExtentFromResource(resource);

    const { url: wfsUrl } = links.find(({ link_type: linkType }) => linkType === 'OGC:WFS') || {};
    const { url } = links.find(({ link_type: linkType }) => linkType === 'OGC:WMS') || {};

    const format = getConfigProp('defaultLayerFormat') || 'image/png';
    return {
        perms: resource.perms,
        id: uuid(),
        pk: resource.pk,
        type: 'wms',
        name: alternate,
        url,
        format,
        ...(wfsUrl && {
            search: {
                type: 'wfs',
                url: wfsUrl
            }
        }),
        ...(bbox && { bbox }),
        ...(template && {
            featureInfo: {
                format: 'TEMPLATE',
                template
            }
        }),
        style: '',
        title,
        visibility: true
    };
};
