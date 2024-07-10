import { useEffect, useState } from "react";
import "./App.css";
import { addTodos } from "./Components/addTodos";
import { deleteTodo } from "./Components/deleteTodo";
import { handleSearch } from "./Components/searchTodos";
import { resetSearch } from "./Components/resetSearch";
import { changeTodo } from "./Components/changeTodo";
import { handleChangeInput } from "./Components/changeTodo";
import { sort } from "./Components/sortTodos";
function App() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [foundedItems, setFoundedItems] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [search, setSearch] = useState("");
  const [changeValue, setChangeValue] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((item) => item.json())
      .then((todo) => {
        setTodos(todo);
      });
  }, [refresh]);

  // const handleChangeInput = (id, value) => {
  //   setChangeValue((preValue) => ({
  //     ...preValue,
  //     [id]: value,
  //   }));
  // };

  return (
    <>
      <div className="inf">
        <h1>Список дел</h1>
        <form>
          <input
            type="text"
            value={addTodo}
            onChange={(event) => setAddTodo(event.target.value)}
            placeholder="Добавить"
          />
          <button
            onClick={(event) =>
              addTodos(event, { addTodo, setRefresh, refresh })
            }
          >
            Добавить
          </button>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Искать"
          />
          <button
            onClick={(event) =>
              handleSearch(event, {
                search,
                setIsSearching,
                setFoundedItems,
                todos,
              })
            }
          >
            Поиск
          </button>
          <button onClick={() => resetSearch({ setIsSearching })}>
            Сбросить поиск{" "}
          </button>
          <button
            onClick={(event) => sort(event, { todos, setTodos, setRefresh })}
          >
            Сортировать{" "}
          </button>
        </form>
      </div>

      <div className="todo-list">
        <ul>
          {(!isSearching || search === "") &&
            todos.map(({ id, title }) => (
              <div className="todo-item" key={id}>
                <span className="todo-title">{title}</span>
                <input
                  type="text"
                  className="edit-input"
                  value={changeValue[id] || ""}
                  onChange={(event) =>
                    handleChangeInput(id, event.target.value, setChangeValue)
                  }
                  placeholder="Изменить"
                />
                <button
                  className="edit-btn"
                  onClick={() =>
                    changeTodo(id, changeValue[id], setRefresh, refresh)
                  }
                >
                  Изменить
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo({ id, refresh, setRefresh })}
                >
                  Удалить
                </button>
              </div>
            ))}

          {isSearching &&
            search !== "" &&
            foundedItems.map(({ id, title }) => (
              <>
                <li key={id}>{title}</li>
              </>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;