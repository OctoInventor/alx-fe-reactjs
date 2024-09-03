import React from 'react';
import useRecipeStore from './recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <h4> Dinner Recipes · Fruits, Vegetables and Other Produce · Bread Recipes · Everyday </h4>
      <h4> Lunch Recipes · Bring on the classics, like a tuna salad or grilled cheese sandwich, or make a delicious soup or salad</h4>
      <h4> Appetizers and Snacks · Perfect party appetizers made easy. See hundreds of tasty appetizers with photos, helpful reviews, 
        and tips on how to make them</h4>
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