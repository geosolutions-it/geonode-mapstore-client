/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MapStorePluginsContainer from 'mapstore-sdk/plugins/PluginsContainer';
import useLazyPlugins from 'mapstore-sdk/plugins/hooks/useLazyPlugins';
import Map from 'mapstore-sdk/components/Map';
import BrandNavbar from '@js/components/BrandNavbar';
import {
    FormControl,
    Button,
    Jumbotron,
    CardColumns,
    Card,
    Container,
    InputGroup,
    Row,
    Col
} from 'react-bootstrap-v1';

import pluginsEntries from '@js/plugins/index';

// these actions should be included in the sdk
import {
    addLayer,
    removeLayer
} from '@mapstore/actions/layers';

// se mapstore doc for others layer configuration
// https://mapstore.readthedocs.io/en/latest/developer-guide/maps-configuration/
const mockLayersForMapComponent = [
    {
        id: 'osm-1',
        type: 'osm',
        title: 'Open Street Map',
        name: 'mapnik',
        source: 'osm',
        group: 'background',
        visibility: true
    }
];

const mockLayersForMapPlugin = [
    {
        id: 'layer-1',
        format: 'image/jpeg',
        group: 'background',
        name: 's2cloudless:s2cloudless',
        opacity: 1,
        title: 'Sentinel 2 Cloudless',
        thumbURL: '',
        type: 'wms',
        url: [
            'https://maps1.geosolutionsgroup.com/geoserver/wms',
            'https://maps2.geosolutionsgroup.com/geoserver/wms',
            'https://maps3.geosolutionsgroup.com/geoserver/wms',
            'https://maps4.geosolutionsgroup.com/geoserver/wms',
            'https://maps5.geosolutionsgroup.com/geoserver/wms',
            'https://maps6.geosolutionsgroup.com/geoserver/wms'
        ],
        source: 's2cloudless',
        visibility: true,
        singleTile: false,
        credits: {
            title: '<a class=\"a-light\" xmlns:dct=\"http://purl.org/dc/terms/\" href=\"https://s2maps.eu\" property=\"dct:title\">Sentinel-2 cloudless 2016</a> by <a class=\"a-light\" xmlns:cc=\"http://creativecommons.org/ns#\" href=\"https://eox.at\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">EOX IT Services GmbH</a>'
        }
    }
];

function Main({
    pluginsConfig,
    dispatch
}) {

    const { plugins, pending } = useLazyPlugins({
        pluginsEntries,
        pluginsConfig
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // layer can be added or removed to the map in the plugin container
        // using actions
        if (!pending && !loading) { // wait loading of all plugin
            dispatch(
                addLayer(mockLayersForMapPlugin[0])
            );
        }
        return () => {
            if (!pending && !loading) {
                dispatch(
                    removeLayer(mockLayersForMapPlugin[0].id)
                );
            }
        };
    }, [pending, loading]);

    return (
        <>
            <BrandNavbar />
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p> This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                </p>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col>
                        <div>Map can be imported as single component</div>
                        <Map
                            layers={mockLayersForMapComponent}
                            map={{
                                zoom: 3,
                                center: { x: 13, y: 45, crs: 'EPSG:4326' }
                            }}
                            styleMap={{
                                width: '100%',
                                height: 500
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardColumns>
                            <Card className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                </blockquote>
                            </Card>
                            <Card className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                </blockquote>
                            </Card>
                            <Card className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                </blockquote>
                            </Card>
                        </CardColumns>
                    </Col>
                    <Col>
                        <div>Map can be used inside the mapstore plugin container</div>
                        <MapStorePluginsContainer
                            key="plugins-container-main"
                            id="plugins-container-main"
                            className="plugins-container plugins-container-main msgapi"
                            plugins={plugins}
                            pluginsConfig={pluginsConfig}
                            onPluginsLoaded={() => setLoading(false)}
                        />
                    </Col>
                </Row>
            </Container>
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
