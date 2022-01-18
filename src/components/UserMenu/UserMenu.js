import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/auth-operations";
import { getUserName, getIsLoading } from "../../redux/auth/auth-selectors";
function UserMenu() {
  const name = useSelector(getUserName);
  const isLoggingOut = useSelector(getIsLoading);
  const dispatch = useDispatch();

  return (
    <>
      <p>{`Welcome ${name}`}</p>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </button>
      {isLoggingOut && <p>Fun spinner</p>}
    </>
  );
}

export default UserMenu;
