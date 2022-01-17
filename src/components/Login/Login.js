import { useState } from "react";
import { loginUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

function Login() {
  const initialState = { email: "", password: "" };
  const [loginForm, setLoginForm] = useState(initialState);

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
      />
      <label htmlFor="passwordLog">Password</label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
