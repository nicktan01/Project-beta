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

    };

  }
  render(){
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="inventory" element={<Inventory />} >
              <Route path="manufacturers" element={<ManufacturerList manufacturers={this.props.manufacturers}/>} />
              <Route path="models" element={<ModelList models={this.props.models}/>} />
              <Route path="automobiles" element={<AutomobileList automobiles={this.props.automobiles}/>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
    
  }
}

export default App;
