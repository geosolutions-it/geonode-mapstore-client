#!/usr/bin/env node

/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const childProcess = require('child_process');
const path = require('path');
const message = require('../project/utils/message');

const command = process.argv[2];

if (command === undefined) {
    childProcess
        .execSync(
            `node ${path.resolve(__dirname, '..', 'project', 'create.js')}`,
            { stdio: 'inherit' }
        );

    message.title('npm install');
    childProcess
        .execSync(
            'npm install',
            { stdio: 'inherit' }
        );
} else {
    const commands = [
        'compile',
        'start',
        'test',
        'update'
    ];
    if (commands.indexOf(command) !== -1) {
        childProcess
            .execSync(
                `node ${path.resolve(__dirname, '..', 'project', command + '.js')}`,
                { stdio: 'inherit' }
            );
    } else {
        message.error('\'' + command + '\' is not a valid command');
    }
}
