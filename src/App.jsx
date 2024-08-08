import { useEffect } from "react";
import "./App.css";
import { useAddTodo } from "./hooks/useAddTodos";
import { useDeleteTodo } from "./hooks/useDeleteTodo"; // Импортируем хук
import { useSearch } from "./hooks/useSearch";
import { resetSearch } from "./hooks/resetSearch";
import { useChangeTodo } from "./hooks/changeTodo";
import { useChangeInput } from "./hooks/changeTodo";
import { useSort } from "./hooks/useSort";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const addTodo = useSelector((state) => state.addTodo);
  const refresh = useSelector((state) => state.refresh);
  const search = useSelector((state) => state.search);
  const isSearching = useSelector((state) => state.isSearching);
  const changeValue = useSelector((state) => state.changeValue);
  const foundedItems = useSelector((state) => state.foundedItems);
  const addTodos = useAddTodo();
  const changeTodo = useChangeTodo();
  const deleteTodo = useDeleteTodo();
  const { handleSearch } = useSearch();
  const sort = useSort();
  const { handleChangeInput } = useChangeInput();
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((item) => item.json())
      .then((todo) => {
        dispatch({ type: "SET_TODOS", payload: todo });
      });
  }, [refresh]);

  return (
    <>
      <div className="inf">
        <h1>Список дел</h1>
        <form>
          <input
            type="text"
            value={addTodo}
            onChange={(event) => {
              dispatch({ type: "SET_ADD_TODO", payload: event.target.value });
            }}
            placeholder="Добавить"
          />
          <button onClick={(event) => addTodos(event, addTodo)}>
            Добавить
          </button>
          <input
            type="text"
            value={search}
            onChange={(event) =>
              dispatch({
                type: "SET_SEARCH",
                payload: event.target.value,
              })
            }
            placeholder="Искать"
          />
          <button onClick={(event) => handleSearch(event)}>Поиск</button>
          <button onClick={() => resetSearch()}>Сбросить поиск </button>
          <button onClick={(event) => sort(event)}>Сортировать </button>
        </form>
      </div>

      <div className="todo-list">
        <ul>
          {!isSearching &&
            search === "" &&
            todos.map(({ id, title }) => (
              <div className="todo-item" key={id}>
                <span className="todo-title">{title}</span>
                <input
                  type="text"
                  className="edit-input"
                  value={changeValue[id] || ""}
                  onChange={(event) =>
                    handleChangeInput(id, event.target.value)
                  }
                  placeholder="Изменить"
                />
                <button
                  className="edit-btn"
                  onClick={() => changeTodo(id, changeValue[id])}
                >
                  Изменить
                </button>
                <button className="delete-btn" onClick={() => deleteTodo(id)}>
                  Удалить
                </button>
              </div>
            ))}

          {isSearching &&
            search !== "" &&
            foundedItems.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App;
