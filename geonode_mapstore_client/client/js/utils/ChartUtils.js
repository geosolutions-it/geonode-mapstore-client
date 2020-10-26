/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { find, keys, zip, zipWith, values } from 'lodash';
import Plotly from 'plotly.js/lib/core';

import { addTimeOffset, rangeToDates } from '../utils/TimeUtils';
import { getMessageById } from '../../MapStore2/web/client/utils/LocaleUtils';

import FileUtils from '../../MapStore2/web/client/utils/FileUtils';

const makeLayout = (title, yAxes = [], startDate, endDate, xAxisOptions = {}) => {
    const yAxesReduced = yAxes.reduce((result, cur) => ({...result, [`yaxis${!cur.index || cur.index === 1 ? '' : cur.index}`]: cur.axisOptions}), {});

    return ({
        title: {
            text: title
        },
        hovermode: 'x unified',
        font: {
            size: 10
        },
        legend: {
            orientation: 'h'
        },
        xaxis: {
            range: [startDate, endDate],
            type: 'date',
            spikemode: 'across',
            ...xAxisOptions
        },
        ...yAxesReduced
    });
};

export const setFigureSize = (width, height, figure = {}) => ({
    ...figure,
    layout: {
        ...(figure.layout || {}),
        width,
        height
    }
});

export const baseConfig = ({
    modeBarButtonsToAdd: [{
        name: 'meteoblue.tocsv',
        icon: Plotly.Icons.pencil,
        click: (gd) => {
            const dateRange = rangeToDates(gd.layout?.xaxis?.range);
            const data = gd.data || [];

            const csvData = [
                ['time', ...data.map(({traceId}) => traceId)].toString(),
                ...zipWith(...data.map(({x, y}) =>
                    zipWith(x, y, (xv, yv) => [new Date(xv), yv])
                        .sort((a, b) => a[0] < b[0] ? -1 : 1)
                        .filter(([time]) => time >= dateRange[0] && time <= dateRange[1])
                ), (data0, ...otherDatas) => [data0[0].toISOString(), ...[data0, ...otherDatas].map(d => d[1])].toString())
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

    const range = offset => [
        direction === '+' ? startDate : times[offset],
        direction === '+' ? times[offset] : startDate
    ];

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
    ...(chart.figure ? {
        figure: {
            ...chart.figure,
            ...(chart.figure.layout ? {
                layout: {
                    ...chart.figure.layout,
                    ...(chart.figure.layout.title ? {
                        title: {
                            ...(chart.figure.layout.title.text ? {text: getMessageById(messages, chart.figure.layout.title.text)} : {})
                        }
                    } : {})
                }
            } : {}),
            ...(chart.figure.config ? {
                config: {
                    ...chart.figure.config,
                    modeBarButtonsToAdd: (chart.figure.config.modeBarButtonsToAdd || []).map(({name, ...other}) => ({name: getMessageById(messages, name), ...other}))
                }
            } : {})
        }
    } : {})
});

export const makeChart = ({title, timeWindows, startTimeWindow, loadedRange, maxRange, latlng, data, unitsConfig, xAxisOptions}) => {
    const currentTimeWindow = find(timeWindows, { name: startTimeWindow });

    return {
        timeWindows,
        currentTimeWindow: startTimeWindow,
        loadedRange,
        maxRange,
        latlng,
        figure: {
            data,
            config: baseConfig,
            layout: makeLayout(title, values(unitsConfig), currentTimeWindow[0], currentTimeWindow[1], xAxisOptions)
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
    relativehumidity_mean: '%'
};

export const processChartData = (data, config = {}, timeKeyName) => {
    const dataPointToTrace = (time, dataPoint) => {
        const unitsConfig = config.units || {};
        const unitIndex = unitsConfig[dataPoint.units]?.index || 1;
        const unitsName = unitsConfig[dataPoint.units]?.name || dataPoint.units;

        return {
            x: time,
            y: dataPoint.values,
            traceId: dataPoint.name,
            name: `${dataPoint.name}${unitsName ? `, ${unitsName}` : ''}`,
            type: 'scatter',
            ...(dataPoint.traceOptions || {}),
            yaxis: `y${unitIndex === 1 ? '' : unitIndex}`
        };
    };

    const valueKeys = (results = []) => keys((results[0] || {})?.values);
    const extractValues = (results = [], key) => results.map(({values: resultValues, ...other}) => key === 'time' ? other[timeKeyName] : resultValues[key]);
    const extractTime = (results = []) => extractValues(results, 'time');
    const makeDataPoints = (results = []) => valueKeys(results).map(key => ({
        values: extractValues(results, key),
        units: config.parameters?.[key]?.units,
        traceOptions: config.parameters?.[key]?.traceOptions,
        name: key
    }));
    const makeTraces = (results = []) => makeDataPoints(results).map(dataPoint => dataPointToTrace(extractTime(results), dataPoint));

    return makeTraces(data);
};

export const mergeFigureData = (data1 = [], data2 = []) =>
    data1.map(({x, y, traceId, ...other}) => {
        const {x: x2, y: y2, data2Other} = find(data2, {traceId});
        const newX = [...x, ...x2];
        const newY = [...y, ...y2];
        const sortedByDate = zip(newX.map(date => new Date(date)), newY).sort((a, b) => a[0] < b[0] ? -1 : 1);

        return {
            x: sortedByDate.map(v => v[0].toISOString()),
            y: sortedByDate.map(v => v[1]),
            ...other,
            ...data2Other,
            traceId
        };
    });
