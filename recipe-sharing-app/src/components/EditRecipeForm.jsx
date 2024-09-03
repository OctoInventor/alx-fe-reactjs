import React, { useState } from 'react';

const EditRecipeForm = ({ recipe }) => {
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  };

  // Handle form submission (you can use Zustand actions or API calls here)

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;