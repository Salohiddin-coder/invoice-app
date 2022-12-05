import { createSlice } from "@reduxjs/toolkit";

export const { actions: userActions, reducer: userReducer } = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("token"),
  },

  reducers: {
    setUser: (state, { payload }) => {
      if (payload !== null) {
        state.user = payload.user;
        state.token = payload.accessToken;

        localStorage.setItem("user", JSON.stringify(payload.user))
        localStorage.setItem("token", payload.accessToken)
      }

      else {
        state.user = null;
        state.token = null;

        localStorage.setItem("user", "")
        localStorage.setItem("token", "")
      }

    }
  }

})