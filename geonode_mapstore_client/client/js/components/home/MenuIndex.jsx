/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import castArray from 'lodash/castArray';
import ReactResizeDetector from 'react-resize-detector';
import SwipeMenu from '@js/components/home/SwipeMenu';
import Tag from '@js/components/home/Tag';
import { Dropdown } from 'react-bootstrap-v1';
import Message from '@mapstore/framework/components/I18N/Message';
import {
    readProperty,
    filterMenuItems
} from '@js/utils/MenuUtils';

function MenuItem({
    tabIndex,
    draggable,
    item,
    menuItemsProps,
    containerNode
}) {
    const { formatHref, query, state } = menuItemsProps;
    const { type, label, labelId = '', items = [], href } = item;
    if (type === 'dropdown') {
        return (
            <Dropdown>
                <Dropdown.Toggle
                    id={'gn-menu-index-' + item.id}
                    variant="default"
                    tabIndex={tabIndex}
                >
                    {labelId && <Message msgId={labelId}/> || label}
                </Dropdown.Toggle>
                {containerNode && createPortal(<Dropdown.Menu>
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
                                    {itm.labelId && <Message msgId={itm.labelId}/> || itm.label}
                                </Dropdown.Item>
                            );
                        })}
                </Dropdown.Menu>, containerNode.parentNode)}
            </Dropdown>
        );
    }
    if (type === 'link') {
        return (
            <Tag
                tabIndex={tabIndex}
                draggable={draggable}
                href={readProperty(state, href)}
            >
                {labelId && <Message msgId={labelId}/> || label}
            </Tag>
        );
    }
    if (type === 'filter') {
        const active = castArray(query.f || []).find(value => value === item.id);
        return (
            <Tag
                tabIndex={tabIndex}
                draggable={draggable}
                active={active}
                href={formatHref({
                    query: { f: item.id },
                    replaceQuery: active ? false : true
                })}
            >
                {labelId && <Message msgId={labelId}/> || label}
            </Tag>
        );
    }

    return null;
}

const MenuIndex = forwardRef(({
    style,
    menuItems,
    query,
    formatHref,
    user,
    tools
}, ref) => {

    const state = { user };

    return (
        <nav
            ref={ref}
            className="gn-menu-index"
            style={style}
        >
            <div className="gn-menu-index-container">
                <ReactResizeDetector handleHeight>
                    {({ height }) => (
                        <div
                            className="gn-menu-index-content"
                            style={{ height }}
                        >
                            <SwipeMenu
                                items={menuItems
                                    .filter((item) => filterMenuItems(state, item))}
                                menuItemComponent={MenuItem}
                                menuItemsProps={{
                                    query,
                                    formatHref,
                                    state
                                }}
                            />
                        </div>
                    )}
                </ReactResizeDetector>
                {tools && <div className="gn-menu-index-tools">
                    {tools}
                </div>}
            </div>
        </nav>
    );
});

MenuIndex.propTypes = {
    style: PropTypes.object,
    menuItems: PropTypes.array,
    query: PropTypes.object,
    formatHref: PropTypes.func,
    tools: PropTypes.node
};

MenuIndex.defaultProps = {
    menuItems: [],
    query: {},
    formatHref: () => '#'
};

export default MenuIndex;
