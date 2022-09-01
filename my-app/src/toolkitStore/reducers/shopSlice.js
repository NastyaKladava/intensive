import { createSlice } from "@reduxjs/toolkit";
import { fetchCurProduct, fetchProducts } from "../thunks";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    curProduct: [],
    loading: false,
    error: null,
    limit: 4,
  },

  reducers: {
    changeLimit: (state) => {
      state.limit = state.limit + 4;
    },
  },

  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
    },

    [fetchCurProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.curProduct = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { changeLimit } = productsSlice.actions;
