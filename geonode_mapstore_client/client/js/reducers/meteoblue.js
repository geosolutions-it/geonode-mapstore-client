/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isNil, find } from 'lodash';

import {
    SET_MAP_CLICK,
    METEOBLUE_CONFIG_LOADED,
    SET_DOCK_SIZE,
    SET_CHART,
    UPDATE_CHART,
    SET_CHART_PROPERTY,
    LOADING
} from '../actions/meteoblue';

import { set } from '../../MapStore2/web/client/utils/ImmutableUtils';

export default (state = {}, action) => {
    switch(action.type) {
    case SET_MAP_CLICK: {
        return {
            ...state,
            mapClickEnabled: action.enable
        };
    }
    case METEOBLUE_CONFIG_LOADED: {
        return {
            ...state,
            config: action.config,
            configLoaded: true
        };
    }
    case SET_DOCK_SIZE: {
        return {
            ...state,
            dockSize: action.size
        };
    }
    case SET_CHART: {
        return {
            ...state,
            charts: {
                ...(state.charts || {}),
                [action.chartName]: action.chartObj
            }
        };
    }
    case UPDATE_CHART: {
        const oldChart = state.charts?.[action.chartName];
        const newChart = isNil(action.updateObj) ?
            oldChart : {
                ...(oldChart || {}),
                ...action.updateObj,
                figure: {
                    ...(oldChart?.figure || {}),
                    ...(action.updateObj.figure || {})
                }
            };
        const timeWindow = !isNil(newChart?.timeWindows) && !isNil(newChart?.currentTimeWindow) ?
            find(newChart.timeWindows, { name: newChart.currentTimeWindow }) :
            null;
        const newChartWithNewTW = !isNil(newChart?.currentTimeWindow) && !isNil(oldChart?.currentTimeWindow) && !isNil(timeWindow) && newChart?.currentTimeWindow !== oldChart?.currentTimeWindow ?
            set('figure.layout.xaxis.autorange', false, set('figure.layout.xaxis.range', [timeWindow.start, timeWindow.end], newChart)) :
            newChart;

        return {
            ...state,
            charts: {
                ...(state.charts || {}),
                [action.chartName]: newChartWithNewTW
            }
        };
    }
    case SET_CHART_PROPERTY: {
        return {
            ...state,
            charts: {
                ...(state.charts || {}),
                [action.chartName]: set(action.propName, action.propValue, state.charts?.[action.chartName])
            }
        };
    }
    case LOADING: {
        // anyway sets loading to true
        return {
            ...state,
            loadFlags: {
                ...(state.loadFlags || {}),
                ...(action.name !== 'loading' ? {[action.name]: action.value} : {})
            },
            loading: action.value
        };
    }
    default:
        return state;
    }
};
