const path = require("path");
const assign = require('object-assign');
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;

module.exports = () => {

    const mapStoreConfig = require('./MapStore2/build/buildConfig')(
        {},
        {}, {
            base: __dirname,
            dist: path.join(__dirname, "../static/mapstore/dist"),
            framework: path.join(__dirname, "MapStore2", "web", "client"),
            code: [
                path.join(__dirname, "js"),
                path.join(__dirname, "n_m"),
                path.join(__dirname, "MapStore2", "web", "client")
            ]
        },
        extractThemesPlugin,
        true,
        '/static/mapstore/dist/', // use for homepage mockup 'dist/',
        '.msgapi',
        [],
        {
            "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
            "@js": path.resolve(__dirname, "js")
        }
    );

    const module = assign(
        mapStoreConfig.module,
        {
            rules: [
                ...mapStoreConfig.module.rules,
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    );

    return assign(mapStoreConfig, {
        // to speed up the build for homepage mock
        // we could build only geonode-home and themes/geonode
        // and comment the others
        entry: {
            'ms2-geonode-api': path.join(__dirname, "js", "api"),
            'geonode-home': path.join(__dirname, 'js', 'pages', 'home'),
            'geonode-builder': path.join(__dirname, 'js', 'pages', 'builder'),
            'themes/default': path.join(__dirname, 'themes', 'default', 'theme.less'),
            'themes/preview': path.join(__dirname, 'themes', 'preview', 'theme.less'),
            'themes/geonode': path.join(__dirname, 'themes', 'geonode', 'theme.less')
        },
        module: module
    });
};
