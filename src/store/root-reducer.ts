import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.slice";
import { transactionsReducer } from "./transactions/transactions.slice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
