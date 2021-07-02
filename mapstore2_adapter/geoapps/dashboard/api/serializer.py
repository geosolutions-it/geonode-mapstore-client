import logging

from geonode.geoapps.api.serializers import GeoAppSerializer

from ..models import Dashboard

logger = logging.getLogger(__name__)


class DashboardAppSerializer(GeoAppSerializer):

    def __init__(self, *args, **kwargs):
        # Instantiate the superclass normally
        super(DashboardAppSerializer, self).__init__(*args, **kwargs)

    class Meta:
        model = Dashboard
        name = 'Dashboard'
        view_name = 'Dashboard-list'
        fields = (
            'pk', 'uuid', 'resource_type',
            'zoom', 'projection',
            'urlsuffix', 'data', 'url'
        )