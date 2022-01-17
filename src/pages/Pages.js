import { Route, Routes, Navigate } from "react-router";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import MainPage from "./MainPage/MainPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";

function Pages() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute restricted redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute restricted redirectTo="/contacts">
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PublicRoute>
            <MainPage />
          </PublicRoute>
        }
      />
      <Route
        path="contacts"
        element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Pages;
