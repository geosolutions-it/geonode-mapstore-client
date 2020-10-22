/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

// import only the needed plugins to reduce the bundle size
// we should use a lazy loading approach as proposed in the homepage refactor (useLazyPlugins)
// with lazy plugins index we could have a single index for all application

import OmniBarPlugin from '@mapstore/framework/plugins/OmniBar';
import BurgerMenuPlugin from '@mapstore/framework/plugins/BurgerMenu';
import GeoStoryPlugin from '@mapstore/framework/plugins/GeoStory';
import MediaEditorPlugin from '@mapstore/framework/plugins/MediaEditor';
import GeoStoryEditorPlugin from '@mapstore/framework/plugins/GeoStoryEditor';
import GeoStoryNavigationPlugin from '@mapstore/framework/plugins/GeoStoryNavigation';
import NotificationsPlugin from '@mapstore/framework/plugins/Notifications';
import SavePlugin from '@js/plugins/Save';
import SaveAsPlugin from '@js/plugins/SaveAs';
import SharePlugin from '@js/plugins/Share';

export const plugins = {
    OmniBarPlugin,
    BurgerMenuPlugin,
    GeoStoryPlugin,
    MediaEditorPlugin,
    GeoStoryEditorPlugin,
    GeoStoryNavigationPlugin,
    NotificationsPlugin,
    SavePlugin,
    SaveAsPlugin,
    SharePlugin
};

export const requires = {};

export default {
    plugins,
    requires
};
