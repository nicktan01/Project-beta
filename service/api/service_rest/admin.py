from django.contrib import admin
from .models import Technician, ServiceAppointment, AutomobileVO
# Register your models here.

admin.site.register(AutomobileVO)
admin.site.register(Technician)
admin.site.register(ServiceAppointment)
