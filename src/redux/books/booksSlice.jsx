import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (currState, action) => {
      currState.books.push(action.payload)
    },
    removeBook: (currState, action) => {
      currState.books = currState.books.filter((book) => book.id !== action.payload)
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;