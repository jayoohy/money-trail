import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const selectTransactionReducer = (state: RootState) => state.transactions;

export const selectTransactions = createSelector(
  [selectTransactionReducer],
  (transactionsSlice) => transactionsSlice.transactions
);
