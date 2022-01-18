import { createAsyncThunk } from "@reduxjs/toolkit";
import ConnectionsAPI from "../../api/сonnectionsAPI/connectionsAPI";

export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async (_, thunkAPI) => {
    try {
      const userInfo = await ConnectionsAPI.getUsersInfo();
      return userInfo.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const registerResponse = await ConnectionsAPI.registerUser(data);
      return registerResponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const loginResponse = await ConnectionsAPI.loginUser(data);
      return loginResponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const logoutRepsonse = await ConnectionsAPI.logoutUser();
      return logoutRepsonse.status;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
