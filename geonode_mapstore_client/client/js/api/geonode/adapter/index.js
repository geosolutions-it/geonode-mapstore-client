/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import { parseDevHostname } from '@js/utils/APIUtils';

export const creatMapStoreMap = (body = {}) => {
    const baseUrl = getConfigProp('genode_rest_api') || '/mapstore/rest/';
    return axios.post(parseDevHostname(`${baseUrl}resources/`),
        body,
        {
            timeout: 10000,
            params: {
                full: true
            }
        })
        .then(({ data }) => data);
};

export const updateMapStoreMap = (id, body = {}) => {
    const baseUrl = getConfigProp('genode_rest_api') || '/mapstore/rest/';
    return axios.patch(parseDevHostname(`${baseUrl}resources/${id}/`),
        body,
        {
            params: {
                full: true
            }
        })
        .then(({ data }) => data);
};

export const getMapStoreMapById = (id) => {
    const baseUrl = getConfigProp('genode_rest_api') || '/mapstore/rest/';
    return axios.get(parseDevHostname(`${baseUrl}resources/${id}/`),
        {
            params: {
                full: true
            }
        })
        .then(({ data }) => data);
};

export default {
    creatMapStoreMap,
    getMapStoreMapById
};
