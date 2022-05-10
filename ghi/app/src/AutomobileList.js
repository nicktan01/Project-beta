import React from "react";
import AutomobileForm from "./AutomobileForm";

function AutomobileList(props) {
    console.log(props);
  return (
      <React.Fragment>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>
                {props.automobiles.map(auto => {
                    return (
                        <tr key={auto.vin}>
                            <td>{ auto.vin }</td>
                            <td>{ auto.color }</td>
                            <td>{ auto.year }</td>
                            <td>{ auto.model.name }</td>
                            <td>{ auto.model.manufacturer.name }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <AutomobileForm loadAutomobile={props.loadAutomobile} models={props.models}/>
    </React.Fragment>
  )
}

export default AutomobileList;
