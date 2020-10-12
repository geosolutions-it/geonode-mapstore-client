/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PlotlyChartBase from 'react-plotly.js';
import { isNil } from 'lodash';

import loadingState from '../../MapStore2/web/client/components/misc/enhancers/loadingState';

import Toolbar from '../../MapStore2/web/client/components/misc/toolbar/Toolbar';

import {
    setFigureSize
} from '../utils/ChartUtils';

const PlotlyChart = loadingState()(PlotlyChartBase);

const Chart = ({
    className = "ms-plotly-chart-container",
    availableHeight,
    minChartHeight = 420,
    currentTimeWindow,
    timeWindows = [],
    figure = {},
    onInitialized = () => {},
    onUpdate = () => {},
    ...props
}) => {
    const headerRef = React.useRef();

    React.useEffect(() => {
        if (headerRef.current) {
            let newHeight = !isNil(availableHeight) ? availableHeight - headerRef.current.clientHeight : figure.layout?.height;
            newHeight = newHeight < minChartHeight ? minChartHeight : newHeight;

            if (newHeight !== figure.layout?.height) {
                onUpdate({figure: setFigureSize(headerRef.current.clientWidth - 10, newHeight, figure)});
            }
        }
    }, [availableHeight, minChartHeight, figure]);

    return (
        <div className={className}>
            <div ref={headerRef} className="ms-chart-header">
                <Toolbar
                    btnDefaultProps={{
                        className: 'no-border'
                    }}
                    buttons={timeWindows.map(twProps => ({
                        text: twProps.title,
                        bsStyle: currentTimeWindow === twProps.name ? 'success' : undefined,
                        onClick: () => onUpdate({currentTimeWindow: twProps.name})
                    }))}/>
            </div>
            <PlotlyChart
                {...figure}
                {...props}
                loaderProps={{width: figure.layout?.height || 150, height: figure.layout?.height || 150}}
                onInitialized={newFigure => onInitialized({title, currentTimeWindow, timeWindows, figure: newFigure})}
                onUpdate={newFigure => onUpdate({figure: newFigure})}/>
        </div>
    );
};

export default Chart;
