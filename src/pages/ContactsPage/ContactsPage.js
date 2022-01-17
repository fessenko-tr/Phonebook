import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/phonebook/operations";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import Notification from "../../components/Notification";

function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector((state) => state.phonebook.contacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification msg={"noContactsAdded"} />
      )}
    </>
  );
}

export default ContactsPage;
