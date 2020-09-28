/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import main from '@mapstore/framework/components/app/main';
import Router, { withRoutes } from '@js/components/app/Router';

import {
    setConfigProp,
    setLocalConfigurationFile
} from '@mapstore/framework/utils/ConfigUtils';

import Main from '@js/routes/home/Main';
import Search from '@js/routes/home/Search';

import geoNodeSearchReducer from '@js/reducers/geoNodeSearch';
import geoNodeSearchEpics from '@js/epics/geoNodeSearch';

import {
    getConfiguration,
    getEndpoints
} from '@js/api/geonode/v2';

// TODO: we should compile .scss as .less file in MapStore
// and add a link tag with the compiled css in the template
// this will ensure more control on override or custom css
import '../../themes/geonode/scss/geonode.scss';

// this is an example of routes for the homepage
const routes = [
    {
        name: 'homepage',
        path: '/',
        component: Main
    },
    {
        name: 'resources',
        path: '/search/',
        component: Search
    },
    {
        name: 'resources',
        path: '/search/:pk',
        component: Search
    }
];

setLocalConfigurationFile('');
getConfiguration('/static/gn-mapstore/localConfig.json')
    .then((localConfig) => {
        const { geoNodeConfiguration, ...config } = localConfig;
        Object.keys(config).forEach((key) => {
            setConfigProp(key, config[key]);
        });
        getEndpoints()
            .then(() => {
                // home app entry point
                main({
                    appComponent: withRoutes(routes)(Router),
                    pluginsConfig: [
                        // using useLazyPlugin there are some issue with the order of configuration
                        // this is due to override of same reducers
                        // if ZoomIn or ZoomOut are mounted after Map
                        // the base map reducer is override and the map reducers does not work
                        { name: 'ZoomOut' },
                        { name: 'Map' },
                        { name: 'ZoomIn' }
                    ],
                    appReducers: {
                        geoNodeSearch: geoNodeSearchReducer
                    },
                    appEpics: {
                        ...geoNodeSearchEpics
                    },
                    geoNodeConfiguration
                });
            });
    });
