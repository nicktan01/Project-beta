function AutomobileList(props) {
    console.log(props);
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {props.automobiles.map(auto => {
                return (
                    <tr key={auto.vin}>
                        <td>{ auto.year }</td>
                        <td>{ auto.color }</td>
                        <td>{ auto.vin }</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
  )
}

export default AutomobileList;
