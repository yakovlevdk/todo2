import { useDispatch, useSelector } from "react-redux";

export const useChangeInput = () => {
  const dispatch = useDispatch();
  const changeValue = useSelector((state) => state.changeValue);

  const handleChangeInput = (id, value) => {
    dispatch({
      type: "SET_CHANGE_VALUE",
      payload: { ...changeValue, [id]: value },
    });
    console.log(id);
  };

  return { handleChangeInput };
};
export const useChangeTodo = () => {
  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.refresh);
  const changeTodo = (id, value) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: value,
      }),
    });
    dispatch({ type: "SET_REFRESH", payload: !refresh });
  };

  return changeTodo;
};
