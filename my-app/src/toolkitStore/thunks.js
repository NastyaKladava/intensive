import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCustom } from "../requests/getProducts";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (endUrl, { rejectWithValue }) {
    try {
      const response = await fetchCustom(endUrl);
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

export const fetchCurProduct = createAsyncThunk(
  "products/fetchProduct",
  async function (endUrl, { rejectWithValue }) {
    try {
      const response = await fetchCustom(endUrl);
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
