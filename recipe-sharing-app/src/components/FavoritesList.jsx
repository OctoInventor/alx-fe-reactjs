import React from 'react';
import useRecipeStore from './recipeStore';

function FavoritesList() {
  const { recipes, favorites } = useRecipeStore();

  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;