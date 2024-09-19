// RecipeCard.jsx
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
    <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{recipe.title}</h2>
        <p className="mt-2 text-gray-600">{recipe.summary}</p>
      </div>
    </div>
  ))}
</div>
  );
};

export default RecipeCard;