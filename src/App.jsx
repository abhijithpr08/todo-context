import { TodoContext,TodoProvider } from "./context/TodoContext"

function App(){
  return(
    <TodoProvider>
      <TodoContext/>
      <h1>hey todo</h1>
    </TodoProvider>
  )
}

export default App