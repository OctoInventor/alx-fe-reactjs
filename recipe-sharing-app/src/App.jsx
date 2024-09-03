import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router, Route, and Routes from react-router-dom
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <div>
        <h1>My Recipe App</h1>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/add" element={<AddRecipeForm addRecipe={addRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;