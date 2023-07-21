import Header from './Header';
import TodosLogic from './BooksLogic';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
