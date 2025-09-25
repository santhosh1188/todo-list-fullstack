import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todoApi";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  const handleAdd = async () => {
    if (!newTodo) return;
    await addTodo(newTodo);
    setNewTodo("");
    fetchTodos();
  };

  const handleToggle = async (id, completed) => {
    await updateTodo(id, { completed: !completed });
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              onClick={() => handleToggle(todo._id, todo.completed)}
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
};

export default TodoList;
