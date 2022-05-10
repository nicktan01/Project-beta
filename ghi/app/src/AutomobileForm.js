import React from 'react';

class AutomobileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            year: "",
            vin: "",
            model_id: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleVINChange = this.handleVINChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        
        const url = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newAutomobile = await response.json();
            console.log(newAutomobile);
            this.setState({
                color: "",
                year: "",
                vin: "",
                model_id: ""
            });
            this.props.loadAutomobile();
        }
    }
    
    handleColorChange(event){
        const value = event.target.value;
        this.setState({ color: value });
    }
    handleYearChange(event){
        const value = event.target.value;
        this.setState({ year: value });
    }
    handleVINChange(event){
        const value = event.target.value;
        this.setState({ vin: value });
    }
    handleModelChange(event){
        const value = event.target.value;
        this.setState({ model_id: value });
    }
    render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add Automobile</h1>
                <form onSubmit={this.handleSubmit} id="create-conference-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleColorChange} value={this.state.name} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                    <label htmlFor="color">Color</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleYearChange} value={this.state.year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                    <label htmlFor="year">Year</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleVINChange} value={this.state.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">VIN</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleModelChange} value={this.state.model_id} placeholder="Model" required type="text" name="model" id="model" className="form-control">
                        <option value="">Choose a model</option>
                        {this.props.models.map(model => {
                            return(
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            )
                        })}
                    </select>
                  </div>
                  <button className="btn btn-primary">Add</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default AutomobileForm;