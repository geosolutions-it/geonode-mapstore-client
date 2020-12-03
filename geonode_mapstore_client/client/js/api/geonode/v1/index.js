/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';

/**
* Api for GeoNode v1
* @name api.geonode.v1
*/

/**
* Get resource by primary key
* @memberof api.geonode.v1
* @param {number|string} pk primary key
* @return {promise} it returns an object with requested resource
*/
export const getResourceByPk = (pk) => {
    const { endpointV1 = '/api' } = getConfigProp('geoNodeApi') || {};
    return axios.get(`${endpointV1}/base/${pk}`)
        // add pk as alias to id
        // used in save and save as for map
        .then(({ data }) => ({ pk: data.id, ...data }));
};

export const autocomplete = (params) => {
    const { endpointAutocomplete = '/base/autocomplete_response' } = getConfigProp('geoNodeApi') || {};
    return axios.get(endpointAutocomplete, { params })
        .then(({ data }) => {
            return {
                suggestions: (data?.results || [])
                    .map(({ id, text }) => {
                        return {
                            id,
                            label: text,
                            value: text
                        };
                    })
            };
        });
};

export const getUserInfo = () => {
    const { endpointV1 = '/api' } = getConfigProp('geoNodeApi') || {};
    return axios.get(`${endpointV1}/o/v4/userinfo`)
        .then(({ data }) => data);
};

export const getCategories = ({ q, ...params }) => {
    const { endpointV1 = '/api' } = getConfigProp('geoNodeApi') || {};
    return axios.get(`${endpointV1}/categories`, {
        params: {
            limit: 30,
            ...params,
            identifier__icontains: q
        }
    })
        .then(({ data }) => {
            return data?.objects || [];
        });
};

export const getKeywords = ({ q, ...params }) => {
    const { endpointV1 = '/api' } = getConfigProp('geoNodeApi') || {};
    return axios.get(`${endpointV1}/keywords`, {
        params: {
            limit: 30,
            ...params,
            slug__icontains: q
        }
    })
        .then(({ data }) => {
            return data?.objects || [];
        });
};

export const getRegions = ({ q, ...params }) => {
    const { endpointV1 = '/api' } = getConfigProp('geoNodeApi') || {};
    return axios.get(`${endpointV1}/regions`, {
        params: {
            limit: 30,
            ...params,
            name__icontains: q
        }
    })
        .then(({ data }) => {
            return data?.objects || [];
        });
};

export const getOwners = ({ q, ...params }) => {
    const { endpointV1 = '/api' } = getConfigProp('geoNodeApi') || {};
    return axios.get(`${endpointV1}/owners`, {
        params: {
            limit: 30,
            ...params,
            username__icontains: q
        }
    })
        .then(({ data }) => {
            return data?.objects || [];
        });
};

export default {
    getResourceByPk,
    getCategories,
    getKeywords,
    getRegions,
    getOwners
};
