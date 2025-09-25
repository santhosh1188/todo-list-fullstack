import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <span
        className={`title ${task.completed ? 'done' : ''}`}
        onClick={onToggle}
        title="Toggle complete"
      >
        {task.title}
      </span>
      <button className="delete" onClick={onDelete} title="Delete">✕</button>
    </li>
  );
}
