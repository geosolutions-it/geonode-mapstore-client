/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const fs = require('fs-extra');
const childProcess = require('child_process');
const appDirectory = fs.realpathSync(process.cwd());
const versionFileDestination = path.join(appDirectory, 'version.txt');

function writeVersion(type) {
    if (type) {
        childProcess.execSync(`npm version ${type}`);
    }
    const packageJSON = require(path.resolve(appDirectory, 'package.json')) || {};
    const version = packageJSON.version;
    const name = packageJSON.name;
    const commit = childProcess
        .execSync('git rev-parse HEAD')
        .toString().trim();
    fs.writeFileSync(versionFileDestination, `${name}-v${version}-${commit}`);
    return { version, commit };
}

module.exports = {
    writeVersion
};
