/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from '@mapstore/framework/components/development/Debug';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import Localized from '@mapstore/framework/components/I18N/Localized';
import Theme from '@mapstore/framework/components/theme/Theme';
import { ErrorBoundary } from 'react-error-boundary';
import history from '@mapstore/framework/stores/History';
import ErrorFallback from './ErrorFallback';

export const withRoutes = (routes) => (Component) => {
    const WithRoutes = forwardRef((props, ref) => {
        return <Component { ...props } routes={routes} ref={ref} />;
    });
    return WithRoutes;
};

const Router = forwardRef(({
    plugins,
    locale,
    routes,
    className,
    pluginsConfig,
    themeCfg,
    loaderComponent
}, ref) => {
    const [loading, setLoading] = useState(true);
    const Loader = loaderComponent;
    return (
        <Theme
            { ...themeCfg }
            onLoad={() => setLoading(false)}
        >
            {loading
                ? <Loader />
                : <div
                    className={className}
                    ref={ref}
                >
                    <Localized
                        messages={locale.messages}
                        locale={locale.current}
                        loadingError={locale.localeError}
                    >
                        <ConnectedRouter history={history}>
                            <ErrorBoundary
                                FallbackComponent={ErrorFallback}
                                onError={e => {
                                    /* eslint-disable no-console */
                                    console.error(e);
                                    /* eslint-enable no-console */
                                }}>
                                {routes.map((route, i) => {
                                    const routeConfig = route.pageConfig || {};
                                    const Component = connect(() => ({
                                        plugins,
                                        pluginsConfig,
                                        ...routeConfig
                                    }))(route.component);
                                    return (
                                        <Route
                                            key={(route.name || route.path) + i}
                                            exact
                                            path={route.path}
                                            component={Component}
                                        />
                                    );
                                })}
                            </ErrorBoundary>
                        </ConnectedRouter>
                    </Localized>
                    <Debug />
                </div>}
        </Theme>
    );
});

Router.propTypes = {
    plugins: PropTypes.object,
    locale: PropTypes.object,
    className: PropTypes.string,
    pluginsConfig: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};

Router.defaultProps = {
    plugins: {},
    locale: {
        messages: {},
        current: 'en-US'
    },
    className: 'app-router'
};

export default Router;
