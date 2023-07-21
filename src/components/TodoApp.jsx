import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import ErrorPage from "../pages/Error";
import Layout from '../components/Layout';

const TodoApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
