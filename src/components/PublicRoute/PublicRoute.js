import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import PropTypes from "prop-types";

function PublicRoute({ restricted = false, children, redirectTo = "/" }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
export default PublicRoute;
