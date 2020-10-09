/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const controlPanelEnabledSelector = state => state?.controls?.meteoblue?.enabled;
export const loadingSelector = state => state?.meteoblue?.loading;
export const mapClickEnabledSelector = state => state?.meteoblue?.mapClickEnabled;
export const configSelector = state => state?.meteoblue?.config;
export const configLoadedSelector = state => state?.meteoblue?.configLoaded;
export const dockSizeSelector = state => state?.meteoblue?.dockSize;
export const chartsSelector = state => state?.meteoblue?.charts;
