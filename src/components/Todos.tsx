import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos : React.FC<{todos : Todo[], onRemoveTodo : (id : number) => void}> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.todos.map(todo => {
                return <TodoItem key={todo.id} id={todo.id} text={todo.text} onRemoveTodo={props.onRemoveTodo}/>
            })}
        </ul>
    );
}

export default Todos;