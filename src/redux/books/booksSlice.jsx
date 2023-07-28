import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const APPID = '1ZndMyOgnRMUYmlQAdZA';
// const APPID = 'LQYGPUQgAZCQeGfRpgA8';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APPID}/books`;

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${url}`);
  console.log('book response', response.data)
  return response.data;
});

const addTheBook = createAsyncThunk('books/addTheBook', async (book, API) => {
  try {
    await axios.post(`${url}`, book);
    API.dispatch(fetchBooks());
    const response = API.getState().books;
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

const deleteTheBook = createAsyncThunk(
  'books/deleteTheBook',
  async (bookId, API) => {
    try {
      await axios.delete(`${url}/${bookId}`);
      API.dispatch(fetchBooks());
      return bookId;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const initialState = {
  books: [],
  loading: true,
  error: null,
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
  extraReducers: (builder) => {
    builder.addCase(addTheBook.fulfilled, (state, action) => {
      state.loading = false;
    }).addCase(addTheBook.pending, (state, action) => {
      state.loading = true;
    }).addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.books = action.payload;
    }).addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }).addCase(fetchBooks.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(deleteTheBook.fulfilled, (state, action) => {
      delete state.books[action.payload];
    });
  },
});

export { fetchBooks, addTheBook, deleteTheBook };

export const { addBook, removeBook } = booksSlice.actions;
export const displayBook = (state) => state.books;
export default booksSlice.reducer;