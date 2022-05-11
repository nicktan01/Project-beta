import React from 'react';

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: "",
            customer: "",
            date: "",
            time: "",
            technician: "",
            reason: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVINChange = this.handleVINChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};

        const url = 'http://localhost:8080/api/appointments/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            console.log(newAppointment);
            this.setState({
                vin: "",
                customer: "",
                date: "",
                time: "",
                technician: "",
                reason: ""
            })
        }
    }

    handleVINChange(event){
        const value = event.target.value;
        this.setState({ vin: value });
    }
    handleCustomerChange(event){
        const value = event.target.value;
        this.setState({ customer: value });
    }
    handleDateChange(event){
        const value = event.target.value;
        this.setState({ date: value });
    }
    handleTimeChange(event){
        const value = event.target.value;
        this.setState({ time: value });
    }
    handleTechnicianChange(event){
        const value = event.target.value;
        this.setState({ technician: value });
    }
    handleReasonChange(event){
        const value = event.target.value;
        this.setState({ reason: value });
    }
    render(){
        return (
            <div className="row">
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Add Technician</h1>
                  <form onSubmit={this.handleSubmit} id="create-conference-form">
                    <div className="form-floating mb-3">
                      <input onChange={this.handleVINChange} value={this.state.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                      <label htmlFor="name">VIN</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleCustomerChange} value={this.state.customer} placeholder="Customer" required type="customer" name="customer" id="customer" className="form-control" />
                      <label htmlFor="employee_number">Customer</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleDateChange} value={this.state.date} placeholder="Date" required type="date" name="date" className="form-control" />
                      <label htmlFor="date">Date</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleTimeChange} value={this.state.time} placeholder="Time" required type="time" name="time" className="form-control" />
                      <label htmlFor="time">Time</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleTechnicianChange} value={this.state.technician} placeholder="Technician" required type="technician" name="technician" className="form-control" />
                      <label htmlFor="technician">Technician</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleReasonChange} value={this.state.reason} placeholder="Reason" required type="reason" name="reason" className="form-control" />
                      <label htmlFor="reason">Reason</label>
                    </div>
                    <button className="btn btn-primary">Add</button>
                  </form>
                </div>
              </div>
            </div>
          );
    }
}