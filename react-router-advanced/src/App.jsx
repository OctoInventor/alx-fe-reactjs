// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Your ProtectedRoute component
import UserProfile from './components/UserProfile'; // Your user profile component
import LoginPage from './components/LoginPage'; // Your login page component

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <ProtectedRoute path="/profile" element={<UserProfile />} />
      {/* Other routes */}
    </Routes>
  );
}

export default App;
