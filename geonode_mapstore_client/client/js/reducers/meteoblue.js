/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
    SET_MAP_CLICK,
    SET_DOCK_SIZE
} from '../actions/meteoblue';

export default (state = {}, action) => {
    switch(action.type) {
    case SET_MAP_CLICK:
        return {
            ...state,
            mapClickEnabled: action.enable
        };
    case SET_DOCK_SIZE: {
        return {
            ...state,
            dockSize: action.size
        };
    }
    default:
        return state;
    }
};
