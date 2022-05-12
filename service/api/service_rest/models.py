from django.db import models
from datetime import datetime
# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveBigIntegerField(unique=True) #should be unique?

class ServiceAppointment(models.Model):
    # vin = models.CharField(max_length=100, unique=True) #get rid of unique
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="appointments",
        on_delete=models.CASCADE,
    )
    customer = models.CharField(max_length=100) #get rid of unique
    date_time = models.DateTimeField(default=datetime.now)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=100, default="IN_PROGRESS")
    def cancel(self):
        status = "CANCELLED"
        self.status = status
        self.save()
    def finish(self):
        status = "FINISHED"
        self.status = status
        self.save()
    def __str__(self):
        return self.customer + " " + self.status
