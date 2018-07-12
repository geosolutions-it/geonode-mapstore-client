const path = require("path");
const assign = require("object-assign");

const themeEntries = {
    "themes/default": path.join(__dirname, "themes", "default", "theme.less"),
    "themes/preview": path.join(__dirname, "themes", "preview", "theme.less")
};
const extractThemesPlugin = require('./MapStore2/themes.js').extractThemesPlugin;

module.exports = assign({}, require('./MapStore2/buildConfig')(
    {
        'ms2-geonode-api': path.join(__dirname, "js", "api")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "http://localhost:8081/dist/",
    '.msgapi'
), {
    devServer: {
        
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/rest/geostore': {
                target: "https://dev.mapstore.geo-solutions.it/mapstore",
                secure: false,
                headers: {
                    host: "dev.mapstore.geo-solutions.it"
                }
            },
            '/pdf': {
                logLevel: "debug",
                target: "https://dev.mapstore.geo-solutions.it/mapstore",
                secure: false,
                headers: {
                    host: "dev.mapstore.geo-solutions.it"
                }
            },
            '/mapstore/pdf': {
                logLevel: "debug",
                target: "https://dev.mapstore.geo-solutions.it",
                secure: false,
                headers: {
                    host: "dev.mapstore.geo-solutions.it"
                }
            },
            '/proxy': {
                target: "http://localhost:8000",
                secure: false,
                headers: {
                    host: "dev.mapstore.geo-solutions.it"
                }
            },
            '/docs': {
                target: "http://localhost:8081",
                pathRewrite: {'/docs': '/mapstore/docs'}
            }
        }
    }
});
