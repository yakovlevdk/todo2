export const deleteTodo = ({ id, setRefresh, refresh }) => {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  })
    .then((it) => it.json())
    .then((data) => {
      setRefresh(!refresh);
      console.log(data);
    });
};
