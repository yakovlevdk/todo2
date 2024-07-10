export const addTodos = (event, { setRefresh, refresh, addTodo }) => {
  event.preventDefault();
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      title: `${addTodo}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setRefresh(!refresh);
    });
};
