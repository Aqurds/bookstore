import SingleBook from "./SingleBook";

const BookList = ({ todosProps, handleChange, delTodo, updateTodo }) => {
  return (
    <ul className="single-todo-ul">
      {todosProps.map((todo) => (
        <SingleBook 
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
export default BookList;
