import React, { useState } from "react";
import "./App.css";
import { Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((arr) => [...arr, todoText]);
    setTodoText("");
  };
  const deleteToDo = (key) => {
    todoList.splice(key, 1);
    setTodoList((arr) => [...arr]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>TODO</h1>
      </header>
      <form>
        <label className="todo-label"> <h1>Add Task</h1> </label>
        <br />
        <br />

        <input type="text" value={todoText} onChange={handleChange} />
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {todoList.map((td, index) => (
        <div className="todo" key={index}>
          <input type="checkbox" />
          <label>{td}</label>

          <IconButton aria-label="delete" onClick={() => deleteToDo(index)}>
            <Delete />
          </IconButton>
        </div>
      ))}
    </div>
  );
}

export default App;
