import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import Inventory from './Inventory';
import ManufacturerList from './ManufacturerList';

function App(props) {
  if (props.manufacturers === undefined) {
    console.log("got no manufacturers");
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="inventory" element={<Inventory />} >
            <Route path="manufacturers" element={<ManufacturerList manufacturers={props.manufacturers}/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
