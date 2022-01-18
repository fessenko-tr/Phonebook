import { loginUser } from "../../redux/auth/auth-operations";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/auth/auth-selectors";
import useForm from "../../hooks/useForm";
import initialState from "./initialState";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  const isLoggingIn = useSelector(getIsLoading);

  const [loginForm, handleChange, handleSubmit] = useForm(
    initialState,
    loginUser
  );

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: "20px" }}>
        <TextField
          sx={{ marginBottom: "20px" }}
          fullWidth
          value={loginForm.email}
          name="email"
          id="emailLog"
          onChange={handleChange}
          label="Email"
        />

        <TextField
          sx={{ marginBottom: "20px" }}
          fullWidth
          value={loginForm.password}
          name="password"
          id="passwordLog"
          onChange={handleChange}
          type="password"
          label="Password"
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
      {isLoggingIn && <CircularProgress />}
    </>
  );
}

export default Login;
