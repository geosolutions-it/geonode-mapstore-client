/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

export const SAVING_RESOURCE = 'GEONODE:SAVING_RESOURCE';
export const SAVE_SUCCESS = 'GEONODE:SAVE_SUCCESS';
export const SAVE_ERROR = 'GEONODE:SAVE_ERROR';
export const CLEAR_SAVE = 'GEONODE:CLEAR_SAVE';
export const SAVE_CONTENT = 'GEONODE:SAVE_CONTENT';
export const UPDATE_RESOURCE_BEFORE_SAVE = 'GEONODE:UPDATE_RESOURCE_BEFORE_SAVE';

export function savingResource() {
    return {
        type: SAVING_RESOURCE
    };
}

export function saveSuccess(success) {
    return {
        type: SAVE_SUCCESS,
        success
    };
}

export function saveError(error) {
    return {
        type: SAVE_ERROR,
        error
    };
}

export function clearSave(error) {
    return {
        type: CLEAR_SAVE,
        error
    };
}

export function saveContent(metadata, id) {
    return {
        type: SAVE_CONTENT,
        metadata,
        id
    };
}

export function updateResourceBeforeSave(id) {
    return {
        type: UPDATE_RESOURCE_BEFORE_SAVE,
        id
    };
}

