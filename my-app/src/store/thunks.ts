import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetTodos } from "../requests/requests";
import { RootState } from './index';
import { IAddTodo, IChangeTodo, TodoItem } from './types';

const API_URL = "https://631099a2826b98071a459bf2.mockapi.io/todos";

export const getTodos = createAsyncThunk<TodoItem[], undefined, {rejectValue: string}>(
    'todos/getTodos',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetchGetTodos(API_URL);
            if (!response.ok) {
                throw new Error ('Server Error');
            }
            const data = await response.json();
            return data;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const addTodo = createAsyncThunk<TodoItem, IAddTodo ,{rejectValue: string}>(
    'todos/addNewTodo',
    async function ({inputText, date}, {rejectWithValue}) {
        try {
            const todo = {
                id: '1',
                text: inputText,
                date: date,
                isFavourite: false,
                isCompleted: false,
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            });

            if (!response.ok) {
                throw new Error('Не получается добавить задачу. Ошибка сервера.');
            }

            return (await response.json()) as TodoItem;
    

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const changeTodo = createAsyncThunk<TodoItem, IChangeTodo, {rejectValue: string, state: RootState}>(
    'todos/updateTodo',
    async function ({id,  editInpValue}, {rejectWithValue, getState}) {
        const todo = getState().todoList.list.find(todo => todo.id === id);

        if(todo) {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text :  editInpValue,
                })
            });

            if (!response.ok) {
                return rejectWithValue('Ошибка сервера.');
            }
            return (await response.json()) as TodoItem;
        }
        return rejectWithValue('Ошибка сервера.');
    });


export const deleteTodo = createAsyncThunk<string, string, {rejectValue: string}>(
    'todos/deleteTodo',
    async function(id, {rejectWithValue}) {
        try{
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Не получается удалить задачу. Ошибка сервера.')
              }

              return id;
        }
        catch (error: any){
            return rejectWithValue(error.message);
        }
        
    }
);

export const toggleFavourite = createAsyncThunk<TodoItem, string, {rejectValue: string, state: RootState}>(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, getState}) {
        const todo = getState().todoList.list.find(todo => todo.id === id);

        if(todo) {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isFavourite: !todo.isFavourite,
                })
            });

            if (!response.ok) {
                return rejectWithValue('Ошибка сервера!');
            }

            return (await response.json()) as TodoItem;
        }
        return rejectWithValue('Ошибка сервера!');
    }
);

export const toggleCompleted = createAsyncThunk<TodoItem, string, {rejectValue: string, state: RootState}>(
    'todos/toggleCompleted',
    async function (id, {rejectWithValue, getState}) {
        const todo = getState().todoList.list.find(todo => todo.id === id);

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isCompleted : !todo?.isCompleted,
                })
            });

            if (!response.ok) {
                throw new Error('Ошибка сервера!');
            }
            return (await response.json()) as TodoItem;

        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
);