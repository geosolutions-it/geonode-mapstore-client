/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ActionNavbar from '@js/components/ActionNavbar';
import usePluginItems from '@js/hooks/usePluginItems';
import { getResourcePerms } from '@js/selectors/gnresource';
import { hasPermissionsTo, reduceArrayRecursive } from '@js/utils/MenuUtils';

function checkResourcePerms(menuItem, resourcePerms) {
    if (menuItem.type && menuItem.perms) {
        return hasPermissionsTo(resourcePerms, menuItem.perms, 'resource');
    }
    return true;
}
function ActionNavbarPlugin({
    items,
    leftMenuItems,
    rightMenuItems,
    resourcePerms
}, context) {

    const { loadedPlugins } = context;
    const configuredItems = usePluginItems({ items, loadedPlugins });
    const leftMenuConfiguredItems = configuredItems
        .filter(({ target }) => target === 'leftMenuItem')
        .map(({ Component }) => ({ type: 'custom', labelId: "gnviewer.edit", Component }));

    const rightMenuConfiguredItems = configuredItems
        .filter(({ target }) => target === 'rightMenuItem')
        .map(({ Component }) => ({ type: 'custom',  Component }));

    const leftItems = reduceArrayRecursive(
        [...leftMenuConfiguredItems, ...leftMenuItems],
        menuItem => checkResourcePerms(menuItem, resourcePerms)
    );
    const rightItems = reduceArrayRecursive(
        [...rightMenuConfiguredItems, ...rightMenuItems],
        menuItem => checkResourcePerms(menuItem, resourcePerms)
    );

    return (

        <ActionNavbar
            leftItems={leftItems}
            rightItems={rightItems}
        />
    );
}

ActionNavbarPlugin.propTypes = {
    items: PropTypes.array,
    leftMenuItems: PropTypes.array,
    rightMenuItems: PropTypes.array
};

ActionNavbarPlugin.defaultProps = {
    items: [],
    leftMenuItems: [],
    rightMenuItems: []
};

const ConnectedActionNavbarPlugin = connect(
    createSelector([
        getResourcePerms
    ], (resourcePerms) => ({
        resourcePerms
    }))
)(ActionNavbarPlugin);

export default createPlugin('ActionNavbar', {
    component: ConnectedActionNavbarPlugin,
    containers: {
        ViewerLayout: {
            priority: 1,
            target: 'header'
        }
    },
    epics: {},
    reducers: {}
});
