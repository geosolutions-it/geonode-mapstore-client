/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Tile from './Tile';

function CardGrid(props) {
    
    let onTileClick = (id)=> {
        props.onTileClick(id);
    }

    return (
        <div
            // !TODO use bootstrap equivalent of this styles
            style={{display:"flex", justifyContent:"center"}} 
            className="pt-2 bg-light flex-wrap">
            {props.data.map((v,i)=>  (
                <Tile
                    key={i}
                    data={v}
                    onTileClick={onTileClick}>
                </Tile>
            ))}
        </div>
    );
}   

export default CardGrid;
