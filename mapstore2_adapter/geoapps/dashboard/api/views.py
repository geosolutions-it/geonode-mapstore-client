from dynamic_rest.viewsets import DynamicModelViewSet
from dynamic_rest.filters import DynamicFilterBackend, DynamicSortingFilter

from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from oauth2_provider.contrib.rest_framework import OAuth2Authentication

from geonode.base.api.filters import DynamicSearchFilter
from geonode.base.api.permissions import IsOwnerOrReadOnly
from geonode.base.api.pagination import GeoNodeApiPagination


import logging
from mapstore2_adapter.geoapps.dashboard.models import Dashboard
from mapstore2_adapter.geoapps.dashboard.api.serializer import DashboardAppSerializer


logger = logging.getLogger(__name__)


class DashboardViewSet(DynamicModelViewSet):
    """
    API endpoint that allows geoapps to be viewed or edited.
    """
    authentication_classes = [SessionAuthentication, BasicAuthentication, OAuth2Authentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    filter_backends = [DynamicFilterBackend, DynamicSortingFilter, DynamicSearchFilter]
    queryset = Dashboard.objects.all().order_by('-date')
    serializer_class = DashboardAppSerializer
    pagination_class = GeoNodeApiPagination
