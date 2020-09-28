/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const controlPanelEnabledSelector = state => state?.controls?.meteoblue?.enabled;
export const mapClickEnabledSelector = state => state?.meteoblue?.mapClickEnabled;
export const dockSizeSelector = state => state?.meteoblue?.dockSize;
