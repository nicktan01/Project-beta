import { NavLink, Outlet } from 'react-router-dom';

function Inventory() {
  return (
      <>
        <h1>Inventory</h1>
        <Outlet />
      </>
  )
}

export default Inventory;
