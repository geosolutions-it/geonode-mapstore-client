/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

import Message from '../../../MapStore2/web/client/components/I18N/Message';
import ConfigUtils from '../../../MapStore2/web/client/utils/ConfigUtils';

export default ({
    mapClickEnabled,
    featureGridIsOpen,
    featureGridDockSize,
    mapClickButtonGlyph = 'info-sign',
    mapClickButtonMessage = <Message msgId="meteoblue.mapClickButton"/>,
    onToggleMapClick = () => {},
    children
}) => {
    const meteoblueChildContainerRef = React.useRef();
    const [meteoblueChildHeight, setMeteoblueChildHeight] = React.useState(100);

    React.useEffect(() => {
        if (featureGridIsOpen && meteoblueChildContainerRef.current) {
            const vh = document.documentElement.clientHeight;
            const dockHeight = vh * featureGridDockSize;
            const childContainerHeight = meteoblueChildContainerRef.current.clientHeight;

            setMeteoblueChildHeight((1 - dockHeight / childContainerHeight) * 100);
        } else {
            setMeteoblueChildHeight(100);
        }
    }, [featureGridDockSize, featureGridIsOpen, setMeteoblueChildHeight]);

    return (
        <div className="ms-meteoblue-panel">
            <div className="ms-meteoblue-button-container">
                <Button bsStyle={mapClickEnabled ? 'success' : 'primary'} onClick={onToggleMapClick}>
                    <Glyphicon glyph={mapClickButtonGlyph}/>
                </Button>
                {mapClickButtonMessage}
            </div>
            <div ref={meteoblueChildContainerRef} className="ms-meteoblue-child-container">
                <div style={{height: `${meteoblueChildHeight}%`}} className="ms-meteoblue-child">
                    {children}
                </div>
            </div>
        </div>
    );
};
