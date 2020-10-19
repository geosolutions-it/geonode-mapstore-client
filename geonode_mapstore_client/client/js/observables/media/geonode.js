/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Observable } from 'rxjs';
import { getMaps } from '@js/api/geonode/v2';
import { getMapStoreMapById } from '@js/api/geonode/adapter';
import { currentResourcesSelector, selectedIdSelector } from '@mapstore/framework/selectors/mediaEditor';
import { excludeGoogleBackground, extractTileMatrixFromSources } from '@mapstore/framework/utils/LayersUtils';
import { convertFromLegacy, normalizeConfig } from '@mapstore/framework/utils/ConfigUtils';

export const save = () => Observable.empty();
export const edit = () => Observable.empty();
export const remove = () => Observable.empty();

function parseMapConfig({ data, attributes, user, id }) {
    const metadata = attributes.reduce((acc, attribute) => ({
        ...acc,
        [attribute.name]: attribute.value
    }), { });

    const config = data;
    const mapState = !config.version
        ? convertFromLegacy(config)
        : normalizeConfig(config.map);

    const layers = excludeGoogleBackground(mapState.layers.map(layer => {
        if (layer.group === 'background' && (layer.type === 'ol' || layer.type === 'OpenLayers.Layer')) {
            layer.type = 'empty';
        }
        return layer;
    }));

    const map = {
        ...(mapState && mapState.map || {}),
        id,
        groups: mapState && mapState.groups || [],
        layers: mapState?.map?.sources
            ? layers.map(layer => {
                const tileMatrix = extractTileMatrixFromSources(mapState.map.sources, layer);
                return { ...layer, ...tileMatrix };
            })
            : layers
    };

    return {
        ...map,
        id,
        owner: user,
        canCopy: true,
        canDelete: true,
        canEdit: true,
        name: metadata.title,
        description: metadata.abstract,
        thumbnail: metadata.thumbnail,
        type: 'map'
    };
}

export const load = (store, { params }) => {
    const state = store.getState();
    const selectedId = selectedIdSelector(state);
    const { page, pageSize } = params;
    const currentResources = page === 1
        ? []
        : currentResourcesSelector(state) || [];
    const emptyResponse = {
        resources: [],
        totalCount: 0
    };
    return Observable.defer(() => getMaps({
        page,
        pageSize,
        q: params.q
    })
        .then((response) => {
            const totalCount = response.totalCount || 0;
            const newResources = response.resources.map((resource) => ({
                id: resource.pk,
                type: 'map',
                data: {
                    thumbnail: resource.thumbnail_url,
                    title: resource.title,
                    description: resource.abstract,
                    id: resource.pk
                }
            }));
            const resources = [
                ...currentResources,
                ...newResources
            ];
            const selectedResource = newResources.find((resource) => resource.id === selectedId);
            if (selectedResource) {
                // get resource data when it's selected
                // this will allow to preview the map and retrieve the correct data
                return getMapStoreMapById(selectedResource.id)
                    .then((mapResponse) => ({
                        resources: resources.map((resource) => selectedId && resource.id === selectedId
                            ? {
                                ...resource,
                                data: parseMapConfig(mapResponse)
                            }
                            : resource),
                        totalCount
                    }))
                    .catch(() => ({
                        resources,
                        totalCount
                    }));
            }
            return {
                resources,
                totalCount
            };
        })
        .catch(() => {
            return emptyResponse;
        }));
};

export const getData = (store, { selectedItem }) => {
    if (selectedItem && selectedItem.type === 'map' && selectedItem.data && selectedItem.data.id) {
        return Observable.defer(() => getMapStoreMapById(selectedItem.data.id)
            .then((response) => {
                return parseMapConfig(response);
            }));
    }

    return Observable.of(null);
};
