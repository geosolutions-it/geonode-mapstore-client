from django.conf.urls import url, include

from geonode.api.urls import router

from mapstore2_adapter.geoapps.dashboard.api import views

router.register(r'dashboard', views.DashboardViewSet, 'dashboard')

urlpatterns = [
    url(r'^api/v2/', include(router.urls)),
]