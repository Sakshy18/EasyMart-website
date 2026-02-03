import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsApi, type Product } from "./productsApi";

type ProductsState = {
  items: Product[];
  loading: boolean;
  error?: string;
};

const initialState: ProductsState = {
  items: [],
  loading: false
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    return fetchProductsApi();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default productsSlice.reducer;
