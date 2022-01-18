// import useSelector
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function AuthNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? (
    <UserMenu />
  ) : (
    <Box sx={{ marginLeft: "auto" }}>
      <NavLink to="login">
        {" "}
        <Button variant="contained">Login </Button>
      </NavLink>

      <NavLink to="register">
        {" "}
        <Button variant="contained" sx={{ marginLeft: "20px" }}>
          Register{" "}
        </Button>
      </NavLink>
    </Box>
  );
}

export default AuthNav;
