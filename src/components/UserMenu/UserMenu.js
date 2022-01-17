import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";

function UserMenu() {
  const name = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  //проверка залогинен ли оН !?
  return (
    <>
      <p>{`Welcomenne ${name ?? "guest"}`}</p>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </button>
    </>
  );
}

export default UserMenu;
