/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const mapStorePath = path.join(appDirectory, 'MapStore2');
const msP = JSON.parse(fs.readFileSync(path.resolve(mapStorePath, './package.json'), 'utf8'));
const projP = JSON.parse(fs.readFileSync(path.resolve(appDirectory, './package.json'), 'utf8'));
const devDependencies = {...(projP.devDependencies || {}), ...msP.devDependencies};
fs.writeFileSync(path.resolve(appDirectory, './package.json'), JSON.stringify({ ...projP, devDependencies }, null, 2), 'utf8');
