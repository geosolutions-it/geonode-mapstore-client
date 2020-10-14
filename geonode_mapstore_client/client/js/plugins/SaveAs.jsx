/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import indexOf from 'lodash/indexOf';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import {toggleControl} from '@mapstore/framework/actions/controls';
import Message from '@mapstore/framework/components/I18N/Message';
import { Glyphicon } from 'react-bootstrap';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';
import { isLoggedIn } from '@mapstore/framework/selectors/security';
import {
    saveContent,
    clearSave,
    updateResourceBeforeSave
} from '@js/actions/gnsave';

import gnresource from '@js/reducers/gnresource';
import gnsave from '@js/reducers/gnsave';
import gnsaveEpics from '@js/epics/gnsave';
import SaveModal from '@js/plugins/save/SaveModal';

function SaveAs(props) {
    return (
        <SaveModal
            {...props}
            labelId="saveAs"
        />
    );
}

const SaveAsPlugin = connect(
    createSelector([
        state => state?.controls?.saveAs?.enabled,
        mapInfoSelector,
        state => state?.gnresource?.data,
        state => state?.gnresource?.loading,
        state => state?.gnsave?.saving,
        state => state?.gnsave?.error,
        state => state?.gnsave?.success
    ], (enabled, mapInfo, resource, loading, saving, error, success) => ({
        enabled,
        contentId: mapInfo?.id,
        resource,
        loading,
        saving,
        error,
        success
    })),
    {
        onClose: toggleControl.bind(null, 'saveAs', null),
        onInit: updateResourceBeforeSave,
        onSave: saveContent,
        onClear: clearSave
    }
)(SaveAs);

export default createPlugin('SaveAs', {
    component: SaveAsPlugin,
    containers: {
        BurgerMenu: {
            name: 'saveAs',
            position: 30,
            text: <Message msgId="saveAs"/>,
            icon: <Glyphicon glyph="floppy-open"/>,
            action: toggleControl.bind(null, 'saveAs', null),
            selector: (state) => {
                if (state?.controls?.saveAs?.allowedRoles) {
                    return indexOf(
                        state.controls.saveAs.allowedRoles,
                        state && state.security && state.security.user && state.security.user.role) !== -1
                        ? {} : { style: { display: 'none' } };
                }
                return { style: isLoggedIn(state) ? {} : { display: 'none' } };
            }
        }
    },
    epics: {
        ...gnsaveEpics
    },
    reducers: {
        gnresource,
        gnsave
    }
});
