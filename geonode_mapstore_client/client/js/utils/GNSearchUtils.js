/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

let requestOptions = {};

let defaultPageSize = 20;

export const getPageSize = () => defaultPageSize;
export const setRequestOptions = (name, options) => { requestOptions[name] = options; };
export const getRequestOptions = name => requestOptions[name];

export default {
    setRequestOptions,
    getRequestOptions
};
