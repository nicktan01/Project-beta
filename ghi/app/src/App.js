import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import Inventory from './Inventory';
import ManufacturerList from './ManufacturerList';
import ModelList from './ModelList';
import AutomobileList from './AutomobileList';
import React from 'react'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturers: [],
      models: [],
      automobiles: [],
    };

    this.loadManufacturer = this.loadManufacturer.bind(this);
    this.loadModel = this.loadModel.bind(this);
    this.loadAutomobile = this.loadAutomobile.bind(this);

  }
  async componentDidMount(){
    this.loadManufacturer();
    this.loadModel();
    this.loadAutomobile();
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
  render(){
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="inventory" element={<Inventory />} >
              <Route path="manufacturers" element={<ManufacturerList manufacturers={this.state.manufacturers} loadManufacturer={this.loadManufacturer}/>} />
              <Route path="models" element={<ModelList models={this.state.models} manufacturers={this.state.manufacturers} loadModel={this.loadModel}/>} />
              <Route path="automobiles" element={<AutomobileList automobiles={this.state.automobiles} models={this.state.models} loadAutomobile={this.loadAutomobile}/>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
    
  }
}

export default App;
