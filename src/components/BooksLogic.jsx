import { useEffect, useState } from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/books/booksSlice";
import '../assets/css/bookslogic.css';

const BooksLogic = () => {

  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);

  const bookItems = Object.entries(books).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });

  return (
    <div>
      {
        loading && <p className="loading-state">Loading...</p>
      }
      <BookList 
        todosProps={bookItems} 
      />
      <AddBook />
    </div>
  )
}
export default BooksLogic;
