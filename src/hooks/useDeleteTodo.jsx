import { useDispatch, useSelector } from "react-redux";

export const useDeleteTodo = () => {
  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.refresh);

  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({ type: "SET_REFRESH", payload: !refresh });
      });
  };

  return deleteTodo;
};
