import React from "react";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{text:string, id: number, onRemoveTodo : (id : number) => void}> = props => {
    const todoClickHandler = (event : React.MouseEvent) => {
        props.onRemoveTodo(props.id);
    }
    return (
        <li onClick={todoClickHandler} className={classes.item}>{props.text}</li>
    );
}

export default TodoItem;