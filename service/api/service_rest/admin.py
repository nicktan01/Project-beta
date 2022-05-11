from django.contrib import admin
from .models import Technician, ServiceAppointment
# Register your models here.

admin.site.register(Technician)
admin.site.register(ServiceAppointment)
