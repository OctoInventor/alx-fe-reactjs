import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router, Route, and Routes from react-router-dom
//import RecipeList from './components/RecipeList';
//import AddRecipeForm from './components/AddRecipeForm';
import './App.css';
const USERS = [
  // List of fictional users (you can replace this with your own data)
  // Each user has an id, name, and age
  // ...
];

function App() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = USERS.filter((user) =>
        user.name.toLowerCase().startsWith(keyword.toLowerCase())
      );
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }
    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} years old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;