import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import todoSlice from "./slices/todoSlice";


const rootReducer = combineReducers({
    todoList: todoSlice,
    main: mainSlice
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;