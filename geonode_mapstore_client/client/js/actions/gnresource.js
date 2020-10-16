/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

export const RESOURCE_LOADING = 'GEONODE:RESOURCE_LOADING';
export const SET_RESOURCE = 'GEONODE:SET_RESOURCE';
export const RESOURCE_ERROR = 'GEONODE:RESOURCE_ERROR';
export const UPDATE_RESOURCE_PROPERTIES = 'GEONODE:UPDATE_RESOURCE_PROPERTIES';
export const SET_RESOURCE_TYPE = 'GEONODE:SET_RESOURCE_TYPE';
export const SET_NEW_RESOURCE = 'GEONODE:SET_NEW_RESOURCE';

export function resourceLoading() {
    return {
        type: RESOURCE_LOADING
    };
}

export function setResource(data) {
    return {
        type: SET_RESOURCE,
        data
    };
}

export function setResourceType(resourceType) {
    return {
        type: SET_RESOURCE_TYPE,
        resourceType
    };
}


export function resourceError(error) {
    return {
        type: RESOURCE_ERROR,
        error
    };
}

export function updateResourceProperties(properties) {
    return {
        type: UPDATE_RESOURCE_PROPERTIES,
        properties
    };
}

export function setNewResource() {
    return {
        type: SET_NEW_RESOURCE
    };
}
