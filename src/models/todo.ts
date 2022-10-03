class Todo {
    id: number;
    text: string;

    constructor(todoText : string) {
        this.id = Date.now() + Math.random() * 10;
        this.text = todoText;
    }
}

export default Todo;