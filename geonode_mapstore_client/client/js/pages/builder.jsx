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
import Builder from '@js/routes/Builder';

setConfigProp('translationsPath', ['/static/mapstore/MapStore2/web/client/'] );

// this is an example of routes for the builder
// we could create different configuration and routes for map, dashboard and geostory
const routes = [
    {
        name: 'builder',
        path: '/',
        component: Builder
    },
    {
        name: 'builder',
        path: '/:id',
        component: Builder
    }
];

// builder app entry point
main({
    appComponent: withRoutes(routes)(Router),
    pluginsConfig: [
        { name: 'GeoStory' }
    ]
});
