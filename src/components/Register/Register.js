import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/auth/auth-selectors";
import { registerUser } from "../../redux/auth/auth-operations";
import useForm from "../../hooks/useForm";
import initialState from "./initialState";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Register() {
  const isRegistring = useSelector(getIsLoading);

  const [registerForm, handleChange, handleSubmit] = useForm(
    initialState,
    registerUser
  );

  return (
    <>
      <Box sx={{ marginTop: "20px" }} onSubmit={handleSubmit} component="form">
        <TextField
          sx={{ marginBottom: "20px" }}
          value={registerForm.name}
          id="nameReg"
          name="name"
          onChange={handleChange}
          label="name"
          fullWidth
        />

        <TextField
          sx={{ marginBottom: "20px" }}
          value={registerForm.email}
          id="emailReg"
          name="email"
          onChange={handleChange}
          label="email"
          fullWidth
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          value={registerForm.password}
          id="passwordReg"
          name="password"
          onChange={handleChange}
          type="password"
          label="password"
          fullWidth
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
      {isRegistring && <CircularProgress />}
    </>
  );
}

export default Register;
