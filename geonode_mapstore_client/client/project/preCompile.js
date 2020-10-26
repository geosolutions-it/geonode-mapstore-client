/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable */

const { writeVersion } = require('./writeVersion');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

require('./cleanStatic');

console.log('#######');
console.log('### clean static directory');
console.log('#######');
console.log('');

const { version, commit } = writeVersion(argv.v);

console.log('#######');
console.log(`### version ${version}`);
console.log(`### commit ${commit}`);
console.log('#######');
console.log('');

console.log('#######');
console.log('### start compile');
console.log('###');
console.log('');
