import React from 'react';
import useRecipeStore from './recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;