/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Rx from 'rxjs';
import { Button, Glyphicon } from 'react-bootstrap';
import ContainerDimensions from 'react-container-dimensions';

import Message from '../../../MapStore2/web/client/components/I18N/Message';

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
    const [viewportHeight, setViewportHeight] = React.useState(document.documentElement.clientHeight);

    React.useEffect(() => {
        const sub = Rx.Observable.fromEvent(window, 'resize').debounceTime(150).subscribe(() => {
            setViewportHeight(document.documentElement.clientHeight);
        });
        return () => sub.unsubscribe();
    }, []);

    React.useEffect(() => {
        if (featureGridIsOpen && meteoblueChildContainerRef.current) {
            const dockHeight = viewportHeight * featureGridDockSize;
            const childContainerHeight = meteoblueChildContainerRef.current.clientHeight;

            setMeteoblueChildHeight((1 - dockHeight / childContainerHeight) * 100);
        } else {
            setMeteoblueChildHeight(100);
        }
    }, [viewportHeight, featureGridDockSize, featureGridIsOpen]);

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
                    <ContainerDimensions>
                        {children}
                    </ContainerDimensions>
                </div>
            </div>
        </div>
    );
};
