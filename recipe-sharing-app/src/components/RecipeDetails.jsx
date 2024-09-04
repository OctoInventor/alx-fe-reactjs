import React from 'react';
import useRecipeStore from './recipeStore';

function RecipeDetails({ recipe }) {
  const { favorites, addToFavorites, removeFromFavorites } = useRecipeStore();

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h2>{recipe.name}</h2>
      {/* Other recipe details */}
      {isFavorite ? (
        <button onClick={() => removeFromFavorites(recipe.id)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addToFavorites(recipe.id)}>Add to Favorites</button>
      )}
    </div>
  );
}

export default RecipeDetails;