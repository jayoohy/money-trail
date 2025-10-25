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
      date: "10/10/2025",
      time: "10:00:00 AM",
      desc: "October Salary",
      category: "Salary",
      type: "income",
      amount: 250000,
    },
    {
      date: "10/11/2025",
      time: "10:00:00 AM",
      desc: "Groceries",
      category: "Food & Drink",
      type: "expense",
      amount: 18000,
    },
    {
      date: "10/12/2025",
      time: "10:00:00 AM",
      desc: "Apartment Rent",
      category: "Housing",
      type: "expense",
      amount: 70000,
    },
    {
      date: "10/12/2025",
      time: "10:00:00 AM",
      desc: "Client Project",
      category: "Business Profit",
      type: "income",
      amount: 120000,
    },
    {
      date: "10/13/2025",
      time: "10:00:00 AM",
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
    updateTransactions: (state, action: PayloadAction<Transaction>) => {
      if (state.transactions) {
        const updated = action.payload;
        const index = state.transactions.findIndex((t) => t.id === updated.id);
        if (index !== -1) {
          state.transactions[index] = updated;
        }
      }
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      if (state.transactions) {
        const newTransactions = state.transactions.filter(
          (category) => category.id != action.payload
        );
        state.transactions = newTransactions;
      }
    },
    clearTransactions: (state) => {
      state.transactions = null;
    },
  },
});

export const {
  addTransaction,
  updateTransactions,
  deleteTransaction,
  clearTransactions,
} = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
