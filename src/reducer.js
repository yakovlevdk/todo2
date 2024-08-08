const initialState = {
  todos: [],
  refresh: false,
  isSearching: false,
  foundedItems: [],
  addTodo: "",
  search: "",
  changeValue: {},
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "SET_CHANGE_VALUE":
      return {
        ...state,
        changeValue: action.payload,
      };
    case "SET_ADD_TODO":
      return {
        ...state,
        addTodo: action.payload,
      };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_REFRESH":
      return { ...state, refresh: action.payload };
    case "SET_IS_SEARCHING":
      return { ...state, isSearching: action.payload };
    case "SET_FOUNDED_ITEMS":
      return { ...state, foundedItems: action.payload };
    default:
      return state;
  }
};
