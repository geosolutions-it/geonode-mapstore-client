/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { toPairs } from 'lodash';

import loadingState from '../../../MapStore2/web/client/components/misc/enhancers/loadingState';

import Chart from '../Chart';

const ChartContainer = ({
    height,
    charts = [],
    onChartInitialized = () => {},
    onChartUpdate = () => {}
}) => {
    const [currentHeight, setCurrentHeight] = React.useState();
    const [heightTimeoutID, setHeightTimeoutID] = React.useState();

    const validCharts = toPairs(charts).filter(([_, chartData]) => !!chartData);

    React.useEffect(() => {
        if (heightTimeoutID) {
            clearTimeout(heightTimeoutID);
        }
        setHeightTimeoutID(setTimeout(() => {
            setCurrentHeight(height);
        }, 150));
    }, [height]);

    return (
        <div className="ms-meteoblue-charts-container">
            {validCharts.map(([chartName, chartData]) =>
                <Chart {...chartData}
                    availableHeight={currentHeight && (currentHeight / validCharts.length - 10)}
                    onInitialized={chart => onChartInitialized(chartName, chart)}
                    onUpdate={chart => onChartUpdate(chartName, chart)}/>)}
        </div>
    );
};

export default loadingState()(ChartContainer);
