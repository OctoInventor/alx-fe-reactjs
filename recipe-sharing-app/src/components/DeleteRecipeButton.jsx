import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import useRecipeStore from './store/recipeStore';    // Import useRecipeStore from your Zustand store

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Access deleteRecipe action from Zustand

  const handleDelete = () => {
    deleteRecipe(recipeId);     // Call deleteRecipe action with the recipeId
    navigate('/');             // Navigate to the home page or another route after deletion
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;