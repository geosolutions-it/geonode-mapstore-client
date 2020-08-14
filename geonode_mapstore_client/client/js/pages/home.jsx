/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import main from 'mapstore-sdk/app/main';
import Router, { withRoutes } from 'mapstore-sdk/app/Router';

// should we include utils under mapstore-sdk/base/utils/ConfigUtils
import { setConfigProp } from '@mapstore/utils/ConfigUtils';

import Main from '@js/routes/Main';

// TODO: we should compile .scss as .less file in MapStore
// and add a link tag with the compiled css in the template
// this will ensure more control on override or custom css
import '../../themes/geonode/scss/geonode.scss';

// translations path
// dev use '/static/mapstore/MapStore2/web/client'
// mock use 'translations'
setConfigProp('translationsPath', [ '/static/mapstore/MapStore2/web/client' ] );

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
        // using useLazyPlugin there are some issue with the order of configuration
        // this is due to override of same reducers
        // if ZoomIn or ZoomOut are mounted after Map
        // the base map reducer is override and the map reducers does not work
        { name: 'ZoomIn' },
        { name: 'ZoomOut' },
        { name: 'Map' }
    ]
});
