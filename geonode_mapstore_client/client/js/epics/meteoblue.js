/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'axios';
import { Observable } from 'rxjs';
import { findIndex, find } from 'lodash';

import {
    SET_MAP_CLICK,
    UPDATE_CHART,
    setChart,
    updateChart,
    loading,
    meteoblueConfigLoaded
} from '../actions/meteoblue';
import {
    changeMapInfoState
} from '../../MapStore2/web/client/actions/mapInfo';
import {
    CLICK_ON_MAP
} from '../../MapStore2/web/client/actions/map';

import {
    mapClickEnabledSelector,
    chartsSelector,
    configSelector,
    configLoadedSelector
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
    localizeChart,
    baseConfig as plotlyBaseConfig
} from '../utils/ChartUtils';
import {
    rangeToDates
} from '../utils/TimeUtils';
import {
    basicError
} from '../../MapStore2/web/client/utils/NotificationUtils';

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
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let oneYearPast = new Date(yesterday);
        oneYearPast.setFullYear(yesterday.getFullYear() - 1);
        let fiveYearsPast = new Date(yesterday);
        fiveYearsPast.setFullYear(yesterday.getFullYear() - 5);

        const pad = val => `${val < 10 ? '0' : ''}${val}`;

        const forecastStartDate = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}T00:00:00.000Z`;
        const forecastEndDate = `${sevenDaysInFuture.getFullYear()}-${pad(sevenDaysInFuture.getMonth() + 1)}-${pad(sevenDaysInFuture.getDate())}T00:00:00.000Z`;
        const historicalStartDate = `${oneYearPast.getFullYear()}-${pad(oneYearPast.getMonth() + 1)}-${pad(oneYearPast.getDate())}`;
        const historicalEndDate = `${yesterday.getFullYear()}-${pad(yesterday.getMonth() + 1)}-${pad(yesterday.getDate())}`;
        const historicalMaxDate = `${fiveYearsPast.getFullYear()}-${pad(fiveYearsPast.getMonth() + 1)}-${pad(fiveYearsPast.getDate())}`;

        const configLoaded = configLoadedSelector(store.getState());
        const meteoblueConfigState = configSelector(store.getState());

        const loadConfigFlow = configLoaded ? Observable.of(meteoblueConfigState) : Observable.defer(() => axios.get('/static/geonode/js/ms2/utils/meteoblueConfig.json'))
            .switchMap((response = {}) => Observable.of(response.data))
            .catch((e) => Observable.of({error: e}));
        const requestsFlow = Observable.forkJoin(
            Observable.defer(() => getForecastData(point.latlng.lat, point.latlng.lng, forecastStartDate, forecastEndDate)).pluck('data').catch(e => Observable.of({error: e})),
            Observable.defer(() => getHistoricalData(point.latlng.lat, point.latlng.lng, historicalStartDate, historicalEndDate)).pluck('data').catch(e => Observable.of({error: e})),
            loadConfigFlow
        );

        return requestsFlow.switchMap(([forecastData, historicalData, meteoblueConfig]) => {
            let forecastChart;
            let historicalChart;

            if (forecastData.error) {
                forecastChart = {error: {message: 'meteoblue.chartError'}};
            }
            if (historicalData.error) {
                historicalChart = {error: {message: 'meteoblue.chartError'}};
            }

            const currentMessages = currentMessagesSelector(store.getState());
            const pickTimeWindows = (timeWindows, ...pickNames) => timeWindows.filter(({name}) => findIndex(pickNames, pickName => pickName === name) > -1);

            if (!forecastData.error) {
                const forecastTraces = processChartData(forecastData, meteoblueConfig, 'date_time');
                forecastChart = localizeChart(currentMessages, makeChart({
                    title: 'meteoblue.forecast.title',
                    timeWindows: pickTimeWindows(makeTimeWindows(forecastStartDate), 'oneDay', 'sevenDays'),
                    maxRange: [forecastStartDate, forecastEndDate],
                    loadedRange: [forecastStartDate, forecastEndDate],
                    latlng: {...point.latlng},
                    startTimeWindow: 'oneDay',
                    data: forecastTraces,
                    unitsConfig: meteoblueConfig?.units,
                    xAxisOptions: meteoblueConfig?.xAxisOptions
                }));
            }

            if (!historicalData.error) {
                const historicalTraces = processChartData(historicalData, meteoblueConfig, 'date');
                historicalChart = localizeChart(currentMessages, makeChart({
                    title: 'meteoblue.historical.title',
                    timeWindows: pickTimeWindows(makeTimeWindows(historicalEndDate, '-'), 'oneWeek', 'oneMonth', 'oneYear', 'twoYears', 'fiveYears'),
                    maxRange: [historicalMaxDate, historicalEndDate],
                    loadedRange: [historicalStartDate, historicalEndDate],
                    latlng: {...point.latlng},
                    startTimeWindow: 'oneYear',
                    data: historicalTraces,
                    unitsConfig: meteoblueConfig?.units,
                    xAxisOptions: meteoblueConfig?.xAxisOptions
                }));
            }

            return Observable.of(
                setChart('forecast', forecastChart),
                setChart('historical', historicalChart),
                ...(!configLoaded ? [meteoblueConfigLoaded(meteoblueConfig)] : []),
                ...(meteoblueConfig?.error ? [basicError({
                    title: 'meteoblue.configLoadError.title',
                    message: 'meteoblue.configLoadError.message',
                    autoDismiss: 5
                })] : []),
                loading(false)
            );
        }).startWith(loading(true));
    });

export const loadDataOnRangeChange = (action$, store) => action$
    .ofType(UPDATE_CHART)
    .flatMap(({chartName, updateObj}) => {
        const state = store.getState();
        const chart = chartsSelector(state)?.[chartName];
        const latlng = chart?.latlng;
        const loadedRange = rangeToDates(chart?.loadedRange);
        const maxRange = rangeToDates(chart?.maxRange);
        const newTimeWindowRangeOrig = find(chart?.timeWindows, {name: updateObj.currentTimeWindow});
        const newTimeWindowRange = rangeToDates(newTimeWindowRangeOrig);

        const meteoblueConfig = configSelector(store.getState());

        if (chart && loadedRange && maxRange && newTimeWindowRange && latlng && newTimeWindowRange[0] < loadedRange[0] && loadedRange[0] > maxRange[0]) {
            const apiRequest = chartName === 'forecast' ? getForecastData : getHistoricalData;
            const startDate = newTimeWindowRangeOrig[0];
            const endDate = chart.loadedRange[0];


            return Observable.defer(() => apiRequest(latlng.lat, latlng.lng, startDate, endDate))
                .pluck('data')
                .flatMap((data = []) => {
                    const currentMessages = currentMessagesSelector(store.getState());

                    if (data.length > 0) {
                        const timeKey = chartName === 'forecast' ? 'date_time' : 'date';
                        const sortedData = data.map(dataPoint => ({...dataPoint, [timeKey]: new Date(dataPoint[timeKey])})).sort((a, b) => a[timeKey] < b[timeKey] ? -1 : 1);
                        const newDataRange = [sortedData[0][timeKey], sortedData[sortedData.length - 1][timeKey]];
                        const newFrontData = newDataRange[0] < loadedRange[0] ? sortedData.filter(dataPoint => dataPoint[timeKey] < loadedRange[0]) : [];
                        const newBackData = newDataRange[1] > loadedRange[1] ? sortedData.filter(dataPoint => dataPoint[timeKey] > loadedRange[1]) : [];
                        const traces = processChartData([...newFrontData, ...newBackData].map(dataPoint => ({...dataPoint, [timeKey]: dataPoint[timeKey].toISOString()})), meteoblueConfig, timeKey);

                        const figureData = chart.figure.data;
                        const newFigureData = mergeFigureData(traces, figureData);

                        // a workaround the fact that after init react-plotly removes the config with the button
                        const newFigure = {
                            data: newFigureData,
                            config: plotlyBaseConfig
                        };

                        return Observable.of(updateChart(chartName, localizeChart(currentMessages, {
                            loadedRange: [newTimeWindowRangeOrig[0], newTimeWindowRangeOrig[1]],
                            figure: newFigure,
                            loading: false
                        })));
                    }

                    // a workaround the fact that after init react-plotly removes the config with the button
                    const newFigure = {
                        config: plotlyBaseConfig
                    };

                    return Observable.of(updateChart(chartName, localizeChart(currentMessages, {loading: false, figure: newFigure, loadedRange: [newTimeWindowRangeOrig[0], newTimeWindowRangeOrig[1]]})));
                })
                .catch(() => Observable.of(setChart(chartName, {error: {message: 'meteoblue.chartError'}})))
                .startWith(updateChart(chartName, {loading: true}));
        }

        return Observable.empty();
    });
