import React, { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo : React.FC<{onAddTodo : (text: string) => void}> = props => {

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();

        const todoInputValue = inputRef.current!.value;

        inputRef.current!.value = "";

        props.onAddTodo(todoInputValue);
    }

    return (
        <form className={classes.form} action="" onSubmit={submitHandler}>
            <label htmlFor="todo-text">Enter Todo</label>
            <input ref={inputRef} type="text" id='todo-text'/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;