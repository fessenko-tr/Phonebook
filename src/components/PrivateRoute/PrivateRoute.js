import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import PropTypes from "prop-types";

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
