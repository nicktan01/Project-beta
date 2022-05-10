function ModelList(props) {
    console.log(props);
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {props.models.map(model => {
                return (
                    <tr key={model.name}>
                        <td>{ model.name }</td>
                        <td>{ model.picture_url }</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
  )
}

export default ModelList;
