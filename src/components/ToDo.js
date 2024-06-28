import React, { useState, useEffect } from 'react';
import './ToDo.css';

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');
  const [filter, setFilter] = useState('all');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() && newDueDate) {
      setTodos([...todos, { text: newTodo, dueDate: newDueDate, priority: newPriority, completed: false }]);
      setNewTodo('');
      setNewDueDate('');
      setNewPriority('Medium');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === id) {
        return updatedTodo;
      }
      return todo;
    });
    setIsEditing(false);
    setTodos(updatedTodos);
  };

  const setEditing = (index) => {
    setIsEditing(true);
    setCurrentTodo({
      id: index,
      text: todos[index].text,
      dueDate: todos[index].dueDate,
      priority: todos[index].priority
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'pending') {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <input
            type="date"
            value={currentTodo.dueDate}
            onChange={(e) => setCurrentTodo({ ...currentTodo, dueDate: e.target.value })}
          />
          <select
            value={currentTodo.priority}
            onChange={(e) => setCurrentTodo({ ...currentTodo, priority: e.target.value })}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button type="submit">Update Todo</button>
        </form>
      ) : (
        <>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleAddTodo}>Add Todo</button>
        </>
      )}
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => handleToggleComplete(index)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text} - {todo.dueDate} - {todo.priority}
            </span>
            <button onClick={() => setEditing(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
