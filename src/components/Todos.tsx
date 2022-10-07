import React from "react";

import Todo from "./Todo";
import TodoModel from "../Models/Todos";

const Todos:React.FC<{todos: TodoModel[], onDelete : (id : number) => void}> = (props) => {
    return (
      <div>
          {props.todos.map(todo => <Todo key={todo.id} todo={todo} onDelete={props.onDelete}/>)}
      </div>
    );
}

export default Todos;