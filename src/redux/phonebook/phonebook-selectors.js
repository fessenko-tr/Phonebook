import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.phonebook.contacts;

export const getFilter = (state) => state.phonebook.filter;

export const getFilteredContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filterValue) => {
    const filtered = contacts.filter((el) =>
      el.name?.toLowerCase().includes(filterValue.toLowerCase())
    );
    return filtered;
  }
);

export const getIsContacts = createSelector(getContacts, (contacts) =>
  contacts.length > 0 ? true : false
);
