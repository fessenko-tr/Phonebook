// import useSelector
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

function AuthNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? (
    <UserMenu />
  ) : (
    <>
      <NavLink to="login">Login</NavLink>{" "}
      <NavLink to="register">Register</NavLink>{" "}
    </>
  );
}

export default AuthNav;
