/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';
import { parseDevHostname } from '@js/utils/APIUtils';
import { setRequestOptions, getRequestOptions } from '@js/utils/GNSearchUtils';
import isArray from 'lodash/isArray';

let endpoints = {
    // default values
    'base_resources': '/api/v2/base_resources',
    'maps': '/api/v2/maps',
    'geoapps': '/api/v2/geoapps',
    'geostories': '/api/v2/geostories'
};

const RESOURCES = 'base_resources';
const GEOAPPS = 'geoapps';
const GEOSTORIES = 'geostories';
// const GROUPS = 'groups';
// const LAYERS = 'layers';
const MAPS = 'maps';
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

export const getMaps = ({
    q,
    pageSize = 20,
    page = 1,
    sort,
    ...params
}) => {
    return requestOptions(MAPS, () => axios.get(parseDevHostname(endpoints[MAPS]), {
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
                totalCount: data.total,
                isNextPageAvailable: !!data.links.next,
                resources: (data.maps || [])
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
    updateGeoStory
};
