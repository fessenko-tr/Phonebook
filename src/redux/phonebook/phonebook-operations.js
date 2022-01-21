import { createAsyncThunk } from "@reduxjs/toolkit";
import ConnectionsAPI from "../../api/сonnectionsAPI/connectionsAPI";

export const fetchContacts = createAsyncThunk(
  "phonebook/FetchContacts",
  async (_, thunkAPI) => {
    try {
      const contacts = await ConnectionsAPI.getContacts();
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "phonebook/DeleteConctact",
  async (id, thunkAPI) => {
    try {
      await ConnectionsAPI.deleteContactById(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "phonebook/AddContact",
  async (contact, thunkAPI) => {
    try {
      const addedContact = await ConnectionsAPI.postContact(contact);
      return addedContact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "phonebook/editContact",
  async ({ name, number, id }, thunkAPI) => {
    try {
      const editContactResponse = await ConnectionsAPI.editContact(id, {
        name,
        number,
      });
      return editContactResponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
