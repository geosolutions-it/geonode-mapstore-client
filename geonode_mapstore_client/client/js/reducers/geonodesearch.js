/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isNil from 'lodash/isNil';

import {
    UPDATE_SUGGESTIONS,
    LOADING_SUGGESTIONS,
    SEARCH_RESOURCES,
    UPDATE_RESOURCES,
    LOADING_RESOURCES,
    SELECT_RESOURCE,
    UPDATE_RESOURCES_METADATA
} from '@js/actions/geonodesearch';

function geoNodeSearch(state = {
    resources: [],
    params: {},
    previousParams: {}
}, action) {
    switch (action.type) {
    case UPDATE_SUGGESTIONS: {
        return {
            ...state,
            suggestions: action.suggestions
        };
    }
    case LOADING_SUGGESTIONS: {
        return {
            ...state,
            loading: action.loading
        };
    }
    case SEARCH_RESOURCES: {
        return {
            ...state,
            nextParams: action.params
        };
    }
    case UPDATE_RESOURCES: {
        return {
            ...state,
            resources: action.reset
                ? [ ...action.resources ]
                : [
                    ...state.resources,
                    ...action.resources
                ]
        };
    }
    case UPDATE_RESOURCES_METADATA: {
        return {
            ...state,
            isNextPageAvailable: action.metadata.isNextPageAvailable,
            ...(action.metadata.params &&
                {
                    params: action.metadata.params,
                    previousParams: state.params,
                    nextParams: null
                }),
            ...(!isNil(action.metadata.locationSearch) &&
                {
                    locationSearch: action.metadata.locationSearch
                }),
            ...(!isNil(action.metadata.locationPathname) &&
                {
                    locationPathname: action.metadata.locationPathname
                })
        };
    }
    case LOADING_RESOURCES: {
        return {
            ...state,
            loading: action.loading
        };
    }
    case SELECT_RESOURCE: {
        return {
            ...state,
            selectedResource: action.resource
        };
    }
    default:
        return state;
    }
}

export default geoNodeSearch;
