import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function MainNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box sx={{ display: "flex" }} fixed>
      <NavLink to="/">
        <Button variant="contained" sx={{ marginRight: "10px" }}>
          Main
        </Button>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="contacts">
          {" "}
          <Button variant="contained">Contacts </Button>
        </NavLink>
      )}

      <AuthNav />
    </Box>
  );
}

export default MainNav;
