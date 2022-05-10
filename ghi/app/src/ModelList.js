// import { NavLink } from 'react-router-dom';

function ModelList(props) {
    console.log("this is model list", props.models);
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Picture</th>
            </tr>
        </thead>
        <tbody>
            {props.models.map(model => {
                return (
                    <tr key={model.href}>
                        <td>{ model.name }</td>
                        <td>{ model.manufacturer.name }</td>
                        <td>
                            <img src={ model.picture_url } alt="model of the car" />
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
  )
}

export default ModelList;
