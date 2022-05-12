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
                    return (
                        <tr key={appointment.automobile.vin}>
                            <td>{ appointment.automobile.vin }</td>
                            <td>{ appointment.customer }</td>
                            <td>{ formatDate(appointment.date_time) }</td>
                            <td>{ formatTime(appointment.date_time) }</td>
                            <td>{ appointment.technician.name }</td>
                            <td>{ appointment.reason }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        
    </React.Fragment>
  )
}

export default AppointmentList;
