// RecommendationsList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

function RecommendationsList() {
  const { recipes } = useRecipeStore();

  // Your recommendation logic (e.g., similar recipes, trending dishes)
  const recommendedRecipes = recipes.slice(0, 5); // Adjust as needed

  return (
    <div>
      <h2>Personalized Recipe Recommendations</h2>
      <ul>
        {recommendedRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationsList;