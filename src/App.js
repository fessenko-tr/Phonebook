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
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const localStorageToken = useSelector(getToken);
  const isFetchingUser = useSelector(getIsFetchingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorageToken) {
      return;
    }

    ConnectionsAPI.setToken(localStorageToken);
    dispatch(fetchUserInfo());
  }, []);

  return (
    <Container sx={{ marginTop: "20px" }} fixed>
      {isFetchingUser ? (
        <CircularProgress />
      ) : (
        <>
          <MainNav />
          <Pages />
          <ToastContainer />
        </>
      )}
    </Container>
  );
}

export default App;
