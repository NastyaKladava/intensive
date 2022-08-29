import { createAction } from "@reduxjs/toolkit";
import { LOGIN, SETUSERDATA, SHOWMODAL, SUBMIT } from "./constants";
export const submit = createAction(SUBMIT);
export const logIn = createAction(LOGIN);
export const showModal = createAction(SHOWMODAL);

export const setUserData = createAction(SETUSERDATA);
