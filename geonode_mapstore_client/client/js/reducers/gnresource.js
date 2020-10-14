/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import {
    RESOURCE_LOADING,
    SET_RESOURCE,
    RESOURCE_ERROR,
    UPDATE_RESOURCE_PROPERTIES
} from '@js/actions/gnresource';

function gnresource(state = {}, action) {
    switch (action.type) {
    case RESOURCE_LOADING: {
        return {
            ...state,
            loading: true
        };
    }
    case SET_RESOURCE: {
        return {
            ...state,
            error: null,
            data: action.data,
            loading: false
        };
    }
    case RESOURCE_ERROR: {
        return {
            ...state,
            data: null,
            error: action.error,
            loading: false
        };
    }
    case UPDATE_RESOURCE_PROPERTIES: {
        return {
            ...state,
            data: {
                ...state.data,
                ...action.properties
            }
        };
    }
    default:
        return state;
    }
}

export default gnresource;
