const path = require("path");

const themeEntries = {
    "themes/default": path.join(__dirname, "themes", "default", "theme.less"),
    "themes/preview": path.join(__dirname, "themes", "preview", "theme.less")
};
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;

module.exports = require('./MapStore2/build/buildConfig')(
    {
        'ms2-geonode-api': path.join(__dirname, "js", "api")
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
    [],
    {
        '@js': path.join(__dirname, 'js'),
        '@mapstore/framework': path.join(__dirname, 'MapStore2', 'web', 'client')
    }
);
