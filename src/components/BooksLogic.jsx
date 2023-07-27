import { useState } from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { useSelector, useDispatch } from "react-redux";

const BooksLogic = () => {

  const books = useSelector(state => state.books.books);

  return (
    <div>
      <BookList 
        todosProps={books} 
      />
      <AddBook />
    </div>
  )
}
export default BooksLogic;
