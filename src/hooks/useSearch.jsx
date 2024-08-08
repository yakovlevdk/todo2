import { useDispatch, useSelector } from "react-redux";

export const useSearch = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const search = useSelector((state) => state.search);

  const handleSearch = (event) => {
    event.preventDefault();
    searchData(search, todos);
  };

  const searchData = (searchText, todos) => {
    dispatch({ type: "SET_IS_SEARCHING", payload: true });
    const items = todos.filter(({ title }) => title.includes(searchText));
    dispatch({ type: "SET_FOUNDED_ITEMS", payload: items });
  };

  return { handleSearch };
};
