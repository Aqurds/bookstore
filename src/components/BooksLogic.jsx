import { useState } from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { v4 as uuidv4 } from "uuid";

const BooksLogic = () => {
  const [todos, setTodos] = useState(
    [
      {
        id: uuidv4(),
        name: "The Hunger Games",
        author: 'Suzanne Collins',
        category: 'Action',
      },
      {
        id: uuidv4(),
        name: 'Dune',
        author: 'Frank Herbert',
        category: 'Science Fiction',
      },
      {
        id: uuidv4(),
        name: 'Capital in the Twenty-First Century',
        author: 'Suzanne Collins',
        category: 'Economy',
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
  

  const addBook = (title, tag) => {
    console.log('Adding todo ...')
    const newTodo = {
      id: uuidv4(),
      name: title,
      category: tag,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <BookList 
        todosProps={todos} 
        handleChange={handleChange} 
        delTodo={delTodo} 
        updateTodo={updateTodo}
      />
      <AddBook addBook={addBook} />
    </div>
  )
}
export default BooksLogic;
