//MainSlice
export interface IDeletedTodo {
    id: string,
    text: string,
    date: string
}

export interface IMainState {
    textInput:  string,
    istextInputValidated: boolean,
    inputError: string ,
    editingTask: string | null,
    isShowModalDel: boolean,
    deletedTodo : IDeletedTodo
}

//TodoSlice
export interface TodoItem  {
    id: string
    text: string,
    date: string,
    isFavourite: boolean,
    isCompleted: boolean,
}

export interface TodoState {
    list: TodoItem[],
    error: string | null,
    loading: boolean
    filterBy: string
}

//Thunks
export interface IChangeTodo {
    id: string,
    editInpValue: string
}

export interface IAddTodo {
    inputText: string,
    date: string
}