import { configureStore } from "@reduxjs/toolkit";

// slices
import { invoicesReducer } from "./invoices-slice";
import { userReducer } from "./user-slice";

export const configStore = configureStore({
  reducer: {
    invoices: invoicesReducer,
    user: userReducer,
  }
})