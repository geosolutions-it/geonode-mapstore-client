/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Message from '@mapstore/framework/components/I18N/Message';
import PropTypes from 'prop-types';

const ResourceStatus = ({isApproved, isPublished}) => {

    const itemStatus = (!isApproved) ?
        ({messageId: "gnviewer.underApproval", className: "underApproval" }) :
        ((isApproved && !isPublished) ?
            ({messageId: "gnviewer.unpublish", className: "unpublish" }) : undefined);

    return (
        <>
            {itemStatus && <span className={itemStatus?.className} >
                <Message msgId={itemStatus?.messageId} />
            </span>
            }
        </>
    );
};

ResourceStatus.propTypes = {
    isApproved: PropTypes.bool,
    isPublished: PropTypes.bool
};

ResourceStatus.defaultProps = {
    isApproved: true,
    isPublished: true
};


export default ResourceStatus;
