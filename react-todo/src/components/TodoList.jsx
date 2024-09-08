// src/components/TodoList.jsx
import React from 'react';

function TodoList({ todos, onDeleteTodo }) {
  if (!todos || todos.length === 0) {
    return <p>No todos available</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
