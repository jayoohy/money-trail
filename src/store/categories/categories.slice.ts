import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category } from "./categories.types";
import { v4 as uuidv4 } from "uuid";

export type CategoriesState = {
  readonly categories: Category[] | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [
    { type: "income", name: "Salary" },
    { type: "income", name: "Business Profit" },
    { type: "income", name: "Bonus" },
    { type: "expense", name: "Shopping" },
    { type: "expense", name: "Housing" },
    { type: "expense", name: "Transportation" },
    { type: "expense", name: "Food & Drink" },
    { type: "expense", name: "Entertainment" },
    { type: "expense", name: "Health" },
  ].map((cat) => ({ ...cat, id: uuidv4() })),
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "category",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    addCategory: (
      state,
      action: PayloadAction<{ type: string; name: string }>
    ) => {
      const newCategory = {
        id: uuidv4(),
        type: action.payload.type,
        name: action.payload.type,
      };
      if (state.categories) {
        state.categories = [...state.categories, newCategory];
      } else {
        state.categories = [newCategory];
      }
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      if (state.categories) {
        const newCategory = state.categories.filter(
          (category) => category.id != action.payload
        );
        state.categories = newCategory;
      }
    },
  },
});

export const { addCategory, deleteCategory } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
