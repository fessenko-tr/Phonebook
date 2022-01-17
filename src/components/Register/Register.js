import { useState } from "react";
import { registerUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

function Register() {
  const initialState = { name: "", email: "", password: "" };
  const [registerForm, setRegisterForm] = useState(initialState);

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
      />
      <label htmlFor="passwordReg">Password</label>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
