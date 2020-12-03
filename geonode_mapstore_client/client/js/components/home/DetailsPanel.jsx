/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import { Button, Spinner } from 'react-bootstrap-v1';
import FaIcon from '@js/components/home/FaIcon';
import Message from '@mapstore/framework/components/I18N/Message';
import moment from 'moment';
import {
    getUserName,
    getResourceTypesInfo
} from '@js/utils/GNSearchUtils';

function DetailsPanel({
    resource,
    // filters,
    formatHref,
    sectionStyle,
    loading,
    getTypesInfo
}) {

    const detailsContainerNode = useRef();

    if (!resource && !loading) {
        return null;
    }


    const types = getTypesInfo();
    const {
        embed,
        icon,
        name
    } = resource && (types[resource.doc_type] || types[resource.polymorphic_ctype]) || {};
    const embedUrl = embed && embed.replace('{pk}', resource.pk);

    return (
        <div
            ref={detailsContainerNode}
            className={`gn-details-panel${loading ? ' loading' : ''}`}
            style={{ width: sectionStyle.width }}
        >
            <section style={sectionStyle}>
                <div className="gn-details-panel-header">
                    <Button
                        variant="default"
                        href={formatHref({
                            pathname: '/search/'
                        })}
                        size="sm">
                        <FaIcon name="times" />
                    </Button>
                </div>
                <div className="gn-details-panel-preview">
                    {embedUrl
                        ? <iframe
                            src={embedUrl}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%'
                            }}
                            frameBorder="0"
                        />
                        : <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            backgroundImage: 'url(' + resource?.thumbnail_url + ')',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}/>
                    }
                    {loading && <div
                        className="gn-details-panel-preview-loader"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading resource detail...</span>
                        </Spinner>
                    </div>}
                </div>
                <div className="gn-details-panel-content">
                    <div className="gn-details-panel-title">
                        <h1>
                            {icon && <><FaIcon name={icon}/></>}
                            {resource?.title}
                        </h1>
                        <div className="gn-details-panel-tools">
                            {resource && <Button
                                variant="default"
                                href={formatHref({
                                    pathname: '/search/'
                                })}>
                                <FaIcon name="share-alt" />
                            </Button>}
                            {resource?.detail_url && <Button
                                variant="default"
                                href={resource.detail_url}>
                                <Message msgId={`gnhome.view${name || ''}`}/>
                            </Button>}
                        </div>
                    </div>
                    <p>
                        <div className="gn-details-panel-description">{resource?.abstract}</div>
                        {(resource?.date_type && resource?.date)
                            && <div><Message msgId={`gnhome.${resource.date_type}`}/>: <strong>{ moment(resource.date).format('MMMM Do YYYY, h:mm:ss a')}</strong></div>}
                    </p>
                    <p>
                        {resource?.owner && <div><Message msgId="gnhome.author"/>: <strong><a href={formatHref({
                            query: {
                                'filter{owner.username.in}': resource.owner.username
                            }
                        })}>{getUserName(resource.owner)}</a></strong></div>}
                        {resource?.category?.identifier && <div><Message msgId="gnhome.category"/>: <strong>{resource.category.identifier}</strong></div>}
                    </p>
                </div>
            </section>
        </div>
    );
}

DetailsPanel.defaultProps = {
    onClose: () => { },
    formatHref: () => '#',
    width: 696,
    getTypesInfo: getResourceTypesInfo
};

export default DetailsPanel;
