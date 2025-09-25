import React, { useState, useEffect } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api/todoApi";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (!newTodo) return;
    await addTodo(newTodo);
    setNewTodo("");
    fetchTodos();
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo._id, { completed: !todo.completed });
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              onClick={() => handleToggle(todo)}
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
