import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "../../redux/auth/auth-selectors";
import { registerUser } from "../../redux/auth/auth-operations";

function Register() {
  const initialState = { name: "", email: "", password: "" };
  const [registerForm, setRegisterForm] = useState(initialState);
  const isRegistring = useSelector(getIsLoading);

  const dispatch = useDispatch();

  function handleChange(e) {
    setRegisterForm({
      ...registerForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(registerUser(registerForm));
    setRegisterForm(initialState);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={registerForm.name}
          id="nameReg"
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="nameReg">Name</label>
        <input
          value={registerForm.email}
          id="emailReg"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="emailReg">Email</label>
        <input
          value={registerForm.password}
          id="passwordReg"
          name="password"
          onChange={handleChange}
          type="password"
        />
        <label htmlFor="passwordReg">Password</label>
        <button type="submit">Register</button>
      </form>
      {isRegistring && <p>Fun spinner</p>}
    </>
  );
}

export default Register;
