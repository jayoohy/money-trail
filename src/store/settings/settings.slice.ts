import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
  readonly currency: string;
};

export const SETTINGS_INITIAL_STATE: SettingsState = {
  currency: "₦",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: SETTINGS_INITIAL_STATE,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
