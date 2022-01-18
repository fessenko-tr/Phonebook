import { Route, Routes, Navigate } from "react-router";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const MainPage = lazy(() => import("./MainPage"));
const LoginPage = lazy(() => import("./LoginPage"));
const RegisterPage = lazy(() => import("./RegisterPage"));
const ContactsPage = lazy(() => import("./ContactsPage"));

function Pages() {
  return (
    <Suspense fallback={<CircularProgress />}>
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
    </Suspense>
  );
}

export default Pages;
