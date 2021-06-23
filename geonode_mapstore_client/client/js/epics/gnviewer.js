/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import axios from '@mapstore/framework/libs/ajax';
import turfBbox from '@turf/bbox';
import uuid from "uuid";
import {
    REQUEST_LAYER_CONFIG,
    REQUEST_MAP_CONFIG,
    REQUEST_GEOSTORY_CONFIG,
    REQUEST_DOCUMENT_CONFIG,
    REQUEST_NEW_GEOSTORY_CONFIG,
    REQUEST_NEW_MAP_CONFIG
} from '@js/actions/gnviewer';
import { getBaseMapConfiguration, getNewGeoStoryConfig } from '@js/api/geonode/config';
import {
    getLayerByPk,
    getGeoStoryByPk,
    getDocumentByPk,
    getResourceByPk
} from '@js/api/geonode/v2';
import { error as errorNotification } from '@mapstore/framework/actions/notifications';
import { getMapStoreMapById } from '@js/api/geonode/adapter';
import { configureMap } from '@mapstore/framework/actions/config';
import { zoomToExtent } from '@mapstore/framework/actions/map';
import {
    browseData,
    selectNode,
    showSettings
} from '@mapstore/framework/actions/layers';
import { toggleStyleEditor } from '@mapstore/framework/actions/styleeditor';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import {
    // setResourcePermissions,
    setNewResource,
    setResourceType,
    setResourceId,
    setResource
} from '@js/actions/gnresource';

import {
    setCurrentStory,
    setResource as setGeoStoryResource, setEditing
} from '@mapstore/framework/actions/geostory';

import { setControlProperty } from '@mapstore/framework/actions/controls';

export const gnViewerRequestLayerConfig = (action$) =>
    action$.ofType(REQUEST_LAYER_CONFIG)
        .switchMap(({ pk, page }) => {
            return Observable.defer(() => axios.all([
                getBaseMapConfiguration(),
                getLayerByPk(pk)
            ])).switchMap((response) => {
                const [mapConfig, gnLayer] = response;
                const geoserverUrl = getConfigProp('geoserverUrl') || '/geoserver/';
                const extent = turfBbox({
                    type: 'Feature',
                    properties: {},
                    geometry: gnLayer.ll_bbox_polygon
                });
                const [minx, miny, maxx, maxy] = extent;
                const bbox = {
                    crs: 'EPSG:4326',
                    bounds: { minx, miny, maxx, maxy }
                };
                const newLayer = {
                    perms: gnLayer.perms,
                    id: `pk:${gnLayer.pk}`,
                    pk: gnLayer.pk,
                    type: 'wms',
                    name: `${gnLayer.workspace}:${gnLayer.name}`,
                    url: `${geoserverUrl}ows`,
                    format: 'image/png',
                    ...(gnLayer.storeType === 'vector' && {
                        search: {
                            type: 'wfs',
                            url: `/gs/ows`
                        }
                    }),
                    bbox,
                    ...(gnLayer.featureinfo_custom_template && {
                        featureInfo: {
                            format: 'TEMPLATE',
                            template: gnLayer.featureinfo_custom_template
                        }
                    }),
                    style: '',
                    title: gnLayer.title,
                    visibility: true
                };
                return Observable.of(
                    configureMap({
                        ...mapConfig,
                        map: {
                            ...mapConfig.map,
                            layers: [
                                ...mapConfig.map.layers,
                                newLayer
                            ]
                        }
                    }),
                    zoomToExtent(extent, 'EPSG:4326'),
                    setResource(gnLayer),
                    setResourceId(pk),
                    ...(page === 'layer_edit_data_viewer'
                        ? [
                            selectNode(newLayer.id, 'layer', false),
                            browseData(newLayer)
                        ]
                        : []),
                    ...(page === 'layer_edit_style_viewer'
                        ? [
                            selectNode(newLayer.id, 'layer', false),
                            showSettings(newLayer.id, 'layer', {
                                opacity: newLayer.opacity || 1
                            }),
                            setControlProperty('layersettings', 'activeTab', 'style'),
                            toggleStyleEditor(null, true)
                        ]
                        : [])
                );
            }).catch(() => {
                // TODO: implement various error cases
                return Observable.empty();
            });
        });

