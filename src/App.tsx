import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import React, {useContext} from "react";
import TodoContext from "./store/todo-context";

function App() {

    const todoCtx = useContext(TodoContext);

  return (
    <div className="App">
        <Todos todos={todoCtx.items} onRemoveTodo={todoCtx.removeTodo}/>
        <NewTodo onAddTodo={todoCtx.addTodo}/>
    </div>
  );
}

export default App;
