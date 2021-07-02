from modeltranslation.translator import translator, TranslationOptions
from mapstore2_adapter.geoapps.dashboard.models import Dashboard

class DashboardOptions(TranslationOptions):
    fields = ()

translator.register(Dashboard, DashboardOptions)