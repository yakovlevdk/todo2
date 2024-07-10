export const handleChangeInput = (id, value, setChangeValue) => {
    setChangeValue((preValue) => ({
      ...preValue,
      [id]: value,
    }));
  };


export const changeTodo = (id, value, setRefresh, refresh) => {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      title: value,
    }),
  });
  setRefresh(!refresh);
};
