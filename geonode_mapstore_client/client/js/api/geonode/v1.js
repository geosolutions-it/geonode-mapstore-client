/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'mapstore/framework/libs/ajax';
// import { getConfigProp } from 'mapstore/framework/utils/ConfigUtils';

export const autocomplete = (params) => {
    return axios.get('/base/autocomplete_response', { params })
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

export const search = ({
    q,
    pageSize = 20,
    page = 0,
    ...params
}) => {
    // return axios.get('/api/v2/search', { params })
    return axios.get('/api/base/', {
        params: {
            ...params,
            limit: pageSize,
            offset: page * pageSize,
            title__icontains: q
        }
    })
        .then(({ data }) => {
            console.log(data);
            return {
                resources: (data?.objects || [])
                    .map((resource) => {
                        return resource;
                    })
            };
        });
};

export default {
    autocomplete,
    search
};
