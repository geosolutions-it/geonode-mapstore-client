

/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Tag({
    active,
    children,
    href,
    className,
    style
}) {
    return (
        <a
            className={`gn-tag${active ? ' active' : ''}${className ? ' ' + className : ''}`}
            href={href}
            style={style}
        >
            {children}
            {active && <FontAwesomeIcon icon={faTimes} />}
        </a>
    );
}

Tag.defaultProps = {};

export default Tag;
