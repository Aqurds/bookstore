import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { BiSolidAddToQueue } from 'react-icons/bi';
import '../assets/css/addbook.css';
import { useDispatch } from 'react-redux';
import { addBook, addTheBook } from '../redux/books/booksSlice';
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [emptyTodoWarning, setEmptyTodoWarning] =useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setEmptyTodoWarning('');
  };

  const handleTag = (e) => {
    setTag(e.target.value);
    setEmptyTodoWarning('');
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    if (!title || !tag) {
      setEmptyTodoWarning("Fields can not be empty!");
      return;
    }
    dispatch(
      addTheBook(
        {
          item_id: uuidv4(), 
          title: title, 
          author: 'author',
          category: 'category',
        }
      )
    );
    setTag('');
    setTitle('');
  }

  return (
    <div className='add-book-wrapper'>
      <p className='add-book-title'>Add new book</p>
      <form onSubmit={hangleSubmit} className='add-todo'>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={handleTitle}
          className='add-book-title'
        />
        <input
          type="text"
          placeholder="Category"
          value={tag}
          onChange={handleTag}
          className='add-book-category'
        />
        <button className='add-book-submit button-color'>
          Add Book
        </button>
      </form>
      <span className='empty-field-warning'>{ emptyTodoWarning }</span>
    </div>
  );
};
export default AddBook;
