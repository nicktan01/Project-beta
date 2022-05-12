from django.urls import path

from .views import(
    api_service_appointment,
    api_service_appointments,
    api_technician,
    api_technicians,
    api_service_history,
    api_cancel_appointment,
    api_finish_appointment,
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
        "appointments/<int:id>/cancelled/",
        api_cancel_appointment,
        name="api_cancel_appointment",
    ),
    path(
        "appointments/<int:pk>/finished/",
        api_finish_appointment,
        name="api_finish_appointment",
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