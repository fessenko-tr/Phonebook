import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../../redux/phonebook/phonebook-slice";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const updateFilterFunc = ({ currentTarget }) =>
    dispatch(updateFilter(currentTarget.value));

  return (
    <>
      <label className={s.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={s.input}
        id="filter"
        value={filterValue}
        onChange={updateFilterFunc}
      />
    </>
  );
}

export default Filter;
