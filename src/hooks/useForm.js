import { useState } from "react";
import { useDispatch } from "react-redux";

function useForm(initialState, dispatchAction) {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  function handleChange({ currentTarget }) {
    const { name, value } = currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(dispatchAction(form));
    setForm(initialState);
  }

  return [form, handleChange, handleSubmit];
}

export default useForm;
