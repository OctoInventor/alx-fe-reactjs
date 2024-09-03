import React from 'react';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const handleDelete = () => {
    // Perform the actual deletion (you can use Zustand actions or API calls here)
    // Pass the recipeId to the onDelete callback
    onDelete(recipeId);
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;