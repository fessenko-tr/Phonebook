import { createSlice } from "@reduxjs/toolkit";
import ConnectionsAPI from "../../api/сonnectionsAPI/connectionsAPI";
import {
  fetchUserInfo,
  registerUser,
  loginUser,
  logoutUser,
} from "./authOperations";

const initialState = {
  user: { name: "", email: "" },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      ConnectionsAPI.setToken(payload.token);
      state.token = payload.token;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      ConnectionsAPI.setToken(payload.token);
      state.token = payload.token;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      console.log("logout pay ", payload);
      ConnectionsAPI.unsetToken();
      state.token = null;
      state.user.name = "";
      state.user.email = "";
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
