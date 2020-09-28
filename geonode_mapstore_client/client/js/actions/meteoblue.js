/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const SET_MAP_CLICK = 'METEOBLUE:SET_MAP_CLICK';
export const SET_DOCK_SIZE = 'METEOBLUE:SET_DOCK_SIZE';

export const setMapClick = enable => ({
    type: SET_MAP_CLICK,
    enable
});

export const setDockSize = size => ({
    type: SET_DOCK_SIZE,
    size
});
