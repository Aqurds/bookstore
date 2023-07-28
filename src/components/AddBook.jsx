import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { BiSolidAddToQueue } from 'react-icons/bi';
import '../assets/css/addbook.css';
import { useDispatch } from 'react-redux';
import { addBook, addTheBook } from '../redux/books/booksSlice';
import { v4 as uuidv4 } from "uuid";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [emptyTodoWarning, setEmptyTodoWarning] =useState('');
  const dispatch = useDispatch();

  const options = [
    'Mystery', 'Thriller', 'Fantasy', 'Science Fiction', 'Historical Fiction'
  ];

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setEmptyTodoWarning('');
  };

  const handleCategory = (e) => {
    setCategory(e.value);
    setEmptyTodoWarning('');
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
    setEmptyTodoWarning('');
  }

  const hangleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !author) {
      setEmptyTodoWarning("Fields can not be empty!");
      return;
    }
    dispatch(
      addTheBook(
        {
          item_id: uuidv4(), 
          title: title, 
          author: author,
          category: category,
        }
      )
    );
    setCategory('');
    setTitle('');
    setAuthor('');
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
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
          className='add-book-author'
        />
        <Dropdown 
          className='add-book-category'
          options={options}
          placeholder="Select a category"
          onChange={handleCategory}
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
