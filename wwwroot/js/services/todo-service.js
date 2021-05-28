// Data modification
export class TodoService {
  constructor(TodoItemModel, TodoListModel) {
    this.TodoItemModel = TodoItemModel;
    this.TodoListModel = TodoListModel;

    this.todoList = new this.TodoListModel();
  }

  bindTodoChange(callback) {
    this.onTodoListChange = callback;
  }

  async _commitPost(todoList, todoItem) {
    let response = await fetch("https://localhost:5001/Todo/Todo", {
      method: "Post",
      body: JSON.stringify(todoItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
    
      /*
      if (response.status) {
      this.onTodoListChange(todoList);
    } else {
    //
    }

    this.onTodoListChange(todoList);
    */
  }

  _commitDelete(todoList, todoItem) {
    this.onTodoListChange(todoList);
  }

  _commitGet(todoList, todoItem) {
    this.onTodoListChange(todoList);
  }

  _commitPut(todoList, todoItem) {
    this.onTodoListChange(todoList);
  }

  async addTodo(text) {
    let newTodo = new this.TodoItemModel(text, false);

    this.todoList.list.push(newTodo);

    console.log(newTodo);
    await this._commitPost(this.todoList.list, newTodo);
  }

  getTodo() {}

  removeTodo(id) {
    this.todoList.list = this.todoList.list.filter((params) => 
      params.id != id
    )
    this._commitDelete(this.todoList.list);
  }

  toggleTodo() {}
}
