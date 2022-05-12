from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import ServiceAppointment, Technician, AutomobileVO

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href", "color", "year", "vin"
    ]
class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class AppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "id",
        "automobile",
        "customer",
        "date_time",
        "technician",
        "reason",
        "status"
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        "automobile": AutomobileVOEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the technician"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET", "PUT", "DELETE"])
def api_technician(request, pk):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(id=pk)

            props = ["name"]
            for prop in props:
                if prop in content:
                    setattr(technician, prop, content[prop])
            technician.save()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

@require_http_methods(["GET", "POST"])
def api_service_appointments(request):
    if request.method == "GET":
        appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            vin = content["vin"]
            automobile = AutomobileVO.objects.get(vin=vin)
            content["automobile"] = automobile
            employee_number = content["employee_number"]
            technician = Technician.objects.get(employee_number=employee_number)
            content["technician"] = technician
            del content["vin"]
            del content["employee_number"]
            print("CONTENT", content)
            model = ServiceAppointment.objects.create(**content)
            return JsonResponse(
                model,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Exception as e:
            print("exception", e)
            response = JsonResponse(
                {"message": "Could not create the service appointment"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_service_appointment(request, id):
    if request.method == "GET":
        try:
            appointment = ServiceAppointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            appointment = ServiceAppointment.objects.get(id=id)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=ServiceAppointment,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse({"message": "Does not exsit"})
    else: # PUT
        try:
            content = json.loads(request.body)
            appointment = ServiceAppointment.objects.get(id=id)

            props = ["vin", "customer", "date", "time", "technician", "reason"]
            for prop in props:
                if prop in content:
                    setattr(appointment, prop, content[prop])
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

@require_http_methods(["POST"])
def api_service_history(request):
        try:
            content = json.loads(request.body)
            vin = content["vin"]
            automobile = AutomobileVO.objects.get(vin=vin)
            services = ServiceAppointment.objects.filter(automobile=automobile)
            return JsonResponse(
                {"services": services},
                encoder=AppointmentEncoder,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse({"message": "Appointment does not exist"})

@require_http_methods(["PUT"])
def api_cancel_appointment(request, id):
    appointment = ServiceAppointment.objects.get(id=id)
    appointment.cancel()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )
@require_http_methods(["PUT"])
def api_finish_appointment(request, pk):
    appointment = ServiceAppointment.objects.get(id=pk)
    appointment.finish()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )