import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

function MainNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <NavLink to="/">Main</NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
      <AuthNav />
    </>
  );
}

export default MainNav;
