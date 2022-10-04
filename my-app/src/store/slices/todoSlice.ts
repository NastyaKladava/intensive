import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, getTodos, toggleFavourite, toggleCompleted, changeTodo } from '../thunks';
import { filters } from '../../utils/todoFilter';
import { TodoState } from "../types";
import { isError } from '../../utils/defineServerError';


const initialState: TodoState = {
    list: [],
    error:null,
    loading: false,
    filterBy: filters.ALL
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // clearList: (state) => {
        //     state.list = [];
        // }
        
        setFilter: (state, action: PayloadAction<string>) => {
            state.filterBy = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(getTodos.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getTodos.fulfilled, (state, action)=>{
            state.list = action.payload;
            state.loading = false;
        }) 

        .addCase(addTodo.pending, (state) => {
            state.error = null;
          })
        .addCase(addTodo.fulfilled, (state, action) => {
            state.list.push(action.payload);
        })

        .addCase(changeTodo.pending, (state) => {
            state.error = null;
        })
        .addCase(changeTodo.fulfilled, (state, action) => {
            const todo = state.list.find(todo => todo.id === action.payload.id );
            if (todo) {
                todo.text = action.payload.text;
                todo.date = action.payload.date;
            }
        })

        .addCase(deleteTodo.fulfilled, (state,action) => {
            state.list = state.list.filter((item) => item.id !== action.payload);
        })

        .addCase(toggleFavourite.fulfilled, (state,action) => {
            const todo = state.list.find(todo => todo.id === action.payload.id );
            if (todo) {
                todo.isFavourite = ! todo.isFavourite;
            }
        })

        .addCase(toggleCompleted.fulfilled, (state,action) => {
            const todo = state.list.find(todo => todo.id === action.payload.id );
            if (todo) {
                todo.isCompleted = ! todo.isCompleted;
            }
        })

        .addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});

export default todoSlice.reducer;

export const {setFilter} = todoSlice.actions;


