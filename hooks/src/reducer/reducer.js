import { useReducer } from "react";

import "../App.css";

const LIST_ACTION_TYPE = {
  ADD: "add",
  DELETE: "delete",
  SELECT: "select",
  REVERSE: "reverse",
};

function listReducer(state, action) {
  switch (action.type) {
    case LIST_ACTION_TYPE.ADD:
      const id = new Date().getTime();

      const newItem = { value: action.payload, id };
      return {
        ...state,
        items: [...state.items, newItem],
      };

    case LIST_ACTION_TYPE.DELETE:
      const newItems = state.items.filter((item) => item.id !== action.payload);

      return {
        ...state,
        items: newItems,
      };

    case LIST_ACTION_TYPE.SELECT:
      return {
        ...state,
        selectedId: action.payload === state.selectedId ? null : action.payload,
      };

    case LIST_ACTION_TYPE.REVERSE:
      return {
        ...state,
        items: state.items.reverse(),
      };

    default:
      return { ...state };
  }
}

const initState = { items: [] };

export default function Reduce() {
  const [state, dispatch] = useReducer(listReducer, initState);

  const handleAddItem = (e) => {
    const { value } = e.target;
    if (value.trim() === "") return null;
    dispatch({ type: LIST_ACTION_TYPE.ADD, payload: value });

    e.target.value = "";
  };

  const handleRemoveItem = (id) =>
    dispatch({ type: LIST_ACTION_TYPE.DELETE, payload: id });

  const handleSelectItem = (id) =>
    dispatch({ type: LIST_ACTION_TYPE.SELECT, payload: id });

  const handleReverseItems = () => dispatch({ type: LIST_ACTION_TYPE.REVERSE });

  console.log(state.items);

  return (
    <div className="App">
      <header className="App-header">
        <h1>List of elements: </h1>
        <ul>
          {state.items.map(({ value, id }) => (
            <li
              onClick={() => handleSelectItem(id)}
              key={id}
              style={{
                backgroundColor: state.selectedId === id ? "lime" : "purple",
              }}
            >
              {value}
              <br />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveItem(id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          onBlur={handleAddItem}
          type="text"
          placeholder="Add new element"
        />
        <br />
        <button onClick={handleReverseItems}>Reverse list</button>
      </header>
    </div>
  );
}
