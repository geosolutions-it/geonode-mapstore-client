/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import { Dropdown, Button } from 'react-bootstrap-v1';
import ReactResizeDetector from 'react-resize-detector';
import Message from '@mapstore/framework/components/I18N/Message';
import FaIcon from '@js/components/home/FaIcon';
import useLocalStorage from '@js/hooks/useLocalStorage';
import { filterMenuItems } from '@js/utils/MenuUtils';


const CardsMenu = ({ item, menuItemsProps }) => {
    const { type, labelId = '', items = [] } = item;
    const { state } = menuItemsProps;

    if (type === 'dropdown') {

        const dropdownItems = items
            .filter((opt) => filterMenuItems(state, opt))
            .map((opt) => {
                return (
                    <Dropdown.Item
                        key={opt.value}
                        href={(opt.type === 'link' && opt.href) ? opt.href : undefined}
                    >
                        <Message msgId={opt.labelId} />
                    </Dropdown.Item>
                );
            });

        return (
            <Dropdown alignRight>
                <Dropdown.Toggle
                    id="create-new-dropdown"
                    variant="default"
                    size="sm"
                >
                    <Message msgId={labelId} />
                </Dropdown.Toggle>
                {<Dropdown.Menu>
                    {dropdownItems}
                </Dropdown.Menu>
                }
            </Dropdown>
        );
    }

    if (type === 'divider') {
        return <div className="gn-menu-index-divider" ></div>;
    }

    return null;

};

const FiltersMenu = forwardRef(({
    formatHref,
    orderOptions,
    order,
    cardsMenu,
    filters,
    style,
    onClick,
    layoutSwitcher,
    defaultLabelId,
    user
}, ref) => {

    const selectedSort = orderOptions.find(({ value }) => order === value);
    const [cardLayoutStyle] = useLocalStorage('layoutCardsStyle');
    const state = {
        user
    };

    return (
        <div
            className="gn-filters-menu"
            style={style}
            ref={ref}
        >
            <div className="gn-filters-menu-container">
                <a className="gn-toogle-filter" onClick={onClick} > <Message msgId="gnhome.filters" /> {`(${filters.length})`}</a>
                <ReactResizeDetector handleHeight>
                    {({ height }) => (
                        <div
                            className="gn-filters-menu-content"
                            style={{ height }}
                        >
                        </div>
                    )}
                </ReactResizeDetector>
                <ul className="gn-cards-menu">
                    {cardsMenu
                        .filter((item) => filterMenuItems(state, item))
                        .map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <CardsMenu
                                        item={{ ...item, id: item.id || idx }}
                                        menuItemsProps={{
                                            state
                                        }}
                                    />
                                </li>
                            );
                        })}
                </ul>

                <Button variant="default" onClick={layoutSwitcher} >
                    <FaIcon name={cardLayoutStyle === 'grid' ? 'th' : cardLayoutStyle} />
                </Button>

                <div
                    className="gn-filters-menu-tools"

                >

                    {orderOptions.length > 0 && <Dropdown alignRight>
                        <Dropdown.Toggle
                            id="sort-dropdown"
                            variant="default"
                            size="sm"
                        >
                            <Message msgId={selectedSort?.labelId || defaultLabelId} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {orderOptions.map(({ labelId, value }) => {
                                return (
                                    <Dropdown.Item
                                        key={value}
                                        active={value === selectedSort?.value}
                                        href={formatHref({
                                            query: {
                                                sort: [value]
                                            },
                                            replaceQuery: true
                                        })}
                                    >
                                        <Message msgId={labelId} />
                                    </Dropdown.Item>
                                );
                            })}
                        </Dropdown.Menu>
                    </Dropdown>}
                </div>
            </div>
        </div>
    );
});

FiltersMenu.defaultProps = {
    orderOptions: [
        {
            label: 'Most recent',
            labelId: 'gnhome.mostRecent',
            value: '-date'
        },
        {
            label: 'Less recent',
            labelId: 'gnhome.lessRecent',
            value: 'date'
        },
        {
            label: 'A Z',
            labelId: 'gnhome.aZ',
            value: 'title'
        },
        {
            label: 'Z A',
            labelId: 'gnhome.zA',
            value: '-title'
        },
        {
            label: 'Most popular',
            labelId: 'gnhome.mostPopular',
            value: 'popular_count'
        }
    ],
    defaultLabelId: 'gnhome.orderBy',
    formatHref: () => '#',
    onClear: () => { }
};

export default FiltersMenu;
