import { useState } from "react";
import { loginUser } from "../../redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "../../redux/auth/auth-selectors";
function Login() {
  const initialState = { email: "", password: "" };
  const [loginForm, setLoginForm] = useState(initialState);
  const isLoggingIn = useSelector(getIsLoading);
  const dispatch = useDispatch();

  function handleChange(e) {
    setLoginForm({
      ...loginForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(loginForm));
    setLoginForm(initialState);
  }
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
