import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export const useSort = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const sort = (event) => {
    event.preventDefault();
    const sortedTodos = [...todos].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    dispatch({ type: "SET_TODOS", payload: sortedTodos });
    dispatch({ type: "SET_REFRESH", payload: true });
  };
  return sort;
};
