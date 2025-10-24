import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Transaction } from "./transactions.types";
import { v4 as uuidv4 } from "uuid";

export type TransactionsState = {
  readonly transactions: Transaction[] | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const TRANSACTIONS_INITIAL_STATE: TransactionsState = {
  transactions: [
    {
      date: "2025-10-10",
      time: "10am",
      desc: "October Salary",
      category: "Salary",
      type: "income",
      amount: 250000,
    },
    {
      date: "2025-10-11",
      time: "10am",
      desc: "Groceries",
      category: "Food & Drink",
      type: "expense",
      amount: 18000,
    },
    {
      date: "2025-10-12",
      time: "10am",
      desc: "Apartment Rent",
      category: "Housing",
      type: "expense",
      amount: 70000,
    },
    {
      date: "2025-10-12",
      time: "10am",
      desc: "Client Project",
      category: "Business Profit",
      type: "income",
      amount: 120000,
    },
    {
      date: "2025-10-13",
      time: "10am",
      desc: "Fuel & Transport",
      category: "Transportation",
      type: "expense",
      amount: 12000,
    },
  ].map((cat) => ({ ...cat, id: uuidv4() })),
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
    deleteTransaction: (state, action: PayloadAction<string>) => {
      if (state.transactions) {
        const newTransaction = state.transactions.filter(
          (category) => category.id != action.payload
        );
        state.transactions = newTransaction;
      }
    },
    clearTransactions: (state) => {
      state.transactions = null;
    },
  },
});

export const { addTransaction, deleteTransaction, clearTransactions } =
  transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
