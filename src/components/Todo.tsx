import React from "react";
import TodoModel from "../Models/Todos";

const Todo : React.FC<{todo : TodoModel, onDelete: (id: number) => void}> = (props) => {

  return (
      <div>
          <h2>{props.todo.text}</h2>
          <div>
              <button onClick={props.onDelete.bind(null, props.todo.id)}>Delete</button>
          </div>
      </div>
  );
}

export default Todo;