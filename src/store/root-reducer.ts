import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.slice";
import { transactionsReducer } from "./transactions/transactions.slice";
import { settingsReducer } from "./settings/settings.slice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  transactions: transactionsReducer,
  settings: settingsReducer,
});

export default rootReducer;
