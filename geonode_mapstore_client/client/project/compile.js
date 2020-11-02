/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const message = require('./utils/message');

const appDirectory = fs.realpathSync(process.cwd());
const isProject = !fs.existsSync(path.resolve(appDirectory, 'bin/geonode-mapstore-client.js'));

const cleanPath = path.join(__dirname, 'clean.js');
childProcess
    .execSync(
        `node ${cleanPath}`,
        { stdio: 'inherit' }
    );

const argv = yargs(hideBin(process.argv)).argv;
const versionPath = path.join(__dirname, 'version.js');
childProcess
    .execSync(
        argv.v
            ? `node ${versionPath} --v=${argv.v}`
            : `node ${versionPath}`,
        { stdio: 'inherit' }
    );

if (!isProject) {
    const packPath = path.join(__dirname, 'pack.js');
    childProcess
        .execSync(
            `node ${packPath}`,
            { stdio: 'inherit' }
        );
}

message.title('start compile');
const webpackPath = path.join(appDirectory, 'node_modules', '.bin', 'webpack');
const prodWebpackConfigPath = path.join(__dirname, 'config', 'prod-webpack.config.js');
childProcess
    .execSync(
        `${webpackPath} --progress --config ${prodWebpackConfigPath}`,
        { stdio: 'inherit' }
    );
