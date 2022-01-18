import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/auth/auth-selectors";
import { registerUser } from "../../redux/auth/auth-operations";
import useForm from "../../hooks/useForm";
function Register() {
  const initialState = { name: "", email: "", password: "" };
  const isRegistring = useSelector(getIsLoading);

  const [registerForm, handleChange, handleSubmit] = useForm(
    initialState,
    registerUser
  );

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
