import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories, type Category } from "./categoriesApi";

type CategoriesState = {
  items: Category[];
  status: "idle" | "loading" | "success" | "error";
};

const initialState: CategoriesState = {
  items: [],
  status: "idle"
};

export const loadCategories = createAsyncThunk(
  "categories/load",
  fetchCategories
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(loadCategories.rejected, (state) => {
        state.status = "error";
      });
  }
});

export default categoriesSlice.reducer;
