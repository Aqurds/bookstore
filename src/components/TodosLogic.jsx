import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
  const [todos, setTodos] = useState(
    [
      {
        id: uuidv4(),
        title: "Update all elements of an array with it's data type",
        tag: 'Array',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Develop a function to get all key of object properties',
        tag: 'Object',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Create a function to calculate 2 numbers with data type chekcing',
        tag: 'Arrithmetic',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Calculate the foctorial of a given input',
        tag: 'Loop',
        completed: false,
      },
    ]
  )

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const updateTodo = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
          // todo.tag = updatedTag;
        }
        return todo;
      })
    );
  };
  

  const addTodoItem = (title, tag) => {
    console.log('Adding todo ...')
    const newTodo = {
      id: uuidv4(),
      title: title,
      tag: tag,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList 
        todosProps={todos} 
        handleChange={handleChange} 
        delTodo={delTodo} 
        updateTodo={updateTodo}
      />
    </div>
  )
}
export default TodosLogic;
