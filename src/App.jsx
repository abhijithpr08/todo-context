import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
