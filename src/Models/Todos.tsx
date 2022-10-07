class TodoModel {
  id: number;
  text: string;

  constructor(todoText : string) {
    this.id =  new Date().getTime() + Math.random();
    this.text = todoText;
  }
}

export default TodoModel;