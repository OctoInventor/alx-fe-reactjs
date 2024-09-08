// src/App.js
import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm'; // Adjust the path based on your project structure

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    // Add the new todo to your todos array
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      {/* Render your todo list here */}
    </div>
  );
}

export default App;
