/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Glyphicon } from 'react-bootstrap';

import Message from '../../../MapStore2/web/client/components/I18N/Message';

const withError = ({errorToMessage = (e = {}) => e.message ? <Message msgId={e.message}/> : null, errorClassName, errorStyle, errorGlyphStyle}) => Component => ({
    error,
    errorStyle: errorStyleProps = {},
    errorClassName: errorClassNameProps,
    errorGlyphStyle: errorGlyphStyleProps,
    ...props
}) => (
    error ?
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            ...(errorStyle || errorStyleProps || {})
        }} className={errorClassName || errorClassNameProps}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: '1'}} className="ms-error-glyph">
                <div style={errorGlyphStyle || errorGlyphStyleProps}>
                    <Glyphicon glyph="remove-sign"/>
                </div>
            </div>
            <div style={{textAlign: 'center'}} className="ms-error-message">
                {errorToMessage(error)}
            </div>
        </div> :
        <Component {...props}/>
);

export default withError;
