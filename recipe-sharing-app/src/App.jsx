import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router, Route, Routes, and Link
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails
import './App.css';

const USERS = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
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
    <Router>
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
            <ul>
              {foundUsers.map((user) => (
                <li key={user.id} className="user">
                  <span className="user-id">{user.id}</span>
                  <span className="user-name">{user.name}</span>
                  <span className="user-age">{user.age} years old</span>
                  <Link to={`/user/${user.id}`}>View Details</Link> {/* Link to user details */}
                </li>
              ))}
            </ul>
          ) : (
            <h1>No results found!</h1>
          )}
        </div>

        <Routes>
          <Route
            path="/user/:id"
            element={<RecipeDetails />} // Component for user details
          />
          <Route
            path="*"
            element={<h1>404 Not Found</h1>} // Catch-all route for 404 errors
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
