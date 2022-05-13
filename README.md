# CarCar

Team:

* Nicholas Tan - Service microservice
* Daniel (Staff) - Sales

## Design
We started out by defining four bounded contexts which are Inventory, service, sales and UIs. The UIs would handle the creating and listing of forms and list. The inventory is where the manufacturers, automobile and vehicle models are stored. The service handles creating and listing service appointments and technicians. The sales handles creating and listing sale record, sales person and customers.  
## Service microservice
In the service microservice model, I created the AutomobileVO class in order to intergrate with the inventory. I also created Technician with name and employee numbers and ServiceAppointment model with automobile, customer, date_time, technician, reason and status. The automobile and technician are integrated using foreign key from technician class and automobileVO class. I also included the cancel and finish functions in the service appointment class so I can get each appointment to cancel or finish and remove it from the list later.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
