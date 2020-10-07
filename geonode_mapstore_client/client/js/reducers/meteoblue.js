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
    SET_DOCK_SIZE,
    SET_CHART,
    UPDATE_CHART,
    SET_CHART_PROPERTY,
    LOADING
} from '../actions/meteoblue';

import { getBaseConfig } from '../utils/ChartUtils';
import { set } from '../../MapStore2/web/client/utils/ImmutableUtils';

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
        const newChart = isNil(action.updateObj) ? oldChart : {...(oldChart || {}), ...action.updateObj};
        const timeWindow = !isNil(newChart?.timeWindows) && !isNil(newChart?.currentTimeWindow) ?
            find(newChart.timeWindows, { name: newChart.currentTimeWindow }) :
            null;
        const newChartWithNewTW = !isNil(newChart?.currentTimeWindow) && !isNil(oldChart?.currentTimeWindow) && !isNil(timeWindow) && newChart?.currentTimeWindow !== oldChart?.currentTimeWindow ?
            set('figure.layout.xaxis.autorange', false, set('figure.layout.xaxis.range', [timeWindow.start, timeWindow.end], newChart)) :
            newChart;
        const oldTimeRange = oldChart?.figure?.layout?.xaxis?.range;
        const timeRange = newChartWithNewTW?.figure?.layout?.xaxis?.range;
        const newChartWithNewConfig = !isNil(timeRange) && (isNil(oldTimeRange) || timeRange[0] !== oldTimeRange[0] || timeRange[1] !== oldTimeRange[1]) ?
            set('figure.config', {
                ...newChartWithNewTW.figure.config,
                ...getBaseConfig([...timeRange], newChartWithNewTW.figure.data)
            }, newChartWithNewTW) :
            newChartWithNewTW;

        return {
            ...state,
            charts: {
                ...(state.charts || {}),
                [action.chartName]: newChartWithNewConfig
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
