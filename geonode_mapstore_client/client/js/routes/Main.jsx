/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from '@js/components/Search';
import BrandNavbar from '@js/components/BrandNavbar';
import DetailPanel from '@js/components/DetailPanel';
import FeaturedItems from '@js/components/FeaturedItems';
import CardGrid from '@js/components/CardGrid';
import { generateRandomTileData, generateFeaturedItemData } from '@js/mockData';

function Main() {

    let [detailsPanelShown, setDetailsPanelShown] = useState(false);
    let [selectedItem, setSelectedItem] = useState();
    let [tileData, setTileData] = useState(generateRandomTileData(70));
    let [featuredItemsData, setFeaturedItemsData] = useState(generateFeaturedItemData());

    const onTileClick = (tileID) => {
        setDetailsPanelShown(true);
        setSelectedItem(tileData[tileID]);
    }

    const onDetailsPanelClose = () => {
        setDetailsPanelShown(false);
    }

    let className = detailsPanelShown ? "gn-panel-shown-container" : "gn-panel-hidden-container";
    return (
        <>
            <div className={className}>
                <BrandNavbar panelShown={detailsPanelShown}></BrandNavbar>
                <Search panelShown={detailsPanelShown}></Search>
                <FeaturedItems 
                    panelShown={detailsPanelShown}
                    data={featuredItemsData}>
                </FeaturedItems>
                <CardGrid
                    className="bg-light"
                    data={tileData}
                    onTileClick={onTileClick}
                    detailsShown={detailsPanelShown} 
                    selected={selectedItem}>
                </CardGrid>
            </div>
            <DetailPanel
                onClose={onDetailsPanelClose}
                selected={selectedItem}
                isShown={detailsPanelShown}>
            </DetailPanel>
        </>
    );
}
Main.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array
};
export default Main;
