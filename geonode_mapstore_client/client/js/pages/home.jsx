/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import main from '../main';
import { setConfigProp } from '@mapstore/utils/ConfigUtils';
import Router, { withRoutes } from '@js/Router';
import Main from '@js/routes/Main';

setConfigProp('translationsPath', [ '/static/mapstore/MapStore2/web/client/' ] );

// this is an example of routes for the homepage
const routes = [
    {
        name: 'homepage',
        path: '/',
        component: Main
    },
    {
        name: 'resources',
        path: '/:resourceType',
        component: Main
    },
    {
        name: 'resource',
        path: '/:resourceType/:resourceId',
        component: Main
    }
];

// home app entry point
main({
    appComponent: withRoutes(routes)(Router),
    pluginsConfig: [
        { name: 'Map' }
    ]
});
