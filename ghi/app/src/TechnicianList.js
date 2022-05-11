// import { NavLink } from 'react-router-dom';
import React from "react";

function TechnicianList(props) {
console.log("this is technician list", props.technicians);
  return (
    <React.Fragment>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Employee number</th>
                </tr>
            </thead>
            <tbody>
                {props.technicians.map(technician => {
                    console.log("where is my tech", technician)
                    return (
                        <tr key={technician.href}>
                            <td>{ technician.name }</td>
                            <td>{ technician.employee_number }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </React.Fragment>
  )
}

export default TechnicianList;
