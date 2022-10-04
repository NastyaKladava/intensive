interface TodoItem  {
  id: string
  text: string,
  date: string,
  isFavourite: boolean,
  isCompleted: boolean,
}

export const filters = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    NOT_COMPLETED: "NOT_COMPLETED",
    SELECTED: 'SELECTED'
  };


export const filterTodoList = (status:string, todos: TodoItem[]) : TodoItem[]  => {
    if (status === filters.COMPLETED) {
      return todos.filter(todo => todo.isCompleted && (todo.isCompleted && todo.isFavourite));
    }
    else if (status === filters.NOT_COMPLETED) {
      return todos.filter(todo => !todo.isCompleted && (todo.isCompleted && todo.isFavourite))
    }
    else if (status === filters.SELECTED) {
      return todos.filter(todo => todo.isFavourite && !todo.isCompleted)
    }
    else {
      return todos;
    }
};