import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './books/booksSlice';
import categoriesRecuder from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesRecuder,
  },
})