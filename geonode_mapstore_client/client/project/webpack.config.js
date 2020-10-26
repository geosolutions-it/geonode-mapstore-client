/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const mapStorePath = path.join(appDirectory, 'MapStore2');
const frameworkPath = path.join(mapStorePath, 'web', 'client');

const extractThemesPlugin = require(path.resolve(mapStorePath, './build/themes.js')).extractThemesPlugin;
const buildConfig = require(path.resolve(mapStorePath, './build/buildConfig.js'));

const projectConfig = require('./projectConfig.js');

const DEV_SERVER_HOST = projectConfig.devServer.host;
const protocol = projectConfig.devServer.protocol;

module.exports = () => {

    const mapStoreConfig = buildConfig(
        {},
        {},
        {
            base: appDirectory,
            dist: path.join(appDirectory, 'dist'),
            framework: frameworkPath,
            code: [
                path.join(appDirectory, 'js'),
                frameworkPath
            ]
        },
        extractThemesPlugin,
        false,
        '/static/mapstore/dist/',
        '.msgapi',
        [],
        {
            '@js': path.resolve(appDirectory, 'js'),
            '@mapstore/framework': frameworkPath
        }
    );

    return {
        ...mapStoreConfig,
        entry: {
            'ms2-geonode-api': path.join(appDirectory, 'js', 'api'),
            'ms-geostory': path.join(appDirectory, 'js', 'apps', 'geostory'),
            'themes/default': path.join(appDirectory, 'themes', 'default', 'theme.less'),
            'themes/preview': path.join(appDirectory, 'themes', 'preview', 'theme.less')
        },
        resolve: {
            ...mapStoreConfig.resolve,
            modules: [
                'node_modules',
                // resolve module installed inside the MapStore2 submodule
                // it's needed for project that install MapStore dependency with
                // "file:MapStore2"
                'MapStore2/node_modules'
            ]
        },
        devServer: {
            clientLogLevel: 'debug',
            https: protocol === 'https' ? true : false,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            contentBase: [
                path.join(appDirectory),
                path.join(appDirectory, '..', 'static')
            ],
            before: function(app) {
                const hashRegex = /\.[a-zA-Z0-9]{1,}\.js/;
                app.use(function(req, res, next) {
                    // remove hash from requests to use the local js
                    if (req.url.indexOf('/static/geonode/js/ms2/utils/') !== -1
                        || req.url.indexOf('/ms2-geonode-api') !== -1) {
                        req.url = req.url.replace(hashRegex, '.js');
                        req.path = req.path.replace(hashRegex, '.js');
                        req.originalUrl = req.originalUrl.replace(hashRegex, '.js');
                    }
                    next();
                });
            },
            proxy: [
                {
                    context: [
                        '**',
                        '!**/static/mapstore/**',
                        '!**/static/geonode/js/ms2/utils/**',
                        '!**/geonode/js/ms2/utils/**',
                        '!**/MapStore2/**',
                        '!**/node_modules/**'
                    ],
                    target: `${protocol}://${DEV_SERVER_HOST}`,
                    headers: {
                        Host: DEV_SERVER_HOST,
                        Referer: `${protocol}://${DEV_SERVER_HOST}/`
                    }
                },
                {
                    context: [
                        '/static/mapstore/MapStore2/web/client/**',
                        '/static/geonode/js/ms2/utils/**'
                    ],
                    target: `${protocol}://localhost:8081`,
                    secure: false,
                    changeOrigin: true,
                    pathRewrite: {
                        '/static/mapstore/MapStore2/web/client/': '/MapStore2/web/client/translations/',
                        '/static/geonode/js/ms2/utils/': '/geonode/js/ms2/utils/'
                    }
                }
            ]
        }
    };
};
