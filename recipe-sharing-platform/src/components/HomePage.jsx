import React from 'react';
import RecipeList from './RecipeList';
import RecipeCard from './RecipeCard';

const Homepage = () => {
  return (
    <div clasName="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Delicious Recipes</h1>
      <RecipeList>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </RecipeList>
    </div>
  );
};

export default Homepage;
