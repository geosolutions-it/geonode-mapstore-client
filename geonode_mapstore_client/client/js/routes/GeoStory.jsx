/**
 * Copyright 2018, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import url from 'url';
import BorderLayout from 'mapstore/framework/components/layout/BorderLayout';
import { getMonitoredState } from 'mapstore/framework/utils/PluginsUtils';
import { getConfigProp } from 'mapstore/framework/utils/ConfigUtils';
import { updateUrlOnScroll } from 'mapstore/framework/actions/geostory';
import PluginsContainer from 'mapstore/framework/components/plugins/PluginsContainer';

const urlQuery = url.parse(window.location.href, true).query;

const ConnectedPluginsContainer = connect((state) => ({
    mode: urlQuery.mode || (urlQuery.mobile || state.browser && state.browser.mobile ? 'mobile' : 'desktop'),
    monitoredState: getMonitoredState(state, getConfigProp('monitorState'))
}))(PluginsContainer);

function GeoStoryRoute({
    plugins,
    pluginsConfig,
    params,
    onMount
}) {
    useEffect(() => {
        if (onMount) {
            onMount(true);
        }
    }, [ onMount ]);
    return (
        <ConnectedPluginsContainer
            key="page-geostory"
            id="page-geostory"
            className="page page-geostory"
            component={BorderLayout}
            pluginsConfig={pluginsConfig || getConfigProp('plugins')}
            plugins={plugins}
            params={params}
        />
    );
}

GeoStoryRoute.propTypes = {
    onMount: PropTypes.func
};

const ConnectedGeoStoryRoute = connect(
    () => ({}),
    {
        onMount: updateUrlOnScroll
    }
)(GeoStoryRoute);

ConnectedGeoStoryRoute.displayName = 'ConnectedGeoStoryRoute';

export default ConnectedGeoStoryRoute;


