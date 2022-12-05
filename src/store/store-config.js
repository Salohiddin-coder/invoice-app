import { configureStore } from "@reduxjs/toolkit";

// slices
import { invoicesReducer } from "./slice";
import { userReducer } from "./user-action";

export const configStore = configureStore({
  reducer: {
    invoices: invoicesReducer,
    user: userReducer,
  }
})