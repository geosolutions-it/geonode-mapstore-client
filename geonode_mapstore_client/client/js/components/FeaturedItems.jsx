/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';

function FeaturedItems(props) {

    const MIN_OFFSET = 30;
    const INITIAL_OFFSET = 500;
    const INITIAL_OPACITY = 1;
    const MOVEMENT_START = 30;

    let [containerOffset, setContainerOffset] = useState(INITIAL_OFFSET);
    let [containerOpacity, setContainerOpacity] = useState(INITIAL_OPACITY);

    const onLoad = ()=> {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    const handleScroll = () => {

        let offset = window.scrollY;
        if (offset < MOVEMENT_START)
            return;

        offset = offset - MOVEMENT_START;

        let opacity = (1 - offset / 360);
        if (opacity < 0)
            opacity = 0;
        
        offset = INITIAL_OFFSET - offset/1.5;
        if (offset < MIN_OFFSET)
            offset = MIN_OFFSET;

        setContainerOffset(offset);
        setContainerOpacity(opacity);
    }
    useEffect(onLoad, []);
    let c = props.panelShown ? "gn-panel-shown-container" : "gn-panel-hidden-container";
    if (containerOpacity < 0.3)
        c += " d-none";
    return (
        <div
            style={{width: props.width, opacity:containerOpacity, top: containerOffset}} 
            className={"position-fixed text-center " + c}>
            <h4 className="text-muted">Featured Datasets</h4>
            <div
                className="d-flex justify-content-center p-2">
                {props.data.map((v, i)=>  (
                    <div className="gn-featured-item m-1 border">
                        <img
                            key={i}
                            className="w-100 h-100"
                            style={{objectFit:"cover"}}
                            src={v.img}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedItems;
