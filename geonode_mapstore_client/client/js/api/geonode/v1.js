/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';

export const autocomplete = (params) => {
    const geoNodeApi = getConfigProp('geoNodeApi') || {};
    return axios.get(geoNodeApi.autocomplete || '/base/autocomplete_response', { params })
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

export default {
    autocomplete
};
