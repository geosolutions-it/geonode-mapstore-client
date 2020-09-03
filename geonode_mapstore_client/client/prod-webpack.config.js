const path = require('path');
const assign = require('object-assign');
const extractThemesPlugin = require('./node_modules/mapstore/build/themes.js').extractThemesPlugin;

module.exports = () => {

    const mapStoreConfig = require('./node_modules/mapstore/build/buildConfig')(
        {},
        {}, {
            base: __dirname,
            dist: path.join(__dirname, '../static/mapstore/dist'),
            framework: path.join(__dirname, 'node_modules', 'mapstore', 'web', 'client'),
            code: [
                path.join(__dirname, 'js'),
                path.join(__dirname, 'node_modules', 'mapstore', 'web', 'client'),
                path.join(__dirname, 'node_modules', 'mapstore', 'sdk')
            ]
        },
        extractThemesPlugin,
        true,
        '/static/mapstore/dist/', // use for homepage mockup 'dist/',
        '.msgapi',
        [],
        {
            '@js': path.resolve(__dirname, 'js')
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
            'ms2-geonode-api': path.join(__dirname, 'js', 'api'),
            'geonode-home': path.join(__dirname, 'js', 'pages', 'home'),
            'geonode-builder': path.join(__dirname, 'js', 'pages', 'builder'),
            'themes/default': path.join(__dirname, 'themes', 'default', 'theme.less'),
            'themes/preview': path.join(__dirname, 'themes', 'preview', 'theme.less'),
            'themes/geonode': path.join(__dirname, 'themes', 'geonode', 'theme.less')
        },
        module: module
    });
};
