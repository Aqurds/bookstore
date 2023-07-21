import { useState } from "react";
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai'
import '../assets/css/singlebook.css';
import BookProgress from "./BookProgress";
import BookChapterProgress from "./BookChapterProgress";

const SingleBook = ({ itemProp, handleChange, delTodo, updateTodo }) => {

  return (
    <li className="single-book-li">
      <div className="single-book">
        <div className="checkbox-todo-wrapper">
          <p className="category-button">
            {itemProp.category}
          </p>
          <p className="book-name">
            {itemProp.name}
          </p>
        </div>
        <div className="single-todo-operation">
          <p className="button-generic book-author">
            {itemProp.author}
          </p>
          <div>
            <button className="button-generic border-right">Comments</button>
            <button className="single-todo-del button-generic border-right" onClick={() => delTodo(itemProp.id)}>
              Remote
            </button>
            <button className="button-generic">
              Edit
            </button>
          </div>
        </div>
      </div>
      <BookProgress />
      <BookChapterProgress />
    </li>
  );
};
export default SingleBook;
