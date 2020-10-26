/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'axios';

export const getForecastData = (lat, lon, startDate, endDate) =>
    axios.get(`/mb/api/hourly/?&lonlat=${lon}%3B${lat}&startdate=${encodeURIComponent(startDate)}&enddate=${encodeURIComponent(endDate)}`);

export const getHistoricalData = (lat, lon, startDate, endDate) =>
    axios.get(`/mb/api/daily/?&lonlat=${lon}%3B${lat}&startdate=${startDate.slice(0, 10)}&enddate=${endDate.slice(0, 10)}`);
