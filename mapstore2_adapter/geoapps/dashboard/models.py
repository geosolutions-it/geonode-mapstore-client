from django.db import models
from geonode.geoapps.models import GeoApp

class Dashboard(GeoApp):
    url = models.CharField(max_length=1200)