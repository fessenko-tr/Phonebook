import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

function PublicRoute({ restricted = false, children, redirectTo = "/" }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute;
