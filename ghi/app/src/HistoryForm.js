import React from 'react';

class ServiceHistoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVINChange = this.handleVINChange.bind(this);
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state}

        const url = 'http://localhost:8080/api/appointments/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            header: {
                'Content-type': 'application/json',
            }
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            console.log(newAppointment);
            this.setState({
                vin: ""
            })
        }
    }
    handleVINChange(event){
        const value = event.target.value;
        this.setState({ vin: value })
    }
    render(){
        return(
        <div className="search-container">
            <h1>Find service</h1>
                <form onSubmit={this.handleSubmit} id="create-conference-form" className='d-flex p-2'>
                    <input onChange={this.handleVINChange} value={this.state.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
                    <button className="btn btn-primary">Search VIN</button>
                </form>
        </div>
        )
    }
}

export default ServiceHistoryForm;