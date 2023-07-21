import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { BiSolidAddToQueue } from 'react-icons/bi';
import '../assets/css/addbook.css';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [emptyTodoWarning, setEmptyTodoWarning] =useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setEmptyTodoWarning('');
  };

  const handleTag = (e) => {
    setTag(e.target.value);
    setEmptyTodoWarning('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && tag.trim()) {
      addBook(title, tag);
      setTitle('');
      setTag('');
      setEmptyTodoWarning('');
    } else {
      setEmptyTodoWarning("Empty filed not allowed!")
    }
  };

  return (
    <div className='add-book-wrapper'>
      <p className='add-book-title'>Add new book</p>
      <form onSubmit={handleSubmit} className='add-todo'>
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
