import React from "react";

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
                        <tr key={appointment.auto.vin}>
                            <td>{ appointment.auto.vin }</td>
                            <td>{ appointment.customer }</td>
                            <td>{ appointment.date }</td>
                            <td>{ appointment.time }</td>
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
