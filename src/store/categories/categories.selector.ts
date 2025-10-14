import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const selectCategoryReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
