/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'axios';
import { pick, findIndex, zipWith, toPairs } from 'lodash';

import daily from './testresponses/daily.json';
import yearly1 from './testresponses/yearly1.json';
import yearly2 from './testresponses/yearly2.json';
import yearly3 from './testresponses/yearly3.json';
import yearly4 from './testresponses/yearly4.json';
import yearly5 from './testresponses/yearly5.json';
import yearly6 from './testresponses/yearly6.json';

export const getForecastData = (lat, lon, startDate, endDate) => new Promise(resolve => {
    console.log('getForecastData lat', lat, 'lon', lon, 'startDate', startDate, 'endDate', endDate);
    setTimeout(() => {
        const data = toPairs(pick(daily.data_1h, 'time', 'temperature', 'precipitation', 'precipitation_probability', 'windspeed', 'relativehumidity', 'convective_precipitation', 'pictocode')).map(
            ([dataKey, dataValues]) => dataValues.map(dataValue => ({key: dataKey, value: dataValue })));

        return resolve({
            results: zipWith(...data, (date, ...dataKeyValues) => ({
                date: date.value,
                values: {
                    ...dataKeyValues.reduce((result, {key, value}) => ({...result, [key]: value}), {})
                }
            })),
        })
    }, 1400);
});

export const getHistoricalData = (lat, lon, startDate, endDate) => new Promise(resolve => {
    console.log('getHistoricalData lat', lat, 'lon', lon, 'startDate', startDate, 'endDate', endDate);

    setTimeout(() => {
        const dataArr = [yearly1, yearly2, yearly3, yearly4, yearly5, yearly6];
        const startYear = startDate.slice(0, 4);
        const endYear = endDate.slice(0, 4);
        const startIndex = parseInt(startYear, 10) - 2015;
        const endIndex = parseInt(endYear, 10) - 2015;

        const dataKeys = ['temperature_max', 'temperature_min', 'temperature_mean', 'precipitation', 'windspeed_max', 'windspeed_min', 'windspeed_mean', 'relativehumidity_max', 'relativehumidity_min', 'relativehumidity_mean'];
        let result = {
            results: []
        };

        const shiftYears = timeArr => timeArr.map(time => `${parseInt(time.slice(0, 4), 10) + 1}${time.slice(4)}`);

        for (let i = startIndex; i <= endIndex; ++i) {
            const dataObj = dataArr[i];
            const timeArr = shiftYears(dataObj.history_day.time);

            const localStartIndex = i === startIndex ?
                findIndex(timeArr, date => date === startDate.slice(0, 10)) :
                0;
            const localEndIndex = i === endIndex ?
                findIndex(timeArr, date => date === endDate.slice(0, 10)) :
                timeArr.length - 1;

            const timeSlice = timeArr.slice(localStartIndex, localEndIndex + 1);
            const dataSlices = dataKeys.map(key => [
                key,
                dataObj.history_day[key].slice(localStartIndex, localEndIndex + 1)
            ]);
            const dataWithKeys = dataSlices.map(([key, dataValues]) => dataValues.map(dataValue => ({key, value: dataValue})));
            const resultSlice = zipWith(timeSlice, ...dataWithKeys, (date, ...dataKeyValues) => ({
                date,
                values: {
                    ...dataKeyValues.reduce((result, {key, value}) => ({...result, [key]: value}), {})
                }
            }));

            result.results = result.results.concat(resultSlice);
        }

        resolve(result);
    }, 1500);
});
