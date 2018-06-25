/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
/**
 * Add custom (overriding) translations with:
 *
 * ConfigUtils.setConfigProp('translationsPath', ['./MapStore2/web/client/translations', './translations']);
 */
//  ConfigUtils.setConfigProp('translationsPath', ['../MapStore2/web/client/translations', './translations'] );
ConfigUtils.setConfigProp('themePrefix', 'msgapi');

/**
 * Use a custom plugins configuration file with:
 *
 * ConfigUtils.setLocalConfigurationFile('localConfig.json');
 */
// ConfigUtils.setLocalConfigurationFile('MapStore2/web/client/localConfig.json');

/**
 * Use a custom application configuration file with:
 *
 * const appConfig = require('./appConfig');
 *
 * Or override the application configuration file with (e.g. only one page with a mapviewer):
 *
 * const appConfig = assign({}, require('../MapStore2/web/client/product/appConfig'), {
 *     pages: [{
 *         name: "mapviewer",
 *         path: "/",
 *         component: require('../MapStore2/web/client/product/pages/MapViewer')
 *     }]
 * });
 */
const appConfig = require('../MapStore2/web/client/product/appConfig');




/**
 * Define a custom list of plugins with:
 *
 * const plugins = require('./plugins');
 */
const plugins = require('../MapStore2/web/client/product/apiPlugins');

// require('../MapStore2/web/client/product/main')(appConfig, plugins);

/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getScriptPath = function() {
    const scriptEl = document.getElementById('ms2-api');
    return scriptEl && scriptEl.src && scriptEl.src.substring(0, scriptEl.src.lastIndexOf('/')) || 'https://dev.mapstore2.geo-solutions.it/mapstore/dist';
};

const MapStore2 = require('../MapStore2/web/client/jsapi/MapStore2')
  .withPlugins(plugins, {
      theme: {
          path: getScriptPath() + '/themes'
      },
      noLocalConfig: true,
      initialState: require('../MapStore2/web/client/product/appConfigEmbedded').initialState,
      translations: getScriptPath() + '/../MapStore2/web/client/translations' 
  });
window.MapStore2 = MapStore2;
