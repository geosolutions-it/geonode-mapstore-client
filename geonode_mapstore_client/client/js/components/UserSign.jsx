/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

function UserCard({
    data,
    href
}) {

    return (
        <div style={{ display: 'inline-block' }}>
            <img
                src={data.avatar}
                style={{
                    width: '1.5em',
                    height: '1.5em',
                    objectFit: 'contain',
                    marginRight: '0.5em'
                }}
            />
            <a href={href}>{data.username}</a>
        </div>
    );
}

export default UserCard;
