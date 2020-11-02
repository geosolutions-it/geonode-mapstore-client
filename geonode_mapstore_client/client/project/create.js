/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline-promise').default;
const message = require('./utils/message');

const appDirectory = fs.realpathSync(process.cwd());
const isProject = !fs.existsSync(path.resolve(appDirectory, 'bin/geonode-mapstore-client.js'));
const isVersion = fs.existsSync(path.resolve(appDirectory, 'version.txt'));
const geoNodeMapStoreClientPackageJSON = require(path.resolve(__dirname, '..', 'package.json'));
const packageJSONPath = path.resolve(appDirectory, 'package.json');

function readParam(rl, params, result) {
    return new Promise((resolve, reject) => {
        if (params.length === 0) {
            resolve(result);
        } else {
            const [param, ...other] = params;
            rl.questionAsync(param.label).then((answer) => {
                result[param.name] = answer || param.default;
                if (param.validate(result[param.name])) {
                    resolve(readParam(rl, other, result));
                } else {
                    reject(new Error(`the ${param.name}: ${answer} is not valid`));
                }
            });
        }
    });
}

function readParams(paramsDesc) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return readParam(rl, paramsDesc, {});
}

function create(packageJSON, params) {

    const newPackageJSON = {
        ...packageJSON,
        name: params.name || packageJSON.name,
        version: params.version || packageJSON.version,
        description: params.description || packageJSON.description,
        scripts: {
            ...packageJSON.scripts,
            'compile': 'geonode-mapstore-client compile',
            'start': 'geonode-mapstore-client start',
            'test': 'geonode-mapstore-client test',
            'update-project': 'geonode-mapstore-client update'
        },
        devDependencies: {
            ...packageJSON.devDependencies,
            ...geoNodeMapStoreClientPackageJSON.devDependencies
        },
        dependencies: {
            ...packageJSON.dependencies,
            ...geoNodeMapStoreClientPackageJSON.dependencies,
            'geonode-mapstore-client': params.lib
        },
        geonode: {
            ...packageJSON.geonode,
            devServer: {
                host: 'localhost:8000',
                protocol: 'http'
            },
            themes: [
                'default',
                'preview'
            ]
        }
    };

    fs.writeFileSync(packageJSONPath, JSON.stringify(newPackageJSON, null, 2));

    if (!isVersion) {
        fs.writeFileSync(path.resolve(appDirectory, 'version.txt'), `${newPackageJSON.name}-v${newPackageJSON.version}`);
    }

    const copyFiles = [
        ['.eslintignore', '.eslintignore'],
        ['.eslintrc', '.eslintrc'],
        ['project/templates', '.']
    ];

    copyFiles.forEach((file) => {
        fs.copySync(path.resolve(__dirname, '..', file[0]), path.resolve(appDirectory, file[1]));
    });
}

if (isProject) {

    message.title('create project');

    const packageJSON =  fs.existsSync(packageJSONPath) ? require(packageJSONPath) : {};
    const defaultName = packageJSON.name || 'geonode-mapstore-client-project';
    const defaultDescription = packageJSON.description || 'extend geonode mapstore client';
    const defaultVersion = packageJSON.version || '1.0.0';

    const paramsDesc = [
        {
            'label': `  - Name (${defaultName}): `,
            'name': 'name',
            'default': defaultName,
            'validate': () => true
        },
        {
            'label': `  - Description (${defaultDescription}): `,
            'name': 'description',
            'default': defaultDescription,
            'validate': () => true
        },
        {
            'label': `  - Version (${defaultVersion}): `,
            'name': 'version',
            'default': defaultVersion,
            'validate': () => true
        },
        {
            'label': '  - Module path geonode-mapstore-client: ',
            'name': 'lib',
            'default': '',
            'validate': (value) => !!value
        }
    ];

    readParams(paramsDesc)
        .then((params) => {
            create(packageJSON, params);
            message.success('create project - success');
            process.exit();
        })
        .catch((e) => {
            message.error('create project - error');
            throw new Error(e.message);
        });
}
