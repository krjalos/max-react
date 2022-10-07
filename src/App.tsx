import React, {useState} from 'react';

import Todos from "./components/Todos";
import TodoModel from "./Models/Todos";

import Modal from "./components/UI/Modal";
import ReactDOM from "react-dom";

const DUMMY_TODOS : TodoModel[] = [
    new TodoModel("Learn React"),
    new TodoModel("Learn Typescript"),
    new TodoModel("Build app"),
    new TodoModel("Get Rich")
  ];

function App() {

  const [todos, setTodos] = useState<TodoModel[]>(DUMMY_TODOS);
  const [confirmDelete, setConfirmDelete] = useState<{id?: number; show:boolean;}>({show:false });

  const deleteHandler = (id : number) => {
    setConfirmDelete({show: true, id: id});
  }

  const cancelHandler = () => {
    setConfirmDelete({show: false});
  }

  const confirmHandler = () => {
    setTodos((prevState) => prevState.filter(todo => todo.id !== confirmDelete.id));
    setConfirmDelete({show: false});
  }

  return (
      <>
        <h1>My Todos</h1>
        <Todos onDelete={deleteHandler} todos={todos}/>
        {confirmDelete.show ? ReactDOM.createPortal(<Modal cancel={cancelHandler} confirm={confirmHandler}/>, document.getElementById('modal') as HTMLElement) : null}
      </>
  );
}

export default App;
