import React from "react";
import HistoryForm from "./HistoryForm"

function formatDate(date_time){
    const dateObj = new Date(date_time)
    if ((dateObj.getMonth() + 1) < 10){
        return (
            "" +
            (dateObj.getYear() + 1900) + "-" +
            '0' + (dateObj.getMonth() + 1) + "-"+
            '0' + (dateObj.getDate())
            );
    }
    else{
        return (
            "" +
            (dateObj.getYear() + 1900) + "-" +
            (dateObj.getMonth() + 1) + "-"+
            (dateObj.getDate())
            );   
    }
        
}
function formatTime(date_time){
    const timeObj = new Date(date_time)
    // if(timeObj.getHours < 12){
    //     return (
    //         timeObj.getHours() + "am"
    //     )
    // }
    return (
        timeObj.getHours()
    )
}
class HistoryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vin: "",
            appointments: [],
            // filteredAppointments: []
        };
        this.loadAppointment = this.loadAppointment.bind(this);
        this.handleVINChange = this.handleVINChange.bind(this);
    }
    async componentDidMount(){
        this.loadAppointment()
    }
    async loadAppointment(){
        const response = await fetch('http://localhost:8080/api/appointments/');
        if(response.ok) {
          const data = await response.json();
          this.setState({
            appointments: data.appointments
          });
        }
    }
    handleVINChange(event){
        event.preventDefault();
        const value = event.target.elements[0].value;
        console.log(value)
        this.setState({ vin: value })
        // event.preventDefault();
        // console.log("Here is vin change", event.target.elements[0].value)
    }
    render(){
    return (
      <React.Fragment>
        <HistoryForm handleVINChange={this.handleVINChange} />
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {/* {console.log("HERE LIES THE APPOINTMENTS" ,this.state.appointments)} */}
                {this.state.appointments.map(appointment => {
                      if(appointment.automobile.vin === this.state.vin){
                        return (
                            <tr key={appointment.id}>
                                <td>{ appointment.automobile.vin }</td>
                                <td>{ appointment.customer }</td>
                                <td>{ formatDate(appointment.date_time) }</td>
                                <td>{ formatTime(appointment.date_time) }</td>
                                <td>{ appointment.technician.name }</td>
                                <td>{ appointment.reason }</td>
                            </tr>
                        );
                    }
                    else{
                        return null;
                    }
                })}
            </tbody>
        </table>
    </React.Fragment>
  )
 }
}

export default HistoryList;
