import TodoItem from "./TodoItem";

const TodosList = ({ todosProps, handleChange, delTodo, updateTodo }) => {
  return (
    <ul className="single-todo-ul">
      {todosProps.map((todo) => (
        <TodoItem 
          key={todo.id} 
          itemProp={todo} 
          handleChange={handleChange} 
          delTodo={delTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};
export default TodosList;
