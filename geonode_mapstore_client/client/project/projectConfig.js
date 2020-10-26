/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const fs = require('fs-extra');
const assign = require('object-assign');
const appDirectory = fs.realpathSync(process.cwd());

const packageJSON = require(path.resolve(appDirectory, 'package.json')) || {};

const projectConfig = packageJSON.projectConfig || {};
const devServer = projectConfig.devServer || {};

const envPath = path.resolve(appDirectory, 'env.json');
const envJson = fs.existsSync(envPath) ? require(envPath) : undefined;

const versionData = fs.readFileSync(path.join(appDirectory, 'version.txt'), 'utf8');
const version = versionData.toString();

module.exports = assign(
    projectConfig,
    {
        version: version,
        devServer: {
            host: devServer.host || envJson.DEV_SERVER_HOST || 'localhost:8000',
            protocol: devServer.protocol || envJson.DEV_SERVER_HOST_PROTOCOL || 'http'
        }
    }
);
