import Contact from "../Contact";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteContactById,
  editContact,
} from "../../redux/phonebook/phonebook-operations";
import { getFilteredContacts } from "../../redux/phonebook/phonebook-selectors";
import { getContactToEdit } from "../../redux/phonebook/phonebook-slice";

function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  const deleteContactBtn = (id) => dispatch(deleteContactById(id));
  const editContactBtn = (contact) => dispatch(getContactToEdit(contact));

  const contactsList = filteredContacts.map(({ id, name, number }) => (
    <Contact
      key={id}
      id={id}
      name={name}
      number={number}
      deleteFunction={deleteContactBtn}
      editFunction={editContactBtn}
    />
  ));

  return <ul style={{ margin: 0, padding: 0 }}>{contactsList}</ul>;
}

export default ContactList;
