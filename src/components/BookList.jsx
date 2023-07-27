import SingleBook from "./SingleBook";

const BookList = ({ todosProps }) => {
  return (
    <ul className="single-todo-ul">
      {todosProps.map((todo) => (
        <SingleBook 
          key={todo.id} 
          itemProp={todo} 
        />
      ))}
    </ul>
  );
};
export default BookList;
