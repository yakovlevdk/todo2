import { useSelector, useDispatch } from "react-redux";

export const useAddTodo = () => {
  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.refresh);

  const addTodos = (event, addTodo) => {
    event.preventDefault();

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: addTodo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "SET_REFRESH", payload: !refresh });
      });
  };

  return addTodos;
};
