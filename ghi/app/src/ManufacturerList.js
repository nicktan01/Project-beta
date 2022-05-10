// import { NavLink } from 'react-router-dom';
import React from "react";
import ManufacturerForm from "./ManufacturerForm";
function ManufacturerList(props) {
    console.log(props);
  return (
    <React.Fragment>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {props.manufacturers.map(manufacturer => {
                    console.log("Where is my name?", manufacturer)
                    return (
                        <tr key={manufacturer.id}>
                            <td>{ manufacturer.name }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <ManufacturerForm loadManufacturer={props.loadManufacturer}/>
    </React.Fragment>
  )
}

export default ManufacturerList;
