import React from 'react';

class ModelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            picture_url: "",
            manufacturer_id: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);

    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        
        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel);
            this.setState({
                name: "",
                picture_url: "",
                manufacturer_id: ""
            });
            this.props.loadModel();
        }
    }
    
    handleNameChange(event){
        const value = event.target.value;
        this.setState({ name: value });
    }
    handlePictureChange(event){
        const value = event.target.value;
        this.setState({ picture_url: value});
    }
    handleManufacturerChange(event){
        const value = event.target.value;
        this.setState({ manufacturer_id: value});
    }
    render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add Model</h1>
                <form onSubmit={this.handleSubmit} id="create-conference-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handlePictureChange} value={this.state.picture_url} placeholder="Picture_url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture_url</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleManufacturerChange} value={this.state.manufacturer_id} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control">
                        <option value="">Choose a manufacturer</option>
                        {this.props.manufacturers.map(manufacturer => {
                            return(
                                <option key={manufacturer.id} value={manufacturer.id}>
                                    {manufacturer.name}
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

export default ModelForm;