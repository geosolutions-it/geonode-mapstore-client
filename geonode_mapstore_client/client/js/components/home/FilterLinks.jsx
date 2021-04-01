import React from 'react';
import LinkList from '../LinkList';
import LinkItem from '../LinkItem';
import Message from '@mapstore/framework/components/I18N/Message';
import FaIcon from '@js/components/home/FaIcon';

const FilterLink = ({className, blockName, items}) => (
    <div className={className}>
        <strong>{<Message msgId={`gnhome.${blockName}`} />}</strong>
        <LinkList>
            {
                items.map((item, index) => (
                    <LinkItem
                        key={index}
                        name={<Message msgId={item.labelId} />}
                        linkTo={item.href} >
                        <FaIcon name="database"/>
                    </LinkItem>
                ))
            }
        </LinkList>
    </div>
);

export default FilterLink;
