import type {RootState}  from "../store";
import { IDeletedTodo, TodoItem } from "./types";


//MainSliceSelectors
export const textInputSelector = (store: RootState): string => store.main.textInput;
export const isTextInpValid = (store: RootState): boolean  =>  store.main.istextInputValidated;
export const inputErrorSelector = (store:RootState): string => store.main.inputError;

export const editingTaskSelector = (store: RootState): string | null => store.main.editingTask;
export const isShowModalDelSelector = (store:RootState): boolean => store.main.isShowModalDel;
export const deletedTodoSelector = (store:RootState): IDeletedTodo => store.main.deletedTodo;


//TodoSliceSelectors
export const todoListSelector = (store: RootState ):TodoItem[] | [] => store.todoList.list;
export const filterSelector = (store:RootState):string => store.todoList.filterBy;

export const loadingSelector = (store: RootState): boolean => store.todoList.loading;
export const  serverErrorSelector = (store: RootState): string | null => store.todoList.error;

