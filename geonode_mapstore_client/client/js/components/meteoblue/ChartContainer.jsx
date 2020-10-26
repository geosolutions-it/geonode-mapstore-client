/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { toPairs } from 'lodash';

import Loader from '../../../MapStore2/web/client/components/misc/Loader';

import Chart from '../Chart';

const ChartContainer = ({
    loading,
    width,
    height,
    charts = [],
    onChartInitialized = () => {},
    onChartUpdate = () => {}
}) => {
    const [currentHeight, setCurrentHeight] = React.useState();
    const [heightTimeoutID, setHeightTimeoutID] = React.useState();

    const validCharts = toPairs(charts).filter((chartPair) => !!chartPair[1]);

    React.useEffect(() => {
        if (heightTimeoutID) {
            clearTimeout(heightTimeoutID);
        }
        setHeightTimeoutID(setTimeout(() => {
            setCurrentHeight(height);
        }, 150));
    }, [height]);

    return (
        loading ? <div className="ms-meteoblue-charts-loading"><Loader size={Math.min(currentHeight, width) * 0.7}/></div> :
            <div className="ms-meteoblue-charts-container">
                {validCharts.map(([chartName, chartData]) =>
                    <Chart key={chartName} {...chartData}
                        availableHeight={currentHeight && (currentHeight / validCharts.length - 10)}
                        onInitialized={chart => onChartInitialized(chartName, chart)}
                        onUpdate={chart => onChartUpdate(chartName, chart)}/>)}
            </div>
    );
};

export default ChartContainer;
