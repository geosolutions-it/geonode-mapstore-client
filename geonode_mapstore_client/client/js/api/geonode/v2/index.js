/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';
import { parseDevHostname } from '@js/utils/APIUtils';

let endpoints = {
    'base_resources': '/api/v2/base_resources'
};

const RESOURCES = 'base_resources';
// const GROUPS = 'groups';
// const LAYERS = 'layers';
// const MAPS = 'maps';
// const USERS = 'users';

export const getResourceByPk = (pk) => {
    return axios.get(parseDevHostname(`${endpoints[RESOURCES]}/${pk}`))
        .then(({ data }) => data.resource);
};

export default {
    getResourceByPk
};
