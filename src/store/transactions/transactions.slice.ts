import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Transaction } from "./transactions.types";

export type TransactionsState = {
  readonly transactions: Transaction[] | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const TRANSACTIONS_INITIAL_STATE: TransactionsState = {
  transactions: null,
  isLoading: false,
  error: null,
};

export const transactionsSlice = createSlice({
  name: "transaction",
  initialState: TRANSACTIONS_INITIAL_STATE,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      if (state.transactions) {
        state.transactions = [...state.transactions, action.payload];
      } else {
        state.transactions = [action.payload];
      }
    },
    clearTransactions: (state) => {
      state.transactions = null;
    },
  },
});

export const { addTransaction, clearTransactions } = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
