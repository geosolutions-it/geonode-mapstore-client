/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect, useRef, memo } from 'react';
import castArray from 'lodash/castArray';
import { Form, Col, Button } from 'react-bootstrap-v1';
import ReactSelect from 'react-select';
import Message from '@mapstore/framework/components/I18N/Message';
import localizedProps from '@mapstore/framework/components/misc/enhancers/localizedProps';
import FaIcon from '@js/components/home/FaIcon';
import FilterByExtent from '@js/components/home/FilterByExtent';
import { getFilterLabelById } from '@js/utils/GNSearchUtils';
import FilterLinks from '@js/components/home/FilterLinks';

const SelectSync = localizedProps('placeholder')(ReactSelect);
const SelectAsync = localizedProps('placeholder')(ReactSelect.Async);

function FilterForm({
    id,
    show,
    style,
    styleContanierForm,
    query,
    fields,
    links,
    onChange,
    onClose,
    extentProps,
    suggestionsRequestTypes
}) {

    const [values, setValues] = useState({});
    const state = useRef({});
    state.current = {
        query,
        fields,
        values
    };

    useEffect(() => {
        const newValues = state.current.fields.reduce((acc, { id: formId, suggestionsRequestKey }) => {
            const filterKey = suggestionsRequestKey
                ? suggestionsRequestTypes[suggestionsRequestKey]?.filterKey
                : `filter{${formId}.in}`;
            if (filterKey && !state.current.query[filterKey]) {
                return acc;
            }
            return {
                ...acc,
                [filterKey]: (filterKey) ? castArray(state.current.query[filterKey]) : []
            };
        }, {});
        setValues({
            ...newValues,
            ...(query?.extent && { extent: query.extent })
        });
    }, [show, query]);

    function handleApply() {
        onChange(values);
    }

    function handleClear() {
        const emptyValues = Object.keys(values).reduce((acc, filterKey) => {
            if (filterKey === 'extent') {
                return {
                    ...acc,
                    [filterKey]: undefined
                };
            }
            return {
                ...acc,
                [filterKey]: []
            };
        }, {});
        setValues(emptyValues);
        onChange(emptyValues);
    }

    if (!show) {
        return null;
    }

    return (
        <div className="gn-filter-form" style={styleContanierForm} >
            <div className="gn-filter-form-header">
                <div className="gn-filter-form-title"><Message msgId="gnhome.advancedSearch"/></div>
                <Button
                    variant="default"
                    onClick={() => onClose()}
                >
                    <FaIcon name="times"/>
                </Button>
            </div>
            <div className="gn-filter-form-body">

                {

                    (links) &&   links.map((types) => (
                        <FilterLinks className="gn-filter-link" blockName={Object.keys(types)} items={types[Object.keys(types)]} />
                    ))
                }

                <Form
                    style={style}
                >
                    <Form.Row>
                        <Col>
                            {fields.map(({
                                id: formId,
                                labelId,
                                label,
                                placeholderId,
                                description,
                                options,
                                suggestionsRequestKey
                            }) => {
                                const key = `${id}-${formId || suggestionsRequestKey}`;
                                const filterKey = suggestionsRequestKey
                                    ? suggestionsRequestTypes[suggestionsRequestKey]?.filterKey
                                    : `filter{${formId}.in}`;

                                const currentValues = suggestionsRequestKey
                                    ? values[suggestionsRequestTypes[suggestionsRequestKey]?.filterKey] || []
                                    : values[filterKey] || [];

                                const optionsProp = suggestionsRequestKey
                                    ? { loadOptions: suggestionsRequestTypes[suggestionsRequestKey]?.loadOptions }
                                    : { options: options.map(option => ({ value: option, label: option })) };
                                const Select = suggestionsRequestKey ? SelectAsync : SelectSync;
                                return (
                                    <Form.Group
                                        key={key}
                                        controlId={key}
                                    >
                                        <Form.Label><strong>{labelId ? <Message msgId={labelId}/> : label}</strong></Form.Label>
                                        <Select
                                            value={currentValues.map((value) => ({ value, label: getFilterLabelById(filterKey, value) || value }))}
                                            multi
                                            placeholder={placeholderId}
                                            onChange={(selected) => {
                                                setValues({
                                                    ...state.current.values,
                                                    [filterKey]: selected.map(({ value }) => value)
                                                });
                                            }}
                                            { ...optionsProp }
                                        />
                                        {description &&
                                        <Form.Text className="text-muted">
                                            {description}
                                        </Form.Text>}
                                    </Form.Group>
                                );
                            })}

                            <FilterByExtent
                                id={id}
                                extent={values.extent}
                                queryExtent={query.extent}
                                layers={extentProps?.layers}
                                vectorLayerStyle={extentProps?.style}
                                onChange={({extent}) =>
                                    setValues({
                                        ...values,
                                        extent
                                    })
                                }
                            />

                        </Col>
                    </Form.Row>
                </Form>
            </div>
            <div className="gn-filter-form-footer">
                <Button
                    variant="primary"
                    onClick={handleApply}
                >
                    <Message msgId="gnhome.apply"/>
                </Button>
                <Button
                    variant="default"
                    onClick={handleClear}
                >
                    <Message msgId="gnhome.clearFilters"/>
                </Button>
            </div>
        </div>
    );
}

FilterForm.defaultProps = {
    fields: [],
    onChange: () => {},
    suggestionsRequestTypes: {}
};

const arePropsEqual = (prevProps, nextProps) => {
    return prevProps.styleContanierForm === nextProps.styleContanierForm;
};


export default memo(FilterForm, arePropsEqual);
