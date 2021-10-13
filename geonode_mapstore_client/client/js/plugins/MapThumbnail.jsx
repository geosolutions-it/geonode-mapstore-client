/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import FaIcon from '@js/components/FaIcon';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';
import Loader from '@mapstore/framework/components/misc/Loader';
import Button from '@js/components/Button';
import { isLoggedIn } from '@mapstore/framework/selectors/security';
import controls from '@mapstore/framework/reducers/controls';
import gnresource from '@js/reducers/gnresource';
import gnsave from '@js/reducers/gnsave';
import gnsaveEpics from '@js/epics/gnsave';
import { setMapThumbnail } from '@js/actions/gnresource';
import Message from '@mapstore/framework/components/I18N/Message';
import tooltip from '@mapstore/framework/components/misc/enhancers/tooltip';
const MapThumbnailButtonToolTip = tooltip(Button);

import {
    isNewResource,
    canEditResource
} from '@js/selectors/resource';


function MapThumbnail(props) {
    return props.saving ? (<div
        style={{ position: 'absolute', width: '100%',
            height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.75)',
            top: '0px', zIndex: 1000, display: 'flex',
            alignItems: 'center', justifyContent: 'center', right: '0px'}}>
        <Loader size={150}/>
    </div>) : null

    ;
}

const MapThumbnailPlugin = connect(
    createSelector([
        state => state?.gnsave?.saving
    ], (saving) => ({
        saving
    }))
)(MapThumbnail);

function MapThumbnailButton({
    enabled,
    onClick
}) {
    return enabled
        ?
        <MapThumbnailButtonToolTip
            variant="default"
            onClick={() => onClick()}
            className={"map-thumbnail"}
            tooltip={  <Message msgId="gnviewer.saveMapThumbnail"/>  }
            tooltipPosition={"top"}

        >
            <FaIcon name="map" />

        </MapThumbnailButtonToolTip>

        : null
    ;
}


const ConnectedMapThumbnailButton = connect(
    createSelector(
        isLoggedIn,
        isNewResource,
        canEditResource,
        mapInfoSelector,
        (loggedIn, isNew, canEdit, mapInfo) => ({
            enabled: loggedIn && !isNew && (canEdit || mapInfo?.canEdit)
        })
    ),
    {
        onClick: setMapThumbnail
    }
)((MapThumbnailButton));

export default createPlugin('MapThumbnail', {
    component: MapThumbnailPlugin,
    containers: {
        DetailViewer: {
            name: 'MapThumbnail',
            target: 'saveThumbnailMap',
            Component: ConnectedMapThumbnailButton
        }
    },
    epics: {
        ...gnsaveEpics
    },
    reducers: {
        gnresource,
        gnsave,
        controls
    }
});
