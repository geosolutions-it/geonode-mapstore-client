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
import { currentResourcesSelector } from '@mapstore/framework/selectors/mediaEditor';
import uuid from 'uuid';

export const save = () => Observable.empty();

export const edit = () => Observable.empty();

export const load = (store, { params }) => {
    const resources = currentResourcesSelector(store.getState()) || [];
    const { page, pageSize } = params;
    const currentResources = page === 1
        ? []
        : resources;
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
            return {
                resources: [
                    ...currentResources,
                    ...response.resources.map((resource) => ({
                        id: uuid(),
                        type: 'map',
                        data: {
                            thumbnail: resource.thumbnail_url,
                            title: resource.title,
                            description: resource.abstract,
                            id: resource.pk
                        }
                    }))
                ],
                totalCount: response.totalCount || 0
            };
        })
        .catch(() => {
            return emptyResponse;
        }));
};

export const remove = () => Observable.empty();

export const getData = (store, { selectedItem }) => {

    if (selectedItem.type === 'map' && selectedItem.data.id) {
        return Observable.defer(() => getMapStoreMapById(selectedItem.data.id)
            .then(({ data, attributes, user, id }) => {
                // TODO: check geostory map configuration parsing
                const metadata = attributes.reduce((acc, attribute) => ({
                    ...acc,
                    [attribute.name]: attribute.value
                }), { });
                return {
                    ...data.map,
                    id,
                    owner: user,
                    canCopy: true,
                    canDelete: true,
                    canEdit: true,
                    name: metadata.title,
                    description: metadata.abstract,
                    thumbnail: metadata.thumbnail
                };
            }));
    }

    return Observable.of(null);
};
