import React from 'react';
import PropTypes from 'prop-types';

const LinkList = ({ children }) => {

    return (
        <ul>
            {children}
        </ul>
    );

};

LinkList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default LinkList;
