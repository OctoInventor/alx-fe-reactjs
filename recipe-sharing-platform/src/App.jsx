import React from 'react';
import RecipeList from './components/RecipeList.jsx';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Delicious Recipes</h1>
      <RecipeList />
    </div>
  );
};

export default App;