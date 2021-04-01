import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LinkItem = ({ linkTo, name, children }) => {
    return (
        <li>
            <NavLink exact to={linkTo}>
                {children} {name}
            </NavLink>
        </li>
    );
};

LinkItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};


export default LinkItem;
