import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.length === 0 && <p>No todos found</p>}
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
