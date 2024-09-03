import React, { useState } from 'react';
import useRecipeStore from './recipeStore';  // Import useRecipeStore

const EditRecipeForm = ({ recipe }) => {
  const [editedRecipe, setEditedRecipe] = useState(recipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);  // Access the updateRecipe action from Zustand store

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  };

  // Handle form submission with preventDefault and Zustand action
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    updateRecipe(editedRecipe);  // Update the recipe in the Zustand store
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input
            type="text"
            name="name"
            value={editedRecipe.name}
            onChange={handleInputChange}
            required
          />
        </label>
        {/* Other input fields for ingredients, instructions, etc. */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;