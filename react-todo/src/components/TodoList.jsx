// TodoList.jsx
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Conquer the dragon', completed: false },
    { id: 2, text: 'Retrieve the lost artifact', completed: true },
    { id: 3, text: 'Brew a potion of courage', completed: false },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>My Heroic Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add a new todo..." />
    </div>
  );
}

export default TodoList;
