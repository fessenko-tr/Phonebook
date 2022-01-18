import { loginUser } from "../../redux/auth/auth-operations";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/auth/auth-selectors";
import useForm from "../../hooks/useForm";
import initialState from "./initialState";

function Login() {
  const isLoggingIn = useSelector(getIsLoading);

  const [loginForm, handleChange, handleSubmit] = useForm(
    initialState,
    loginUser
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={loginForm.email}
          name="email"
          id="emailLog"
          onChange={handleChange}
        />
        <label htmlFor="emailLog">Email</label>
        <input
          value={loginForm.password}
          name="password"
          id="passwordLog"
          onChange={handleChange}
          type="password"
        />
        <label htmlFor="passwordLog">Password</label>
        <button type="submit">Login</button>
      </form>
      {isLoggingIn && <p>Fun spinner</p>}
    </>
  );
}

export default Login;
