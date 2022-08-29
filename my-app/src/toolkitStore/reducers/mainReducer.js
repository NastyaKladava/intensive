import { createReducer } from "@reduxjs/toolkit";
import { logIn, setUserData, showModal, submit } from "../actions";

const initialState = {
  isSubmitted: false,
  isLogIn: false,
  isShowModal: false,
  userData: {},
};

export default createReducer(initialState, {
  [submit]: (state, action) => {
    state.isSubmitted = action.payload;
  },

  [logIn]: (state, action) => {
    state.isLogIn = action.payload;
  },

  [showModal]: (state, action) => {
    state.isShowModal = action.payload;
  },

  [setUserData]: (state, action) => {
    state.userData.userLogin = action.payload.login;
    state.userData.userPassword = action.payload.password;
  },
});
