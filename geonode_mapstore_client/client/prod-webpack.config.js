const path = require("path");
const DefinePlugin = require("webpack/lib/DefinePlugin");

const themeEntries = {
    "themes/default": path.join(__dirname, "themes", "default", "theme.less"),
    "themes/preview": path.join(__dirname, "themes", "preview", "theme.less")
};
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;
const fs = require('fs-extra');
const versionData = fs.readFileSync(path.join(__dirname, 'version.txt'), 'utf8');
const version = versionData.toString();

module.exports = require('./MapStore2/build/buildConfig')(
    {
        'ms2-geonode-api': path.join(__dirname, "js", "api"),
        'ms-geostory': path.join(__dirname, 'js', 'apps', 'geostory')
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "../static/mapstore/dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    true,
    "/static/mapstore/dist/",
    '.msgapi',
    [
        new DefinePlugin({
            '__GEONODE_PROJECT_CONFIG__': JSON.stringify({
                version
            })
        })
    ],
    {
        '@mapstore/framework': path.resolve(__dirname, 'MapStore2', 'web', 'client'),
        '@js': path.resolve(__dirname, 'js')
    }
);
