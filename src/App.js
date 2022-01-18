import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserInfo } from "./redux/auth/auth-operations";
import ConnectionsAPI from "./api/сonnectionsAPI/connectionsAPI";

import MainNav from "./components/MainNav";
import Pages from "./pages/Pages";
import { getToken, getIsFetchingUser } from "./redux/auth/auth-selectors";

function App() {
  const localStorageToken = useSelector(getToken);
  const isFetchingUser = useSelector(getIsFetchingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    ConnectionsAPI.setToken(localStorageToken);
    dispatch(fetchUserInfo());
  }, []);

  return isFetchingUser ? (
    <p>Fun spinner</p>
  ) : (
    <>
      <MainNav />
      <Pages />
      <ToastContainer />
    </>
  );
}

export default App;