export const gnViewerRequestMapConfig = (action$) =>
    action$.ofType(REQUEST_MAP_CONFIG)
        .switchMap(({ pk }) => {
            return Observable.defer(() => axios.all([
                getMapStoreMapById(pk),
                getResourceByPk(pk)
            ])).switchMap((response) => {
                const [adapterMap, resource] = response;
                return Observable.of(
                    configureMap(adapterMap.data),
                    setResource(resource),
                    setResourceId(pk),
                    setResourceType('map')
                );
            }).catch(() => {
                // TODO: implement various error cases
                return Observable.empty();
            });
        });

export const gnViewerRequestNewMapConfig = (action$) =>
    action$.ofType(REQUEST_NEW_MAP_CONFIG)
        .switchMap(() => {
            return Observable.defer(getBaseMapConfiguration
            ).switchMap((response) => {
                return Observable.of(configureMap(response));
            }).catch(() => {
                // TODO: implement various error cases
                return Observable.empty();
            });
        });

export const gnViewerRequestGeoStoryConfig = (action$) =>
    action$.ofType(REQUEST_GEOSTORY_CONFIG)
        .switchMap(({ pk }) => {
            return Observable.defer(() => axios.all([
                getGeoStoryByPk(pk)
            ])).switchMap((response) => {
                const [gnGeoStory] = response;
                const { data, ...resource } = gnGeoStory;
                return Observable.of(
                    setCurrentStory(data),
                    setResource(resource),
                    setResourceId(pk),
                    setResourceType('geostory'),
                    setGeoStoryResource({
                        canEdit: resource?.perms?.includes('change_resourcebase')
                    })
                );
            }).catch(() => {
                // TODO: implement various error cases
                return Observable.empty();
            });
        });
export const gnViewerRequestNewGeoStoryConfig = (action$, { getState = () => {}}) =>
    action$.ofType(REQUEST_NEW_GEOSTORY_CONFIG)
        .switchMap(() => {
            const canAddResource = getState()?.security?.user?.perms?.includes('add_resource');
            if (!canAddResource) {
                return Observable.of(
                    setGeoStoryResource({
                        canEdit: false
                    }),
                    errorNotification({title: "geostory.errors.loading.title", message: "viewer.errors.noPermissions"})
                );
            }
            return Observable.defer(() => getNewGeoStoryConfig())
                .switchMap((gnGeoStory) => {
                    return Observable.of(
                        setNewResource(),
                        setCurrentStory({...gnGeoStory, sections: [{...gnGeoStory.sections[0], id: uuid(),
                            contents: [{...gnGeoStory.sections[0].contents[0], id: uuid()}]}]}),
                        setResourceType('geostory'),
                        setEditing(true),
                        setGeoStoryResource({
                            canEdit: true
                        })
                    );
                }).catch(() => {
                    return Observable.empty();
                });
        });
export const gnViewerRequestDocumentConfig = (action$) =>
    action$.ofType(REQUEST_DOCUMENT_CONFIG)
        .switchMap(({ pk }) => {
            return Observable.defer(() => axios.all([
                getDocumentByPk(pk)
            ])).switchMap((response) => {
                const [gnDocument] = response;
                return Observable.of(
                    setResource(gnDocument),
                    setResourceId(pk)
                );
            }).catch(() => {
                // TODO: implement various error cases
                return Observable.empty();
            });
        });

export default {
    gnViewerRequestLayerConfig,
    gnViewerRequestMapConfig,
    gnViewerRequestNewMapConfig,
    gnViewerRequestGeoStoryConfig,
    gnViewerRequestDocumentConfig,
    gnViewerRequestNewGeoStoryConfig
};
