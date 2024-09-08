// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Your ProtectedRoute component
import UserProfile from './components/UserProfile'; // Your user profile component
import LoginPage from './components/LoginPage'; // Your login page component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <ProtectedRoute path="/profile" element={<UserProfile />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
