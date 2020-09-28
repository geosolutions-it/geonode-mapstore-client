/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import isArray from 'lodash/isArray';
import { setRequestOptions, getRequestOptions } from '@js/utils/GNSearchUtils';
let endpoints = {};

const RESOURCES = 'base_resources';
// const GROUPS = 'groups';
// const LAYERS = 'layers';
// const MAPS = 'maps';
// const USERS = 'users';

const requestOptions = (name, requestFunc) => {
    const options = getRequestOptions(name);
    if (!options) {
        return axios.options(endpoints[name])
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

export const getConfiguration = (configUrl) => {
    return axios.get(configUrl)
        .then(({ data }) => {
            return data;
        });
};

export const getEndpoints = () => {
    const { endpointV2 = '/api/v2/' } = getConfigProp('geoNodeApi') || {};
    return axios.get(endpointV2)
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
    return requestOptions(RESOURCES, () => axios.get(endpoints[RESOURCES], {
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

export const getResourceByPk = (pk) => {
    return axios.get(`${endpoints[RESOURCES]}/${pk}`)
        .then(({ data }) => data.resource);
};

export default {
    getResources,
    getResourceByPk,
    getConfiguration
};
