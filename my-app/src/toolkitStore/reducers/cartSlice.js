import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQty: 0,
    totalSum: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const qty = Number(action.payload.inputQty) || 1;
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity + qty;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: qty,
        });
      }
    },

    incrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 0) {
        item.quantity = 0;
      } else {
        item.quantity--;
      }
    },

    countProductSum: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.sum += itemInCart.price;
      } else {
        itemInCart.sum = itemInCart.price;
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },

    getTotals: (state) => {
      const qty = state.cart.reduce(
        (totalQty, cartItem) => totalQty + cartItem.quantity,
        0
      );

      const sum = state.cart.reduce(
        (totalSum, cartItem) => totalSum + cartItem.price * cartItem.quantity,
        0
      );

      state.totalQty = qty;
      state.totalSum = sum.toFixed(2);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeItem,
  getTotals,
  clearCart,
} = cartSlice.actions;
