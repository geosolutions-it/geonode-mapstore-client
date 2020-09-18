/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Button, Badge } from 'react-bootstrap-v1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { hashLocationToHref } from '@js/utils/GNSearchUtils';
import UserSign from '@js/components/UserSign';

function DetailPanel({
    resource,
    onClose,
    filters,
    location
}) {
    return (
        <section>
            <Button
                onClick={onClose}
                variant="outline-secondary"
                href={hashLocationToHref({
                    location,
                    pathname: '/search/'
                })}
                size="sm">
                <FontAwesomeIcon icon={faTimes}/>
            </Button>
            {resource.thumbnail_url && <div style={{
                position: 'relative',
                paddingTop: '56.25%'
            }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    backgroundImage: 'url(' + resource.thumbnail_url + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>}
            <div><small>{resource.polymorphic_ctype}</small></div>
            <h1>{resource.title}</h1>
            <p>
                <div><small>{resource.date_type} : {resource.date}</small></div>
                <div><small>last update : {resource.last_updated}</small></div>
            </p>
            <p>
                <div>category: {resource.category?.identifier}</div>
                <div>keywords: {resource.keywords?.map(({ name }) =>
                    <Badge
                        variant={filters.find(({ key, value }) => key === 'filter{keywords.name.in}' && value === name) ? "primary" : "outline-primary"}
                        as="a"
                        className="mr-1"
                        href={hashLocationToHref({
                            location,
                            query: {
                                'filter{keywords.name.in}': name
                            }
                        })}
                    >
                        {name}
                    </Badge>)}</div>
                <div>regions: {resource.regions?.map(({ name }) =>
                    <Badge variant={filters.find(({ key, value }) => key === 'filter{regions.name.in}' && value === name) ? "primary" : "outline-primary"}
                        as="a"
                        className="mr-1"
                        href={hashLocationToHref({
                            location,
                            query: {
                                'filter{regions.name.in}': name
                            }
                        })}>
                        {name}
                    </Badge>)}</div>
            </p>
            <p>{resource.abstract}</p>
            <p>
                <div>owner: <UserSign data={resource.owner} /></div>
                <div>metadata author: <UserSign data={resource.metadata_author} /></div>
                <div>poc: <UserSign data={resource.poc} /></div>
            </p>
        </section>
    );
}

DetailPanel.defaultProps = {
    onClose: () => {}
};

export default DetailPanel;
