import { createSlice } from "@reduxjs/toolkit";
import ConnectionsAPI from "../../api/сonnectionsAPI/connectionsAPI";
import {
  fetchUserInfo,
  registerUser,
  loginUser,
  logoutUser,
} from "./auth-operations";

import { toast } from "react-toastify";

const initialState = {
  user: { name: "", email: "" },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [fetchUserInfo.pending]: (state) => {
      state.isFetchingUser = true;
    },
    [fetchUserInfo.rejected]: (state) => {
      state.isFetchingUser = false;
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      ConnectionsAPI.setToken(payload.token);
      state.token = payload.token;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
      toast.error(`Something went wrong, please try again`);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      ConnectionsAPI.setToken(payload.token);
      state.token = payload.token;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [loginUser.rejected]: (state) => {
      state.isLoading = false;
      toast.error("Invalid credentials, try again");
    },
    [logoutUser.pending]: (state) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled]: (state) => {
      ConnectionsAPI.unsetToken();
      state.token = null;
      state.user.name = "";
      state.user.email = "";
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.info(`Something went wrong, try again later ${payload}`);
    },
  },
});

export default authSlice.reducer;
