import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import mainReducer from "./reducers/mainReducer";
import shopSlice from "./reducers/shopSlice";

const rootReducer = combineReducers({
  main: mainReducer,
  shop: shopSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
