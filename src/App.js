import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/phonebook/operations";

// SHIT
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserMenu from "./components/UserMenu/UserMenu";
import MainNav from "./components/MainNav/MainNav";
import Pages from "./pages/Pages";
import ConnectionsAPI from "./api/сonnectionsAPI/connectionsAPI";
import axios from "axios";
import { fetchUserInfo } from "./redux/auth/authOperations";
// SHIT
function App() {
  const toke = useSelector((state) => state.auth.token);
  // const d
  // console.log(toke);
  // const contacts = useSelector((state) => state.phonebook.contacts);
  // const isLoading = useSelector((state) => state.phonebook.isLoading);
  // const error = useSelector((state) => state.phonebook.error);
  const dispatch = useDispatch();
  // console.log(
  //   ConnectionsAPI.axiosInstance.defaults.headers.common.Authorization
  // );
  useEffect(() => {
    if (!toke) {
      console.log("не нашел токен ушел назхуй");
      return;
    }
    ConnectionsAPI.setToken(toke);
    dispatch(fetchUserInfo());
  }, []);
  // const noContactsAdded = "You seem not to have any contacts yet";

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // ConnectionsAPI.registerUser({
  //   name: "testkaadss ddasek",
  //   email: "testkaasdkl@mail.com",
  //   password: "qsasdesaddsa1212123",
  // }).then(console.log);

  // ConnectionsAPI.loginUser({
  //   email: "testkaasdkl@mail.com",
  //   password: "qsasdesaddsa1212123",
  // }).then((res) => {
  //   ConnectionsAPI.setToken(res.data.token);
  //   dispatch(fetchUserInfo());
  // });

  // ConnectionsAPI.loginUser({
  //   email: "testkaasdkl@mail.com",
  //   password: "qsasdesaddsa1212123",
  // }).then((res) => {
  //   console.log(
  //     "before setToken",
  //     ConnectionsAPI.axiosInstance.defaults.headers.common.Authorization
  //   );

  //   ConnectionsAPI.setToken(res.data.token);
  //   console.log(
  //     "after setotken",
  //     ConnectionsAPI.axiosInstance.defaults.headers.common.Authorization
  //   );

  //   ConnectionsAPI.unsetToken();

  //   console.log(
  //     "toekn is unset",
  //     ConnectionsAPI.axiosInstance.defaults.headers.common.Authorization
  //   );
  // });

  // axios
  //   .post("https://connections-api.herokuapp.com/users/signup", {
  //     name: "testkas ddasek",
  //     email: "testkadsdsaakl@mail.com",
  //     password: "qsasde121212dasdsasad3",
  //   })
  //   .then(console.log);

  return (
    <>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {error && <p>Something went wrong, try again later</p>}
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification msg={noContactsAdded} />
      )}
      {isLoading && <p>Your request is being processed</p>}
      {/* <Login />
      <Register />
      <UserMenu /> */}
      <MainNav />
      <Pages />
      <ToastContainer />
    </>
  );
}

export default App;
