import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { BiSolidAddToQueue } from 'react-icons/bi';

const InputTodo = ({ addTodoItem }) => {
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
      addTodoItem(title, tag);
      setTitle('');
      setTag('');
      setEmptyTodoWarning('');
    } else {
      setEmptyTodoWarning("Empty filed not allowed!")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='add-todo'>
        <input
          type="text"
          placeholder="Add Problem"
          value={title}
          onChange={handleTitle}
          className='add-todo-title'
        />
        <span className='add-todo-title-example'>
          Example problem: 'Get the sum of all numbers upto the input value'
        </span>
        <input
          type="text"
          placeholder="Add Tag"
          value={tag}
          onChange={handleTag}
          className='add-todo-tag'
        />
        <span className='add-todo-tag-example'>
          Example tag: 'Recursion'
        </span>
        <button className='add-todo-submit'>
          <BiSolidAddToQueue />
        </button>
      </form>
      <span className='empty-field-warning'>{ emptyTodoWarning }</span>
    </>
  );
};
export default InputTodo;
