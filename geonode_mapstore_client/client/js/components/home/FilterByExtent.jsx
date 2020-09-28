
/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap-v1';
import BaseMap from '@mapstore/framework/components/map/BaseMap';
import mapType from '@mapstore/framework/components/map/enhancers/mapType';
// import { reprojectBbox } from '@mapstore/framework/utils/CoordinatesUtils';
import { boundsToExtentString } from '@js/utils/GNCoordinatesUtils';

const Map = mapType(BaseMap);
Map.displayName = 'Map';
/*
const zoomTo = {
    openlayers: ({
        map,
        bbox,
        padding,
        maxZoom,
        duration
    }) => {
        console.log('ZOOM');
        const { bounds, crs } = bbox;
        const { minx, miny, maxx, maxy } = bounds;
        const view = map.getView();
        const mapProjection = view.getProjection().getCode();
        const extent = mapProjection === crs
            ? [ minx, miny, maxx, maxy ]
            : reprojectBbox([ minx, miny, maxx, maxy ], crs, mapProjection);
        view.fit(extent, {
            size: map.getSize(),
            padding: padding && [ padding.top || 0, padding.right || 0, padding.bottom || 0, padding.left || 0],
            maxZoom,
            duration
        });
    }
};

// https://usehooks.com/usePrevious/
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [ value ]);
    return ref.current;
}

function ZoomTo({
    map,
    mapType: type,
    padding,
    bbox,
    onMoveEnd
}) {
    const state = useRef();
    state.current = {
        map,
        type,
        padding,
        bbox,
        onMoveEnd
    };
    const previousBbox = usePrevious(bbox);
    useEffect(() => {
        if (zoomTo[state.current.type] && bbox) {
            zoomTo[state.current.type](state.current);
        }
    }, [isEqual(previousBbox, bbox)]);

    const interaction = useRef();

    useEffect(() => {
        state.current.map.on('pointerup', () => {
            interaction.current = 'pointerup';
        });
        state.current.map.on('mousewheelzoom', () => {
            interaction.current = 'mousewheelzoom';
        });
        state.current.map.on('moveend', (event) => {
            const view = state.current.map.getView();
            const extent = view.calculateExtent(state.current.map.getSize());
            const crs = view.getProjection().getCode();
            state.current.onMoveEnd({
                bounds: {
                    minx: extent[0],
                    miny: extent[1],
                    maxx: extent[2],
                    maxy: extent[3]
                },
                crs,
                rotation: view.getRotation()
            }, interaction.current, event);
            interaction.current = undefined;
        });
        const canvas = state.current.map.getTargetElement();
        function onWheel() {
            interaction.current = 'wheel';
        }
        canvas.addEventListener('wheel', onWheel);
        return () => {
            canvas.removeEventListener('wheel', onWheel);
        };
    }, []);
    return null;
}

ZoomTo.defaultProps = {
    update: []
};

const drawSupports = {
    openlayers: class OpenLayersDrawSupport {
        constructor({ map }) {
            this.map = map;
        }
        destroy() {

        }
    }
};

function Draw({
    map,
    mapType: mType
}) {
    const state = useRef({});
    state.current = {
        map
    };
    const draw = useRef();
    useEffect(() => {
        draw.current = drawSupports[mType] && new drawSupports[mType](state.current);
        return () => {
            draw.current.destroy();
        };
    }, [ mType ]);
    return null;
}*/

function FilterByExtent({
    id,
    extent,
    projection,
    onChange
}) {

    const enabled = !!extent;
    const [tmpExtent, setTmpExtent] = useState();
    const isFirstMapViewChange = useRef(true);

    function handleOnSwitch(event) {
        onChange({
            extent: event.target.checked
                ? tmpExtent
                : undefined
        });
    }

    function handleOnMapViewChanges(center, zoom, bbox) {
        const { bounds, crs } = bbox;
        const newExtent = boundsToExtentString(bounds, crs);
        if (isFirstMapViewChange.current) {
            isFirstMapViewChange.current = false;
        } else if (enabled) {
            onChange({
                extent: newExtent
            });
        }
        setTmpExtent(newExtent);
    }

    return (
        <Form.Group
            key={id + '-extent'}
            controlId={id + '-extent'}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                margin: 0
            }}
        >
            <Form.Check
                checked={enabled}
                type="switch"
                id="gn-filter-by-extent-switch"
                label="Extent"
                onChange={handleOnSwitch}
            />
            <div
                className="msgapi"
                style={{
                    flex: 1,
                    opacity: enabled ? 1 : 0.4,
                    pointerEvents: enabled ? 'auto' : 'none'
                }}
            >
                <Map
                    id="gn-filter-by-extent-map"
                    mapType="openlayers"
                    map={{
                        registerHooks: false,
                        projection
                    }}
                    styleMap={{
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                    }}
                    eventHandlers={{
                        onMapViewChanges: handleOnMapViewChanges
                    }}
                    layers={[]}
                />
            </div>
            <Form.Text className="text-muted">
                Enable filter by extent
            </Form.Text>
        </Form.Group>
    );
}

FilterByExtent.defaultProps = {
    projection: 'EPSG:3857'
};

export default FilterByExtent;
