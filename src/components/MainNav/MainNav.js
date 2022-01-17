import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";

function MainNav() {
  return (
    <>
      <NavLink to="contacts">Contacts</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="register">Register</NavLink>
      <UserMenu />
    </>
  );
}

export default MainNav;
