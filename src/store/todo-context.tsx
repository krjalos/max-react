import React, {useState} from "react";
import Todo from "../models/todo";

const TodoContext = React.createContext<{
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
}>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: number) => {}
});


const TodosContextProvider : React.FC<{children?: React.ReactNode}> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos((prevState) => [...prevState, new Todo(text)]);
    }

    const removeTodo = (id : number) => {
        setTodos((prevState) => prevState.filter(todo => todo.id !== id));
    }

    return (
        <TodoContext.Provider value={{items: todos, addTodo, removeTodo}}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodosContextProvider };
export default TodoContext;