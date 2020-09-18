/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect, useRef } from 'react';
import { FormControl, ListGroup, InputGroup, Button, Spinner } from 'react-bootstrap-v1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash/debounce';

function SearchBar({
    value,
    loading,
    debounceTime,
    suggestions,
    onChange,
    onFetchSuggestions,
    variant,
    style
}) {
    const [ outline, setOutline ] = useState(false);
    const [ text, setText ] = useState(value);
    const textValue = useRef();
    textValue.current = text;

    useEffect(() => {
        if (value !== textValue.current) {
            setText(value);
        }
    }, [ value ]);

    const updateSuggestions = useRef();

    useEffect(() => {
        updateSuggestions.current = debounce((newValue) => {
            onFetchSuggestions(newValue);
        }, debounceTime);
        return () => {
            updateSuggestions.current.cancel();
        };
    }, []);

    function handleInputChange(newValue) {
        setText(newValue);
        if (newValue) {
            updateSuggestions.current.cancel();
            updateSuggestions.current(newValue);
        }
    }

    function handleChange(newValue) {
        onChange(newValue);
        setText(newValue);
    }

    function handleKeyDown(newValue, event) {
        if (event.key === 'Enter') {
            handleChange(newValue);
        }
    }

    const textVariant = {
        'primary': 'white',
        'dark': 'white',
        'light': 'dark'
    };

    return (
        <div
            className={`gn-search-bar bg-${variant} text-${textVariant[variant]}${ outline ? ' focus' : ''}`} style={style}>
            <InputGroup>
                <FormControl
                    className={`bg-${variant} text-${textVariant[variant]}`}
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={text}
                    onKeyDown={event => handleKeyDown(text, event)}
                    onChange={event => handleInputChange(event.target.value)}
                    onFocus={() => setOutline(true)}
                    onBlur={() => setOutline(false)}
                    style={{
                        outline: 'none',
                        boxShadow: 'none'
                    }}
                />
                <InputGroup.Append>
                    {text &&
                    <Button
                        onClick={() => handleChange('')}
                        variant={variant}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>}
                    <Button
                        onClick={() => handleChange(text)}
                        variant={variant}>
                        {loading
                            ? <Spinner animation="border" size="sm">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            : <FontAwesomeIcon icon={faSearch} />}
                    </Button>
                </InputGroup.Append>
            </InputGroup>
            {suggestions.length > 0 &&
            <div className="gn-suggestions">
                <ListGroup>
                    {suggestions.map(suggestion => {
                        return (
                            <ListGroup.Item
                                className={`bg-${variant} text-${textVariant[variant]}`}
                                key={suggestion.id}
                                action={!loading}
                                onClick={() => handleChange(suggestion.value)}>
                                {suggestion.label}
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </div>}
        </div>
    );
}

SearchBar.defaultProps = {
    value: '',
    loading: false,
    debounceTime: 0,
    suggestions: [],
    onChange: () => {},
    onFetchSuggestions: () => {},
    style: {},
    variant: 'light'
};

export default SearchBar;
