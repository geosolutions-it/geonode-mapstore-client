/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { find, keys, zipWith, isArray } from 'lodash';
import Plotly from 'plotly.js/lib/core';

import { addTimeOffset } from '../utils/TimeUtils';
import { getMessageById } from '../../MapStore2/web/client/utils/LocaleUtils';

import { rangeToDates } from '../utils/TimeUtils';
import FileUtils from '../../MapStore2/web/client/utils/FileUtils';

const makeLayout = (title, yAxisTitle, startDate, endDate) => ({
    title: {
        text: title
    },
    hovermode: 'closest',
    font: {
        size: 10
    },
    xaxis: {
        range: [startDate, endDate],
        type: 'date'
    },
    yaxis: {
        autorange: true,
        type: 'linear',
        ...(yAxisTitle ? {
            title: {
                text: yAxisTitle
            }
        } : {})
    }
});

export const setFigureSize = (width, height, figure = {}) => ({
    ...figure,
    layout: {
        ...(figure.layout || {}),
        width,
        height
    }
});

export const getBaseConfig = (range, data) => ({
    modeBarButtonsToAdd: [{
        name: 'meteoblue.tocsv',
        icon: Plotly.Icons.pencil,
        click: () => {
            const dateRange = rangeToDates(isArray(range) ? {start: range[0], end: range[1]} : range);

            console.log('range', range);
            const csvData = [
                data.map(({traceId}) => traceId).toString(),
                ...zipWith(...data.map(({x, y}) =>
                    zipWith(x, y, (xv, yv) => [new Date(xv), yv])
                        .sort((a, b) => a[0] < b[0] ? -1 : 1)
                        .filter(([time, _]) => time >= dateRange.start && time <= dateRange.end)
                ), (data0, ...otherDatas) => [data0[0].toISOString(), ...otherDatas.map(d => d[1])].toString())
            ].join('\n');

            FileUtils.download(csvData, 'plot.csv', 'text/csv');
        }
    }]
});

export const makeTimeWindows = (startDate, direction = '+') => {
    const timeWindowOffsets = ['1d', '7d', '1m', '1y', '2y', '5y'];
    const times = timeWindowOffsets.map(offset => ({[offset]: addTimeOffset(startDate, `${direction === '+' ? '+' : '-'}${offset}`)})).reduce((result, cur) => ({
        ...result,
        ...cur
    }));

    const range = offset => ({
        start: direction === '+' ? startDate : times[offset],
        end: direction === '+' ? times[offset] : startDate
    });

    const windows = [['oneDay', '1d'], ['sevenDays', '7d'], ['oneWeek', '7d'], ['oneMonth', '1m'], ['oneYear', '1y'], ['twoYears', '2y'], ['fiveYears', '5y']];

    return windows.map(([windowName, windowOffset]) => ({
        name: windowName,
        title: `meteoblue.timeWindows.${windowName}`,
        ...range(windowOffset)
    }));
};

export const localizeChart = (messages, chart = {}) => ({
    ...chart,
    ...(chart.timeWindows ? {timeWindows: chart.timeWindows.map(({title, ...other}) => ({
        ...other,
        title: getMessageById(messages, title)
    }))} : {}),
    figure: {
        ...(chart.figure || {}),
        layout: {
            ...(chart.figure?.layout || {}),
            title: {
                ...(chart.figure?.layout?.title || {}),
                ...(chart.figure?.layout?.title?.text ? {text: getMessageById(messages, chart.figure.layout.title.text)} : {})
            }
        },
        config: {
            ...(chart.figure?.config || {}),
            modeBarButtonsToAdd: (chart.figure?.config?.modeBarButtonsToAdd || []).map(({name, ...other}) => ({name: getMessageById(messages, name), ...other}))
        }
    }
});

export const makeChart = ({title, timeWindows, startTimeWindow, loadedRange, maxRange, latlng, data}) => {
    const currentTimeWindow = find(timeWindows, { name: startTimeWindow });

    return {
        timeWindows,
        currentTimeWindow: startTimeWindow,
        loadedRange,
        maxRange,
        latlng,
        figure: {
            data,
            config: getBaseConfig(loadedRange, data),
            layout: makeLayout(title, false, currentTimeWindow.start, currentTimeWindow.end)
        }
    };
};

export const unitsMap = {
    precipitation: 'mm',
    convective_precipitation: 'mm',
    windspeed: 'ms-1',
    relativehumidity: '%',
    precipitation_probability: '%',
    temperature: 'C°',
    sealevelpressure_max: 'hPa',
    sealevelpressure_min: 'hPa',
    sealevelpressure_mean: 'hPa',
    temperature_max: 'C°',
    temperature_min: 'C°',
    temperature_mean: 'C°',
    windspeed_max: 'ms-1',
    windspeed_min: 'ms-1',
    windspeed_mean: 'ms-1',
    relativehumidity_max: '%',
    relativehumidity_min: '%',
    relativehumidity_mean: '%',
};

export const processChartData = data => {
    const dataPointToTrace = (time, dataPoint) => {
        return {
            x: time,
            y: dataPoint.values,
            traceId: dataPoint.name,
            name: `${dataPoint.name}${dataPoint.units ? `, ${dataPoint.units}` : ''}`,
            mode: 'lines+markers',
            type: 'scatter'
        };
    };

    const valueKeys = (results = []) => keys((results[0] || {})?.values);
    const extractValues = (results = [], key) => results.map(({date, values}) => key === 'time' ? date : values[key]);
    const extractTime = (results = []) => extractValues(results, 'time');
    const makeDataPoints = (results = []) => valueKeys(results).map(key => ({
        values: extractValues(results, key),
        units: unitsMap[key],
        name: key
    }));
    const makeTraces = (results = []) => makeDataPoints(results).map(dataPoint => dataPointToTrace(extractTime(results), dataPoint));

    return makeTraces(data);
};

export const mergeFigureData = (data1 = [], data2 = []) =>
    data1.map(({x, y, traceId, ...other}) => {
        const {x: x2, y: y2, data2Other} = find(data2, {traceId});

        return {
            x: [...x, ...x2],
            y: [...y, ...y2],
            ...other,
            ...data2Other,
            traceId
        };
    });
