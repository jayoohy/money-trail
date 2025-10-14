import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CategoriesState = {
  readonly categories: string[] | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "category",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      if (state.categories) {
        state.categories = [...state.categories, action.payload];
      } else {
        state.categories = [action.payload];
      }
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
