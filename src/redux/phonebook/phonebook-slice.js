import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  fetchContacts,
  deleteContactById,
  addContact,
} from "./phonebook-operations";
const initialState = {
  contacts: [],
  filter: "",
  error: null,
  isLoading: false,
};

const phonebookSlice = createSlice({
  name: "phonebook",
  initialState,
  reducers: {
    updateFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error("Oops, something went wrong, please try again");
      state.error = payload;
    },
    [addContact.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
      state.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error("Oops, something went wrong, please try again");
      state.error = payload;
    },
    [deleteContactById.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [deleteContactById.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter((el) => el.id !== payload);
      state.isLoading = false;
    },
    [deleteContactById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error("Oops, something went wrong, please try again");
      state.error = payload;
    },
  },
});

export const { updateFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
