/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import PropTypes from 'prop-types';
import MapStorePluginsContainer from 'mapstore-sdk/plugins/PluginsContainer';
import useLazyPlugins from 'mapstore-sdk/plugins/hooks/useLazyPlugins';
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

function Main({
    pluginsConfig
}) {

    const { plugins } = useLazyPlugins({
        pluginsEntries,
        pluginsConfig
    });

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
                        <MapStorePluginsContainer
                            key="plugins-container-main"
                            id="plugins-container-main"
                            className="plugins-container plugins-container-main msgapi"
                            plugins={plugins}
                            pluginsConfig={pluginsConfig}
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
