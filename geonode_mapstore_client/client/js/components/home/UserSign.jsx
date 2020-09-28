/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Tag from '@js/components/home/Tag';

function UserSign({
    data,
    href
}) {

    return (
        <span className="gn-user-sign">
            <img
                src={data.avatar}
                style={{
                    width: '1.5em',
                    height: '1.5em',
                    objectFit: 'contain',
                    marginRight: '0.5em'
                }}
            />
            <Tag href={href}>{data.username}</Tag>
        </span>
    );
}

export default UserSign;
