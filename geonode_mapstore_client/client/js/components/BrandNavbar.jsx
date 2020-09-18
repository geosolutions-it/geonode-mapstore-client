/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';

const BrandNavbar = forwardRef(({
    style,
    links,
    children
}, ref) => {

    return (
        <nav
            ref={ref}
            className="gn-brand-navbar"
            style={style}
        >
            <div className="gn-brand-navbar-left-side">
                {links.map(({ src, label, href }, idx) => {
                    return (
                        <a key={idx} href={href}>
                            <img src={src} />
                            {label}
                        </a>
                    );
                })}
            </div>
            {children}
            <div className="gn-brand-navbar-right-side">
            </div>
        </nav>
    );
});

BrandNavbar.defaultProps = {
    links: []
};

export default BrandNavbar;
