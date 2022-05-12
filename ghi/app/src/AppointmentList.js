import React from "react";
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
function cancelClick(event){
    event.preventDefault();

    const url = `http://localhost:8080/api/appointments/${this.id}/`
    const fetchConfig = {
        method: "delete",
        headers:{
            'Content-Type': 'application/json',
        },
    };

    const response = fetch(url, fetchConfig);
    if(response.ok) {
        const newAppointment = response.json();
        console.log(newAppointment)

        let remainingAppointments = []
        for (let i = 0; i < this.state.appointments.length; i++){
            let currentAppointment = this.state.appointments[i]
            if(parseInt(this.state.appointment) !== currentAppointment.id) {
                remainingAppointments.push(currentAppointment)
            }
        }
        this.setState({
            appointment: '',
            appointments: remainingAppointments
        })
    }
}
async function finishedClick(service){
    console.log(service)
    const url = `http://localhost:8080/api/appointments/${service.id}/finished/`
    const fetchConfig = {
        method: "put",
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(url, fetchConfig);
    if(response.ok){
        console.log("this is the response", response)
    }
}
function AppointmentList(props) {
    console.log(props);
  return (
      <React.Fragment>
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
                {props.appointments.map(appointment => {
                    if(appointment.status === "IN_PROGRESS"){
                        return (
                            <tr key={appointment.id}>
                                <td>{ appointment.automobile.vin }</td>
                                <td>{ appointment.customer }</td>
                                <td>{ formatDate(appointment.date_time) }</td>
                                <td>{ formatTime(appointment.date_time) }</td>
                                <td>{ appointment.technician.name }</td>
                                <td>{ appointment.reason }</td>
                                <td>
                                    <button className="btn btn-primary" onClick={cancelClick} >Cancel</button>
                                    <button className="btn btn-primary" onClick={() => {finishedClick(appointment)}} >Finished</button>
                                </td>
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

export default AppointmentList;
