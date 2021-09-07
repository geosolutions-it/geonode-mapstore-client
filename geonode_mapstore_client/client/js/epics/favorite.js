/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import {
    resourceError,
    updateResourceProperties,
    SET_FAVORITE_RESOURCE
} from '@js/actions/gnresource';
import {
    updateResources
} from '@js/actions/gnsearch';
import {
    setFavoriteResource
} from '@js/api/geonode/v2';

export const gnSaveFavoriteContent = (action$, store) =>
    action$.ofType(SET_FAVORITE_RESOURCE)
        .switchMap((action) => {
            const state = store.getState();
            const pk = state?.gnresource?.data.pk;
            const isFavoriteList = (state?.gnsearch?.params?.f === 'favorite') ? true : false;
            const resource =  state?.gnresource?.data;
            const favorite =  action.favorite;
            const resources = store.getState().gnsearch?.resources || [];
            return Observable
                .defer(() => setFavoriteResource(pk, favorite))
                .switchMap(() => {
                    const newResources = (resources.some(item => item.pk === resource.pk)) ?
                        resources.filter((item) => item.pk !== resource.pk)
                        : [...resources, resource];

                    return Observable.of(
                        updateResourceProperties({
                            'favorite': favorite
                        }),
                        isFavoriteList && updateResources(newResources, true)

                    );

                })
                .catch((error) => {
                    return Observable.of(resourceError(error.data || error.message));
                });

        });


export default {
    gnSaveFavoriteContent
};
