import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (limit, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=" + limit
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    limit: 4,
    currentItem: null,
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
  },
});

export default productsSlice.reducer;
export const { changeLimit } = productsSlice.actions;
