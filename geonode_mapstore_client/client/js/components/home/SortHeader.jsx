/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Dropdown } from 'react-bootstrap-v1';

function SortHeader({
    title,
    orderOptions,
    formatHref,
    theme
}) {
    return (
        <div className="gn-sort-header">
            <div className="gn-sort-header-title">{title}</div>
            <Dropdown alignRight>
                <Dropdown.Toggle
                    id="dropdown-basic"
                    variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
                >
                    Order
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {orderOptions.map(({ label, value }) => {
                        return (
                            <Dropdown.Item
                                key={value}
                                href={formatHref({
                                    query: {
                                        sort: [value]
                                    },
                                    replaceQuery: true
                                })}
                            >
                                {label}
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

SortHeader.defaultProps = {
    title: '',
    orderOptions: [
        {
            label: 'Most recent',
            value: '-date'
        },
        {
            label: 'Less recent',
            value: 'date'
        },
        {
            label: 'A Z',
            value: 'title'
        },
        {
            label: 'Z A',
            value: '-title'
        },
        {
            label: 'Most popular',
            value: 'popular_count'
        }
    ],
    formatHref: () => '#'
};

export default SortHeader;
