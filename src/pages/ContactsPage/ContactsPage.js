import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/phonebook/phonebook-operations";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import Notification from "../../components/Notification";
import { getIsContacts } from "../../redux/phonebook/phonebook-selectors";

function ContactsPage() {
  const isContacts = useSelector(getIsContacts);
  const onNoAddedContacts = "You seem not to have added any contacts yet";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isContacts ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification msg={onNoAddedContacts} />
      )}
    </>
  );
}

export default ContactsPage;
