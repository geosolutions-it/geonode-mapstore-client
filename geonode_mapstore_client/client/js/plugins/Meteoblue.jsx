/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ContainerDimensions from 'react-container-dimensions';
import { Glyphicon } from 'react-bootstrap';

import Meteoblue from '../components/meteoblue/Meteoblue';
import DockPanel from '../../MapStore2/web/client/components/misc/panels/DockPanel';
import Message from '../../MapStore2/web/client/components/I18N/Message';

import {
    controlPanelEnabledSelector,
    mapClickEnabledSelector,
    dockSizeSelector
} from '../selectors/meteoblue';
import {
    isFeatureGridOpen,
    getDockSize as featureGridDockSizeSelector
} from '../../MapStore2/web/client/selectors/featuregrid';

import {
    setMapClick,
    setDockSize
} from '../actions/meteoblue';
import {
    setControlProperty
} from '../../MapStore2/web/client/actions/controls';

import meteoblue from '../reducers/meteoblue';
import * as epics from '../epics/meteoblue';

import { createPlugin } from '../../MapStore2/web/client/utils/PluginsUtils';

const MeteoblueComponent = ({
    active,
    pluginWidth = 880,
    width,
    panelGlyph = 'info-sign',
    featureGridIsOpen,
    featureGridDockSize,
    dockStyle,
    dockSize,
    mapClickEnabled,
    onEnableMapClick = () => {},
    onDisableMapClick = () => {},
    onClose = () => {},
    onDockResize = () => {}
}) => {
    React.useEffect(() => {
        onDockResize(pluginWidth / width > 1 ? width : pluginWidth);
    }, [pluginWidth, width, onDockResize]);

    return (
        <DockPanel
            open={active}
            size={dockSize}
            position="right"
            bsStyle="primary"
            title={<Message msgId="meteoblue.title"/>}
            onClose={onClose}
            glyph={panelGlyph}
            zIndex={1029}
            style={dockStyle}>
            <Meteoblue
                mapClickEnabled={mapClickEnabled}
                featureGridIsOpen={featureGridIsOpen}
                featureGridDockSize={featureGridDockSize}
                onToggleMapClick={() => mapClickEnabled ? onDisableMapClick() : onEnableMapClick()}/>
        </DockPanel>
    );
};

const MeteobluePlugin = ({width: pluginWidth, ...props}) => <ContainerDimensions><MeteoblueComponent {...props} pluginWidth={pluginWidth}/></ContainerDimensions>;

export default createPlugin('Meteoblue', {
    component: connect(createStructuredSelector({
        active: controlPanelEnabledSelector,
        mapClickEnabled: mapClickEnabledSelector,
        featureGridIsOpen: isFeatureGridOpen,
        featureGridDockSize: featureGridDockSizeSelector,
        dockSize: dockSizeSelector
    }), {
        onEnableMapClick: setMapClick.bind(null, true),
        onDisableMapClick: setMapClick.bind(null, false),
        onClose: setControlProperty.bind(null, 'meteoblue', 'enabled', false),
        onDockResize: setDockSize
    })(MeteobluePlugin),
    containers: {
        BurgerMenu: {
            name: 'meteoblue',
            position: 40,
            text: <Message msgId="meteoblue.title"/>,
            icon: <Glyphicon glyph="info-sign"/>,
            action: setControlProperty.bind(null, 'meteoblue', 'enabled', true)
        }
    },
    reducers: {
        meteoblue
    },
    epics
});
