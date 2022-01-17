import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContactById, addContact } from "./operations";
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
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
    },
    [deleteContactById.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter((el) => el.id !== payload);
    },
  },
});

export const { updateFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
