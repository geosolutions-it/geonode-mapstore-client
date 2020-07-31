# -*- coding: utf-8 -*-
#########################################################################
#
# Copyright 2015-2018, GeoSolutions Sas.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree.
#
#########################################################################

try:
    import json
except ImportError:
    from django.utils import simplejson as json

from geonode.client.hooksets import BaseHookSet
from mapstore2_adapter.plugins.geonode import GeoNodeMapStore2ConfigConverter

ms2_config_converter = GeoNodeMapStore2ConfigConverter()


class MapStoreHookSet(BaseHookSet):

    def get_request(self, context):
        if context and 'request' in context:
            return context['request']
        return None

    def get_user(self, request):
        user = {}
        if request and request.user:
            _u = request.user
            user["name"] = _u.username
            user["id"] = _u.id
            user["role"] = [group.name for group in _u.groups.all()]
            if _u.is_superuser:
                user["role"] = "ADMIN"
            if _u.is_authenticated:
                user["enabled"] = True
        return json.dumps(user)

    def get_access_token(self, request):
        if request and 'access_token' in request.session:
            return request.session['access_token']
        return None

    # return if we are editing a layer or creating a new map
    def isEditLayer(self, context):
        if context:
            req = self.get_request(context)
            if req.GET.get("layer") and req.GET.get("storeType"):
                return True
        return False

    def isViewLayer(self, context):
        if context:
            req = self.get_request(context)
            if req.GET.get("layer") and req.GET.get("view"):
                return True
        return False

    def initialize_context(self, context, callback):
        if context:
            request = self.get_request(context)
            context['USER'] = self.get_user(request)
            context['ACCESS_TOKEN'] = self.get_access_token(request)
            config = context['viewer'] if 'viewer' in context else None
            if not config:
                if 'config' in context and context['config']:
                    config = context['config']
                else:
                    try:
                        if len(context.dicts) > 0:
                            for ctx in context.dicts:
                                if 'preview' in ctx and (
                                    ctx['preview'] in (
                                        'mapstore', 'mapstore2', 'ms2') and
                                        'config' in ctx):
                                    config = ctx['config']
                    except Exception:
                        pass
            ms2_config = {}
            if config:
                try:
                    ms2_config = callback(config, request)
                except Exception:
                    ms2_config = '{}'
                    import traceback
                    traceback.print_exc()
            context['ms2_config'] = ms2_config

    # Layers
    def layer_detail_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/layer_map.html'

    def layer_new_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/layer_map.html'

    def layer_view_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/layer_map.html'

    # -- Not implemented yet
    # def layer_edit_template(self, context=None):
    #    self.initialize_context(
    #        context,
    #        callback=ms2_config_converter.convert)
    #    return 'geonode-mapstore-client/map_new.html'

    def layer_update_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/layer_map.html'

    # -- Not implemented yet
    # def layer_embed_template(self, context=None):
    #    self.initialize_context(
    #        context,
    #        callback=ms2_config_converter.convert)
    #    return 'geonode-mapstore-client/layer_map.html'

    def layer_download_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/layer_map.html'

    def layer_style_edit_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/layer_style_edit.html'

    # Maps
    def map_detail_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/map_detail.html'

    def map_new_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        if self.isEditLayer(context):
            return 'geonode-mapstore-client/layer_edit.html'
        elif self.isViewLayer(context):
            return 'geonode-mapstore-client/layer_view.html'
        else:
            return 'geonode-mapstore-client/map_new.html'

    def map_view_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/map_view.html'

    def map_edit_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/edit_map.html'

    def map_embed_template(self, context=None):
        self.initialize_context(
            context,
            callback=ms2_config_converter.convert)
        return 'geonode-mapstore-client/map_embed.html'

    # def map_download_template(self, context=None):
    #    self.initialize_context(
    #        context,
    #        callback=ms2_config_converter.convert)
    #    return 'geonode-mapstore-client/map_view.html'

    # Map Persisting
    def viewer_json(self, conf, context=None):
        context['viewer'] = conf
        self.initialize_context(
            context,
            callback=ms2_config_converter.viewer_json)
        return context['ms2_config']

    def update_from_viewer(self, conf, context=None):
        conf = self.viewer_json(conf, context=context)
        context['config'] = conf
        return 'geonode-mapstore-client/edit_map.html'
