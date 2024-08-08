import { useDispatch } from "react-redux";
export const resetSearch = ({ setIsSearching }) => {
  const dispatch = useDispatch();

  dispatch({ type: "SET_IS_SEARCHING", payload: false });
  setIsSearching(false);
};
