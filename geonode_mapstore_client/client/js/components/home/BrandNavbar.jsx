/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useRef, cloneElement, Children } from 'react';
import { Dropdown, Nav } from 'react-bootstrap-v1';
import Message from '@mapstore/framework/components/I18N/Message';
import FaIcon from '@js/components/home/FaIcon';
import {
    readProperty,
    filterMenuItems
} from '@js/utils/MenuUtils';

function NavItem({
    state,
    item
}) {
    const { type, label, labelId = '', items = [], image, href } = item;
    if (type === 'dropdown') {
        return (
            <Dropdown
                alignRight
                className="gn-user-dropdown"
            >
                <Dropdown.Toggle
                    id={'gn-brand-navbar-item-' + item.id}
                    variant="default"
                >
                    {image
                        ? <img src={readProperty(state, image)} />
                        : null
                    }
                    {labelId && <Message msgId={labelId}/> || label}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {items
                        .filter((itm) => filterMenuItems(state, itm, item))
                        .map((itm, idx) => {
                            if (itm.type === 'divider') {
                                return <Dropdown.Divider key={idx} />;
                            }
                            return (
                                <Dropdown.Item
                                    key={idx}
                                    href={readProperty(state, itm.href)}
                                >
                                    {itm.faIcon && <><FaIcon name={itm.faIcon}/></>}
                                    {itm.labelId && <Message msgId={itm.labelId}/> || itm.label}
                                </Dropdown.Item>
                            );
                        })}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
    if (type === 'link') {
        return (
            <Nav.Link href={readProperty(state, href)}>{labelId && <Message msgId={labelId}/> || label}</Nav.Link>
        );
    }
    return null;
}

const BrandNavbar = forwardRef(({
    style,
    logo,
    navItems,
    user,
    children,
    centerMinWidth
}, ref) => {

    const centerNode = useRef();
    const centerWidth = centerNode.current
        ? centerNode.current.getBoundingClientRect().width
        : Infinity;
    const state = { user };
    return (
        <nav
            ref={ref}
            className="gn-brand-navbar"
            style={style}
        >
            <div className="gn-brand-navbar-container">
                <ul
                    className="gn-brand-navbar-left-side"
                >
                    {logo.map(({ src, label, href, style: logoStyle }, idx) => {
                        return (
                            <li key={idx}>
                                <a href={href}>
                                    <img src={src} style={logoStyle}/>
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div
                    className="gn-brand-navbar-center"
                    ref={centerNode}
                >
                    {centerWidth >= centerMinWidth && children}
                </div>
                <ul
                    className="gn-brand-navbar-right-side"
                >
                    {[...navItems]
                        .reverse()
                        .filter((item) => filterMenuItems(state, item))
                        .map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <NavItem
                                        item={{ ...item, id: item.id || idx }}
                                        state={state}
                                    />
                                </li>
                            );
                        })}
                </ul>
            </div>
            {children && centerWidth < centerMinWidth &&
                Children.map(children, child =>
                    cloneElement(child, {
                        style: {
                            ...child.props.style,
                            margin: '0.5rem 0.5rem 0 0.5rem',
                            width: 'calc(100% - 1rem)'
                        }
                    }))}
        </nav>
    );
});

BrandNavbar.defaultProps = {
    logo: [],
    links: [],
    centerMinWidth: 400
};

export default BrandNavbar;
