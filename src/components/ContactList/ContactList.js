import Contact from "../Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContactById } from "../../redux/phonebook/phonebook-operations";
import { getFilteredContacts } from "../../redux/phonebook/phonebook-selectors";

function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  const deleteContactBtn = (id) => dispatch(deleteContactById(id));

  const contactsList = filteredContacts.map(({ id, name, number }) => (
    <Contact
      key={id}
      id={id}
      name={name}
      number={number}
      deleteFunction={deleteContactBtn}
    />
  ));

  return <ul>{contactsList}</ul>;
}

export default ContactList;
