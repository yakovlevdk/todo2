export const sort = (event, { todos, setTodos, setRefresh }) => {
  event.preventDefault();
  const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));
  setTodos(sortedTodos);
  setRefresh(true);
};
