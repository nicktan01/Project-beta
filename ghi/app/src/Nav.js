import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink className="navbar-brand" to="/inventory">Inventory</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/inventory/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/inventory/models">Vehicle models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/inventory/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/technicians">Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/technicians/new">Add technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/appointments">Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/appointments/new">Add appointment</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;

