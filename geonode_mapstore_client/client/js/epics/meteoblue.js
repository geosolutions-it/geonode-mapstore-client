/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';

import { SET_MAP_CLICK } from '../actions/meteoblue';
import {
    changeMapInfoState
} from '../../MapStore2/web/client/actions/mapInfo';

export const manageIdentifyOnSetMapClick = (action$) => action$
    .ofType(SET_MAP_CLICK)
    .switchMap(({enable}) => Observable.of(changeMapInfoState(!enable)));
