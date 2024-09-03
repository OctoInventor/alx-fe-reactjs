import React, { useState } from 'react';

const EditRecipeForm = ({ recipe, onSave }) => {
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  };

  // Handle form submission without preventDefault or Zustand
  const handleSubmit = () => {
    onSave(editedRecipe);  // Call the onSave prop with the updated recipe
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
          />
        </label>
        {/* Other input fields for ingredients, instructions, etc. */}
        <button type="button" onClick={handleSubmit}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;