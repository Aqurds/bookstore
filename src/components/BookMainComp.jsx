import { Routes, Route } from 'react-router-dom';

import Book from '../pages/Books';
import Category from '../pages/Categories';
import ErrorPage from "../pages/Error";
import Layout from './Layout';

const BookMainComp = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Book />} />
        <Route path="category" element={<Category />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
export default BookMainComp;
