/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import castArray from 'lodash/castArray';
import { Form, Col, Button } from 'react-bootstrap-v1';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import FilterByExtent from '@js/components/home/FilterByExtent';
import Tag from '@js/components/home/Tag';

function FilterForm({
    id,
    style,
    query,
    customFilters,
    fields,
    formatHref,
    onChange
}) {

    const [open, setOpen] = useState();

    const filters = Object.keys(query).reduce((acc, key) => key.indexOf('filter') === 0
        ? [...acc, ...castArray(query[key]).map((value) => ({ key, value })) ]
        : acc, []);

    return (
        <>
        <div className="gn-filter-form-top">
            <div className="gn-filter-form-buttons">
                {customFilters.map(({ id: filterId, label }) => {
                    return (<Tag
                        key={filterId}
                        active={castArray(query.f || []).find(value => value === filterId)}
                        href={formatHref({
                            query: { f: filterId }
                        })}>
                        {label}
                    </Tag>);
                })}
            </div>
            <Button
                variant="outline-light"
                onClick={() => setOpen(!open)}
            >
                <FontAwesomeIcon
                    icon={open ? faTimes : faFilter}
                />
            </Button>
        </div>
        {open
            ? <Form
                style={style}
                className="gn-filter-form"
            >
                <Form.Row>
                    <Col>
                        {fields.map(({
                            id: formId,
                            label,
                            placeholder,
                            description,
                            options
                        }) => {
                            const key = `${id}-${formId}`;
                            const filterKey = `filter{${formId}.in}`;
                            const values = castArray(query[filterKey] || [])
                                .map((value) => ({
                                    value,
                                    label: value
                                }));
                            return (
                                <Form.Group
                                    key={key}
                                    controlId={key}
                                >
                                    <Form.Label>{label}</Form.Label>
                                    <Select
                                        value={values}
                                        options={options.map(option => ({
                                            value: option,
                                            label: option
                                        }))}
                                        multi
                                        placeholder={placeholder}
                                        onChange={(selected) => {
                                            onChange({ [filterKey]: selected.map(({ value }) => value)});
                                        }}
                                    />
                                    {description &&
                                        <Form.Text className="text-muted">
                                            {description}
                                        </Form.Text>}
                                </Form.Group>
                            );
                        })}
                    </Col>
                    <Col>
                        <FilterByExtent
                            id={id}
                            extent={query.extent}
                            onChange={onChange}
                        />
                    </Col>
                </Form.Row>
            </Form>
            : <div
                className="gn-filter-form-bottom">
                {filters.map(({ key, value }) => {
                    return (<Tag
                        active
                        href={formatHref({
                            query: { [key]: value }
                        })}>
                        {value}
                    </Tag>);
                })}
            </div>}
        </>
    );
}

FilterForm.defaultProps = {
    id: 'gn-filter-form',
    customFilters: [
        {
            id: 'landuse',
            label: 'Landuse',
            query: {
                'filter{keywords.name.in}': ['landuse', 'land'],
                'filter{regions.name}': ['Africa']
            }
        },
        {
            id: 'water',
            label: 'Water',
            query: {
                'filter{category.identifier.in}': ['water', 'river', 'lake'],
                'filter{regions.name}': ['Global']
            }
        }
    ],
    fields: [
        {
            id: 'polymorphic_ctype_id',
            label: 'Resource type',
            placeholder: 'Select resource types',
            type: 'select',
            options: ['58', '52', '57']
        },
        {
            id: 'category.identifier',
            label: 'Category',
            placeholder: 'Select categories',
            type: 'select',
            options: ['boundaries', 'society']
        },
        {
            id: 'keywords.name',
            label: 'Keywords',
            placeholder: 'Select keywords',
            type: 'select',
            options: ['features', 'test', 'map']
        },
        {
            id: 'regions.name',
            label: 'Regions',
            placeholder: 'Select regions',
            type: 'select',
            options: ['Global', 'Africa', 'Central Africa', 'West AfricaPacific', 'Kiribati']
        },
        {
            id: 'owner.username',
            label: 'Owner',
            placeholder: 'Select owner',
            type: 'select',
            options: ['admin']
        }
    ],
    formatHref: () => '#'
};

export default FilterForm;
