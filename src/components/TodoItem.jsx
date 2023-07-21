import { useState } from "react";
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai'

const TodoItem = ({ itemProp, handleChange, delTodo, updateTodo }) => {
  const [eidting, setEditing] = useState(false);
  const [viewActive, setViewActive] = useState(true);

  const hangleEditing = () => {
    setViewActive(false);
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
      setViewActive(true);
    }
  };

  return (
    <li className="single-todo-li">
      { viewActive && 
        <div className="single-todo">
          <div className="checkbox-todo-wrapper">
            <input 
              type="checkbox" 
              checked={itemProp.completed}
              onChange={() => handleChange(itemProp.id)}
              className="single-todo-checkbox"
            />
            <p className="single-todo-title">
              {itemProp.title}
            </p>
          </div>
          <div className="single-todo-operation">
            <p className="single-todo-tag">
              <span className="tag-notation">Tag</span>
              {itemProp.tag}
            </p>
            <button className="single-todo-del" onClick={() => delTodo(itemProp.id)}>
              <BsFillTrashFill />
            </button>
            <button className="single-todo-edit" onClick={hangleEditing}>
              <AiFillEdit />
            </button>
          </div>
        </div>
      }
      {eidting && 
        <input
          type="text"
          value={itemProp.title}
          className='edit-todo'
          onChange={(e) => updateTodo(e.target.value, itemProp.id)}
          onKeyDown={handleUpdatedDone}
        />
      }
    </li>
  );
};
export default TodoItem;
