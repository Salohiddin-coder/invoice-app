import { createSlice } from "@reduxjs/toolkit";

export const { reducer: invoicesReducer, actions: invoicesActions } = createSlice({
  name: "invoisces",
  initialState: {
    invoicesList: [],
    loading: false,
  },
  reducers: {
    setInvoicesList: (state, { payload }) => {
      state.invoicesList = payload;
    },

    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setDelete: (state, { payload }) => {
      const invoicesList = state.invoicesList
      const index = invoicesList?.findIndex(item => item.id === +payload)
      state.invoicesList = [...invoicesList?.slice(0, index), ...invoicesList?.slice(index + 1)]
    },
    setEdite: (state, { payload }) => {
      const invoicesList = state.invoicesList;
      const index = invoicesList?.findIndex(item => item.id === payload.id)
      state.invoicesList = [...invoicesList?.slice(0, index), payload, ...invoicesList?.slice(index + 1)]
    },
    setPaid: (state, { payload }) => {
      const invoicesList = state.invoicesList;
      const index = invoicesList?.findIndex(item => item.id === payload.id)
      state.invoicesList = [...invoicesList?.slice(0, index), payload, ...invoicesList?.slice(index + 1)]
    }
  }

})