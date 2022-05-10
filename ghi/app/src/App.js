import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import Inventory from './Inventory';
import ManufacturerList from './ManufacturerList';
import ModelList from './ModelList';
import AutomobileList from './AutomobileList';

function App(props) {
  // if (props.manufacturers === undefined) {
  //   console.log("got no manufacturers");
  //   return [];
  // }
  // if (props.models === undefined) {
  //   console.log("got no models");
  //   return [];
  // }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="inventory" element={<Inventory />} >
            <Route path="manufacturers" element={<ManufacturerList manufacturers={props.manufacturers}/>} />
            <Route path="models" element={<ModelList models={props.models}/>} />
            <Route path="automobiles" element={<AutomobileList automobiles={props.automobiles}/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
