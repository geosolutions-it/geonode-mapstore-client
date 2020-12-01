/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';
import {
    parseDevHostname,
    setRequestOptions,
    getRequestOptions
} from '@js/utils/APIUtils';
import isArray from 'lodash/isArray';
import castArray from 'lodash/castArray';

let endpoints = {
    // default values
    'base_resources': '/api/v2/base_resources',
    'maps': '/api/v2/maps',
    'geoapps': '/api/v2/geoapps',
    'geostories': '/api/v2/geostories',
    'documents': '/api/v2/documents'
};

const RESOURCES = 'base_resources';
const GEOAPPS = 'geoapps';
const GEOSTORIES = 'geostories';
// const GROUPS = 'groups';
// const LAYERS = 'layers';
const MAPS = 'maps';
const DOCUMENTS = 'documents';
// const USERS = 'users';

const requestOptions = (name, requestFunc) => {
    const options = getRequestOptions(name);
    if (!options) {
        return axios.options(parseDevHostname(endpoints[name]))
            .then(({ data }) => {
                setRequestOptions(name, data);
                return requestFunc(data);
            })
            .catch(() => {
                const error = { error: true };
                setRequestOptions(name, error);
                return requestFunc(error);
            });
    }
    return requestFunc(options);
};

export const setEndpoints = (data) => {
    endpoints = data;
};

export const getEndpoints = () => {
    return axios.get('/api/v2/')
        .then(({ data }) => {
            setEndpoints(data);
            return data;
        });
};

export const getResources = ({
    q,
    pageSize = 20,
    page = 1,
    sort,
    ...params
}) => {
    return requestOptions(RESOURCES, () => axios.get(parseDevHostname(endpoints[RESOURCES]), {
        params: {
            ...params,
            ...(sort && { sort: isArray(sort) ? sort : [ sort ]}),
            ...(q && {
                search: q,
                search_fields: ['title', 'abstract']
            }),
            page,
            page_size: pageSize
        }
    })
        .then(({ data }) => {
            return {
                isNextPageAvailable: !!data.links.next,
                resources: (data.resources || [])
                    .map((resource) => {
                        return resource;
                    })
            };
        }));
};

// some fields such as search_fields does not support the array notation `key[]=value1&key[]=value2`
// this function will parse all values included array in the `key=value1&key=value2` format
function addQueryString(requestUrl, params) {
    if (!params) {
        return requestUrl;
    }
    const queryString = Object.keys(params)
        .reduce((str, key, idx) => {
            const start = idx === 0 ? '?' : '&';
            const values = castArray(params[key]);
            if (values.length > 1) {
                return str + values.reduce((valStr, value, jdx) => {
                    return valStr + (jdx === 0 ? start : '&') + key + '=' + value;
                }, '');
            }
            return str + start + key + '=' + values[0];
        }, '');
    return `${requestUrl}${queryString}`;
}

export const getMaps = ({
    q,
    pageSize = 20,
    page = 1,
    sort,
    ...params
}) => {
    return requestOptions(MAPS, () => axios
        .get(
            parseDevHostname(
                addQueryString(endpoints[MAPS], q && {
                    search: q,
                    search_fields: ['title', 'abstract']
                })
            ), {
                // axios will format query params array to `key[]=value1&key[]=value2`
                params: {
                    ...params,
                    ...(sort && { sort: isArray(sort) ? sort : [ sort ]}),
                    page,
                    page_size: pageSize
                }
            })
        .then(({ data }) => {
            return {
                totalCount: data.total,
                isNextPageAvailable: !!data.links.next,
                resources: (data.maps || [])
                    .map((resource) => {
                        return resource;
                    })
            };
        }));
};

export const getDocumentsByDocType = (docType = 'image', {
    q,
    pageSize = 20,
    page = 1,
    sort,
    ...params
}) => {

    return requestOptions(MAPS, () => axios
        .get(
            parseDevHostname(
                addQueryString(endpoints[DOCUMENTS], q && {
                    search: q,
                    search_fields: ['title', 'abstract']
                })
            ), {
                // axios will format query params array to `key[]=value1&key[]=value2`
                params: {
                    ...params,
                    ...(sort && { sort: isArray(sort) ? sort : [ sort ]}),
                    'filter{doc_type}': [docType],
                    page,
                    page_size: pageSize
                }
            })
        .then(({ data }) => {
            return {
                totalCount: data.total,
                isNextPageAvailable: !!data.links.next,
                resources: (data.documents || [])
                    .map((resource) => {
                        return resource;
                    })
            };
        }));
};

export const getResourceByPk = (pk) => {
    return axios.get(parseDevHostname(`${endpoints[RESOURCES]}/${pk}`))
        .then(({ data }) => data.resource);
};

export const createGeoApp = (body) => {
    return axios.post(parseDevHostname(`${endpoints[GEOAPPS]}`), body, {
        params: {
            include: ['data']
        }
    })
        .then(({ data }) => data.resource);
};

export const createGeoStory = (body) => {
    return axios.post(parseDevHostname(`${endpoints[GEOSTORIES]}`), body, {
        params: {
            include: ['data']
        }
    })
        .then(({ data }) => data.geostory);
};

export const updateGeoStory = (pk, body) => {
    return axios.patch(parseDevHostname(`${endpoints[GEOSTORIES]}/${pk}`), body, {
        params: {
            include: ['data']
        }
    })
        .then(({ data }) => data.geostory);
};

export default {
    getEndpoints,
    getResources,
    getResourceByPk,
    createGeoApp,
    createGeoStory,
    updateGeoStory,
    getMaps,
    getDocumentsByDocType
};
