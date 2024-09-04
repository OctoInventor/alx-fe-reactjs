import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: Check if any field is empty
    if (!username || !email || !password) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}  // Using value={username} here
          onChange={(e) => setUsername(e.target.value)}  // Updates username state
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}  // Using value={email} here
          onChange={(e) => setEmail(e.target.value)}  // Updates email state
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}  // Using value={password} here
          onChange={(e) => setPassword(e.target.value)}  // Updates password state
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
