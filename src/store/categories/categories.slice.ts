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
    { type: "income", name: "Salary / Wages" },
    { type: "income", name: "Freelance / Side Hustle" },
    { type: "income", name: "Business Income" },
    { type: "income", name: "Investments / Dividends" },
    { type: "income", name: "Interest / Savings Returns" },
    { type: "income", name: "Gifts / Donations Received" },
    { type: "income", name: "Refunds / Reimbursements" },
    { type: "income", name: "Other Income" },

    { type: "expense", name: "Housing / Rent" },
    { type: "expense", name: "Utilities (Electricity, Water, Internet)" },
    { type: "expense", name: "Transportation" },
    { type: "expense", name: "Food & Groceries" },
    { type: "expense", name: "Dining Out / Takeout" },
    { type: "expense", name: "Clothing & Shopping" },
    { type: "expense", name: "Entertainment / Subscriptions" },
    { type: "expense", name: "Health & Medical" },
    { type: "expense", name: "Fitness / Gym" },
    { type: "expense", name: "Education / Courses" },
    { type: "expense", name: "Childcare / Family Support" },
    { type: "expense", name: "Loan / Debt Payment" },
    { type: "expense", name: "Insurance" },
    { type: "expense", name: "Savings Deposit" },
    { type: "expense", name: "Miscellaneous / Other" },
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
