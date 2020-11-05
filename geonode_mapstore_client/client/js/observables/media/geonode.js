/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Observable } from 'rxjs';
import {
    getMaps,
    getDocumentsByDocType
} from '@js/api/geonode/v2';
import { getMapStoreMapById } from '@js/api/geonode/adapter';
import { currentResourcesSelector, selectedIdSelector } from '@mapstore/framework/selectors/mediaEditor';
import { excludeGoogleBackground, extractTileMatrixFromSources } from '@mapstore/framework/utils/LayersUtils';
import { convertFromLegacy, normalizeConfig } from '@mapstore/framework/utils/ConfigUtils';

export const save = () => Observable.empty();
export const edit = () => Observable.empty();
export const remove = () => Observable.empty();

function parseMapConfig({ data, attributes, user, id }, resource) {
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
        thumbnail: metadata.thumbnail || resource?.data?.thumbnail,
        type: 'map'
    };
}

function getImageDimensions(src) {
    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
            resolve({
                imgWidth: img.naturalWidth,
                imgHeight: img.naturalHeight
            });
        };
        img.onerror = () => {
            resolve({});
        };
        img.src = src;
    });
}

const loadMediaList = {
    image: ({
        page,
        pageSize,
        q,
        currentResources,
        selectedId
    }) => getDocumentsByDocType('image', {
        page,
        pageSize,
        q
    })
        .then((response) => {
            const totalCount = response.totalCount || 0;
            const newResources = response.resources.map((resource) => ({
                id: resource.pk,
                type: 'image',
                data: {
                    thumbnail: resource.thumbnail_url,
                    src: resource.doc_file,
                    title: resource.title,
                    description: resource.abstract,
                    alt: resource.alternate,
                    credits: resource.attribution
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
                return getImageDimensions(selectedResource.data.src)
                    .then((dimensions) => {
                        return {
                            resources: resources.map((resource) => selectedId && resource.id === selectedId
                                ? {
                                    ...resource,
                                    data: {
                                        ...resource.data,
                                        ...dimensions
                                    }
                                }
                                : resource),
                            totalCount
                        };
                    });
            }
            return {
                resources,
                totalCount
            };
        }),
    video: ({
        page,
        pageSize,
        q,
        currentResources
    }) => getDocumentsByDocType('video', {
        page,
        pageSize,
        q
    })
        .then((response) => {
            const totalCount = response.totalCount || 0;
            const newResources = response.resources.map((resource) => ({
                id: resource.pk,
                type: 'video',
                data: {
                    thumbnail: resource.thumbnail_url,
                    src: resource.doc_file,
                    title: resource.title,
                    description: resource.abstract,
                    credits: resource.attribution
                }
            }));

            const resources = [
                ...currentResources,
                ...newResources
            ];
            return {
                resources,
                totalCount
            };
        }),
    map: ({
        page,
        pageSize,
        q,
        currentResources,
        selectedId
    }) => getMaps({
        page,
        pageSize,
        q
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
                                data: parseMapConfig(mapResponse, resource)
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
};

export const load = (store, { params, mediaType }) => {
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
    const mediaListRequest = loadMediaList[mediaType];
    return Observable.defer(() => mediaListRequest({
        page,
        pageSize,
        q: params.q,
        currentResources,
        selectedId
    })
        .then(response => response)
        .catch(() => {
            return emptyResponse;
        }));
};

export const getData = (store, { selectedItem }) => {

    if (!selectedItem) {
        return Observable.of(null);
    }

    if (selectedItem.type === 'image'
    && selectedItem.data.src
    && !(selectedItem.data.imgWidth && selectedItem.data.imgHeight)) {
        return Observable.defer(() =>
            getImageDimensions(selectedItem.data.src)
                .then((dimensions) => ({
                    ...selectedItem.data,
                    ...dimensions
                }))
        );
    }

    if (selectedItem.type === 'map'
    && selectedItem.data && selectedItem.data.id) {
        return Observable.defer(() => getMapStoreMapById(selectedItem.data.id)
            .then((response) => {
                return parseMapConfig(response, selectedItem);
            }));
    }

    return Observable.of(null);
};
