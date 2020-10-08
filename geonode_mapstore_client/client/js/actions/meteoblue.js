/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const SET_MAP_CLICK = 'METEOBLUE:SET_MAP_CLICK';
export const SET_DOCK_SIZE = 'METEOBLUE:SET_DOCK_SIZE';
export const SET_CHART = 'METEOBLUE:SET_CHART';
export const UPDATE_CHART = 'METEOBLUE:UPDATE_CHART';
export const SET_CHART_PROPERTY = 'METEOBLUE:SET_CHART_PROPERTY';
export const LOADING = 'METEOBLUE:LOADING';

export const setMapClick = enable => ({
    type: SET_MAP_CLICK,
    enable
});

export const setDockSize = size => ({
    type: SET_DOCK_SIZE,
    size
});

export const setChart = (chartName, chartObj) => ({
    type: SET_CHART,
    chartName,
    chartObj
});

export const updateChart = (chartName, updateObj) => ({
    type: UPDATE_CHART,
    chartName,
    updateObj
});

export const setChartProperty = (propName, chartName, propValue) => ({
    type: SET_CHART_PROPERTY,
    propName,
    chartName,
    propValue
});

export const loading = (value, name = "loading") => ({
    type: LOADING,
    name,
    value
});
