/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const ON_TOGGLE_FILTER = 'GEONODE:ON_TOGGLE_FILTER';

export function toggleFiltersPanel() {
    return {
        type: ON_TOGGLE_FILTER
    };
}
