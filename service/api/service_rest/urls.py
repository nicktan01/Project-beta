from django.urls import path

from .views import(
    api_service_appointment,
    api_service_appointments,
    api_technician,
    api_technicians,
    api_service_history,
)

urlpatterns = [
    path(
        "appointments/",
        api_service_appointments,
        name="api_service_appointments",
    ),
    path(
        "appointments/<str:vin>/",
        api_service_appointment,
        name="api_service_appointment",
    ),
    path(
        "technicians/",
        api_technicians,
        name="api_technicians",
    ),
    path(
        "technicians/<int:pk>/",
        api_technician,
        name="api_technician",
    ),
    path(
        "history/",
        api_service_history,
        name="api_service_history",
    )
]