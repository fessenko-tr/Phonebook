import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PublicRoute({ restricted = false, children, redirectTo = "/" }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute;
