import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const selectSettingReducer = (state: RootState) => state.settings;

export const selectCurrency = createSelector(
  [selectSettingReducer],
  (settingsSlice) => settingsSlice.currency
);
