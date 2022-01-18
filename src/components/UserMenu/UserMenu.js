import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/auth-operations";
import { getUserName, getIsLoading } from "../../redux/auth/auth-selectors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function UserMenu() {
  const name = useSelector(getUserName);
  const isLoggingOut = useSelector(getIsLoading);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", marginLeft: "auto" }}>
      <p>{`Welcome ${name}`}</p>
      <Button
        onClick={() => {
          dispatch(logoutUser());
        }}
        variant="contained"
        size="small"
        sx={{ marginLeft: "10px" }}
      >
        Logout
      </Button>
      {isLoggingOut && <CircularProgress />}
    </Box>
  );
}

export default UserMenu;
