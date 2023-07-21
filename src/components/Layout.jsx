import Navbar from './Navbar';
import Header from './Header';
import TodosLogic from './TodosLogic';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layout;
