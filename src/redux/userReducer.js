import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    isAuthenticated: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setAuth: (state) => {
      state.isAuthenticated = true
    },
    logOutStart: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    signupStart: (state) => {
      state.isFetching = true;
    },
    signupSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    signupFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logOutStart, signupStart, signupSuccess, signupFailure, setAuth } = userSlice.actions;
export default userSlice.reducer;