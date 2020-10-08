/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import { findIndex, last, head } from 'lodash';

import {
    SET_MAP_CLICK,
    UPDATE_CHART,
    setChart,
    updateChart,
    loading
} from '../actions/meteoblue';
import {
    changeMapInfoState
} from '../../MapStore2/web/client/actions/mapInfo';
import {
    CLICK_ON_MAP
} from '../../MapStore2/web/client/actions/map';

import {
    mapClickEnabledSelector,
    chartsSelector
} from '../selectors/meteoblue';
import {
    currentMessagesSelector
} from '../../MapStore2/web/client/selectors/locale';

import {
    getForecastData,
    getHistoricalData
} from '../api/meteoblue';

import {
    makeChart,
    makeTimeWindows,
    processChartData,
    mergeFigureData,
    localizeChart
} from '../utils/ChartUtils';
import {
    rangeToDates
} from '../utils/TimeUtils';

export const manageIdentifyOnSetMapClick = (action$) => action$
    .ofType(SET_MAP_CLICK)
    .switchMap(({enable}) => Observable.of(changeMapInfoState(!enable)));

export const getDataOnMapClick = (action$, store) => action$
    .ofType(CLICK_ON_MAP)
    .filter(() => mapClickEnabledSelector(store.getState()))
    .switchMap(({point}) => {
        const today = new Date();
        let sevenDaysInFuture = new Date(today);
        sevenDaysInFuture.setDate(today.getDate() + 7);
        let oneYearPast = new Date(today);
        oneYearPast.setFullYear(today.getFullYear() - 1);
        let fiveYearsPast = new Date(today);
        fiveYearsPast.setFullYear(today.getFullYear() - 5);

        const pad = val => `${val < 10 ? '0' : ''}${val}`;

        const forecastStartDate = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
        const forecastEndDate = `${sevenDaysInFuture.getFullYear()}-${pad(sevenDaysInFuture.getMonth() + 1)}-${pad(sevenDaysInFuture.getDate())}`;
        const historicalStartDate = `${oneYearPast.getFullYear()}-${pad(oneYearPast.getMonth() + 1)}-${pad(oneYearPast.getDate())}`;
        const historicalEndDate = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
        const historicalMaxDate = `${fiveYearsPast.getFullYear()}-${pad(fiveYearsPast.getMonth() + 1)}-${pad(fiveYearsPast.getDate())}`;

        const requestsFlow = Observable.forkJoin(
            Observable.defer(() => getForecastData(point.latlng.lat, point.latlng.lng, forecastStartDate, forecastEndDate)).catch(e => ({error: e})),
            Observable.defer(() => getHistoricalData(point.latlng.lat, point.latlng.lng, historicalStartDate, historicalEndDate)).catch(e => ({error: e}))
        );

        return requestsFlow.switchMap(([forecastData, historicalData]) => {
            let forecastChart;
            let historicalChart

            if (forecastData.error) {
                forecastChart = {error: forecastData.error};
            }
            if (historicalData.error) {
                historicalChart = {error: historicalData.error};
            }

            const currentMessages = currentMessagesSelector(store.getState());
            const pickTimeWindows = (timeWindows, ...pickNames) => timeWindows.filter(({name}) => findIndex(pickNames, pickName => pickName === name) > -1);

            if (!forecastData.error) {
                const forecastTraces = processChartData(forecastData.results);
                forecastChart = localizeChart(currentMessages, makeChart({
                    title: 'meteoblue.forecast.title',
                    timeWindows: pickTimeWindows(makeTimeWindows(head(forecastData.results).date), 'oneDay', 'sevenDays'),
                    maxRange: {start: forecastStartDate, end: forecastEndDate},
                    loadedRange: {start: forecastStartDate, end: forecastEndDate},
                    latlng: {...point.latlng},
                    startTimeWindow: 'oneDay',
                    data: forecastTraces
                }));
            }

            if (!historicalData.error) {
                const historicalTraces = processChartData(historicalData.results);
                historicalChart = localizeChart(currentMessages, makeChart({
                    title: 'meteoblue.historical.title',
                    timeWindows: pickTimeWindows(makeTimeWindows(last(historicalData.results)?.date, '-'), 'oneWeek', 'oneMonth', 'oneYear', 'twoYears', 'fiveYears'),
                    maxRange: {start: historicalMaxDate, end: historicalEndDate},
                    loadedRange: {start: historicalStartDate, end: historicalEndDate},
                    latlng: {...point.latlng},
                    startTimeWindow: 'oneYear',
                    data: historicalTraces
                }));
            }

            return Observable.of(setChart('forecast', forecastChart), setChart('historical', historicalChart), loading(false));
        }).startWith(loading(true));
    });

export const loadDataOnRangeChange = (action$, store) => action$
    .ofType(UPDATE_CHART)
    .switchMap(({chartName, updateObj}) => {
        const state = store.getState();
        const chart = chartsSelector(state)?.[chartName];
        const latlng = chart?.latlng;
        const curRange = rangeToDates(chart?.figure?.layout?.xaxis?.range);
        const loadedRange = rangeToDates(chart?.loadedRange);
        const maxRange = rangeToDates(chart?.maxRange);

        if (updateObj.figure && chart && curRange && maxRange && latlng && curRange[0] < loadedRange.start && loadedRange.start > maxRange.start) {
            const apiRequest = chartName === 'forecast' ? getForecastData : getHistoricalData;
            const startDate = chart.figure.layout.xaxis.range[0];
            const endDate = chart.loadedRange.start;

            return Observable.defer(() => apiRequest(latlng.lat, latlng.lng, startDate, endDate))
                .switchMap(data => {
                    const traces = processChartData(data.results);

                    const figureData = chart.figure.data;
                    const newFigureData = mergeFigureData(traces, figureData);

                    return Observable.of(updateChart(chartName, {
                        loadedRange: {start: startDate, end: endDate},
                        figure: {...chart.figure, data: newFigureData},
                        loading: false
                    }));
                })
                .catch(e => Observable.of(setChart(chartName, {error: e})))
                .startWith(updateChart(chartName, {loading: true}));
        }

        return Observable.empty();
    });
