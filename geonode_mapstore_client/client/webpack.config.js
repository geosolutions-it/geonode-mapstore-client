const path = require('path');
const assign = require('object-assign');

const themeEntries = {
    'themes/default': path.join(__dirname, 'themes', 'default', 'theme.less'),
    'themes/preview': path.join(__dirname, 'themes', 'preview', 'theme.less')
};
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;

const envJson = require('./env.json');

const DEV_SERVER_HOST = envJson.DEV_SERVER_HOST || 'ERROR:INSERT_DEV_SERVER_HOST_IN_ENV_JSON_CONFIG! eg: my-geonode-host.org';
const protocol = envJson.DEV_SERVER_HOST_PROTOCOL || 'http';

module.exports = assign({}, require('./MapStore2/build/buildConfig')(
    {
        'ms2-geonode-api': path.join(__dirname, 'js', 'api'),
        'ms-geostory': path.join(__dirname, 'js', 'apps', 'geostory')
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, 'dist'),
        framework: path.join(__dirname, 'MapStore2', 'web', 'client'),
        code: [path.join(__dirname, 'js'), path.join(__dirname, 'MapStore2', 'web', 'client')]
    },
    extractThemesPlugin,
    false,
    `/static/mapstore/dist/`,
    '.msgapi',
    [],
    {
        'mapstore/framework': path.resolve(__dirname, 'MapStore2', 'web', 'client'),
        '@js': path.resolve(__dirname, 'js')
    }
), {
    devServer: {
        https: protocol === 'https' ? true : false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentBase: [
            path.join(__dirname),
            path.join(__dirname, '..', 'static')
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
});
