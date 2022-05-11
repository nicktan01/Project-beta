import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import Inventory from './Inventory';
import ManufacturerList from './ManufacturerList';
import ModelList from './ModelList';
import AutomobileList from './AutomobileList';
import TechnicianList from './TechnicianList';
import React from 'react'; 
import TechnicianForm from './TechnicianForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturers: [],
      models: [],
      automobiles: [],
      technicians: [],
    };

    this.loadManufacturer = this.loadManufacturer.bind(this);
    this.loadModel = this.loadModel.bind(this);
    this.loadAutomobile = this.loadAutomobile.bind(this);
    this.loadTechnician = this.loadTechnician.bind(this);

  }
  async componentDidMount(){
    this.loadManufacturer();
    this.loadModel();
    this.loadAutomobile();
    this.loadTechnician();
  }
  async loadManufacturer(){
    const response = await fetch('http://localhost:8100/api/manufacturers/');
    if(response.ok) {
      const data = await response.json();
      this.setState({
        manufacturers: data.manufacturers
      });
    }
  }
  async loadModel(){
    const response = await fetch('http://localhost:8100/api/models/');
    if(response.ok) {
      const data = await response.json();
      this.setState({
        models: data.models
      });
    }
  }
  async loadAutomobile(){
    const response = await fetch('http://localhost:8100/api/automobiles/');
    if(response.ok) {
      const data = await response.json();
      this.setState({
        automobiles: data.autos
      });
    }
  }
  async loadTechnician (){
    const response = await fetch('http://localhost:8080/api/technicians/');
    if(response.ok) {
      const data = await response.json();
      this.setState({
        technicians: data.technicians
      });
    }
  }
  render(){
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="inventory">
              <Route path="manufacturers" element={<ManufacturerList manufacturers={this.state.manufacturers} loadManufacturer={this.loadManufacturer}/>} />
              <Route path="models" element={<ModelList models={this.state.models} manufacturers={this.state.manufacturers} loadModel={this.loadModel}/>} />
              <Route path="automobiles" element={<AutomobileList automobiles={this.state.automobiles} models={this.state.models} loadAutomobile={this.loadAutomobile}/>} />
            </Route>
            <Route path="technicians">
              <Route index element={<TechnicianList technicians={this.state.technicians} />}/>
              <Route path="new" element={<TechnicianForm />}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
    
  }
}

export default App;
