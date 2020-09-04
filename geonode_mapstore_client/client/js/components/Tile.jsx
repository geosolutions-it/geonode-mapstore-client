/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faMapMarked, faFileAlt, faGlobeAmericas, faLayerGroup, 
            faColumns, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function Tile(props) {
    
    const onTileClick = ()=> {
        props.onTileClick(props.data.index);
    }

    const type2name = {
        "map": ["Map", faMapMarked],
        "geostory": ["GeoStory", faGlobeAmericas],
        "dashboard": ["Dashboard", faColumns],
        "layer": ["Layer", faLayerGroup],
        "document": ["Document", faFileAlt],
    }

    return (
        <div 
            style={{overflow:"hidden", borderRadius:"0.4rem"}}
            onClick={onTileClick} 
            className="m-2 gn-tile shadow-sm border">
            <div className="gn-tile-image-container w-100">
                <img
                    className="w-100 h-100"
                    style={{objectFit:"cover"}}
                    src={props.data.img}/>
            </div>
            <div 
                style={{height:90, borderBottomLeftRadius:"0.4rem", borderBottomRightRadius:"0.4rem", overflow:"hidden"}}
                className="w-100 p-2 bg-white">
                    <div className="w-100 text-muted d-none d-sm-block">
                        <small>{props.data.category.toUpperCase()}</small>
                    </div>
                    <div className="gn-tile-title text-truncate">
                        <b>{props.data.title}</b>
                    </div>
                    <div className="text-muted mt-1">
                        <FontAwesomeIcon 
                            icon={type2name[props.data.type][1]}>
                        </FontAwesomeIcon>
                        <small className="ml-2">
                            <span>{props.data.name}</span>
                        </small>
                        <FontAwesomeIcon
                            className="float-right mr-1 mt-2"
                            icon={faEllipsisH}
                        ></FontAwesomeIcon>
                    </div>
            </div>
        </div>
    );
}

export default Tile;