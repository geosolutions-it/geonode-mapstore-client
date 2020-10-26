/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const appDirectory = fs.realpathSync(process.cwd());
const mapStorePath = path.join(appDirectory, 'MapStore2');
const frameworkPath = path.join(mapStorePath, 'web', 'client');

const extractThemesPlugin = require(path.resolve(mapStorePath, './build/themes.js')).extractThemesPlugin;
const buildConfig = require(path.resolve(mapStorePath, './build/buildConfig.js'));

const projectConfig = require('./projectConfig.js');

const version = projectConfig.version;

const staticPath = '../static/mapstore';
const distDirectory = 'dist';

module.exports = () => {

    const mapStoreConfig = buildConfig(
        {},
        {},
        {
            base: appDirectory,
            dist: path.join(appDirectory, staticPath + '/' + distDirectory),
            framework: frameworkPath,
            code: [
                path.join(appDirectory, 'js'),
                frameworkPath
            ]
        },
        extractThemesPlugin,
        true,
        '/static/mapstore/dist/',
        '.msgapi',
        [
            new DefinePlugin({
                '__GEONODE_PROJECT_CONFIG__': JSON.stringify({
                    version
                })
            }),

            // new BundleAnalyzerPlugin(),

            new CopyWebpackPlugin([
                {
                    from: path.resolve(frameworkPath, 'translations'),
                    to: path.resolve(staticPath, 'MapStore2/web/client')
                }
            ]),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(appDirectory, 'static/mapstore/translations'),
                    to: path.resolve(appDirectory, staticPath + '/translations')
                }
            ]),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(appDirectory, 'version.txt'),
                    to: path.resolve(appDirectory, staticPath)
                }
            ])
        ],
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
        }
    };
};
