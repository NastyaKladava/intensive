import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDeletedTodo, IMainState } from "../types";


const initialState: IMainState  = {
    textInput:  '',
    istextInputValidated: true,
    inputError: '',
    editingTask: null,
    isShowModalDel: false,
    deletedTodo: {id: '', text: '', date: ''}
}


const mainSlice = createSlice({
    name: 'mainData',
    initialState,
    reducers: {
        updateInputText:(state, action: PayloadAction<string>) =>  {
            state.textInput = action.payload;
        },

        updateTextInputValidation: (state, action: PayloadAction<boolean>) => {
            state.istextInputValidated = action.payload;
        },

        updateEditingTask: (state, action: PayloadAction<string>) => {
            state.editingTask = action.payload;
        },

        setShowModal: (state, action: PayloadAction<boolean>) => {
            state.isShowModalDel = action.payload;
        },

        setDeletedTodo: (state, action: PayloadAction<IDeletedTodo>) => {
            state.deletedTodo.id = action.payload.id;
            state.deletedTodo.text = action.payload.text;
            state.deletedTodo.date = action.payload.date;
        }
    }
});

export default mainSlice.reducer;

export const {updateInputText, updateTextInputValidation,  updateEditingTask,  setShowModal,  setDeletedTodo} = mainSlice.actions;