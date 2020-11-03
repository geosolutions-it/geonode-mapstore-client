const path = require('path');

module.exports = function karmaConfig(config) {
    config.set(require('./MapStore2/build/testConfig')({
        files: [
            'tests.webpack.js',
            { pattern: './MapStore2/**/*', included: false }
        ],
        browsers: ['Chrome'],
        basePath: '.',
        path: [
            path.join(__dirname, 'js'),
            path.join(__dirname, 'MapStore2', 'web', 'client')
        ],
        testFile: 'tests.webpack.js',
        singleRun: false,
        alias: {
            '@js': path.join(__dirname, 'js'),
            '@mapstore/framework': path.join(__dirname, 'MapStore2', 'web', 'client')
        }
    }));
};
