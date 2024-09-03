import React, { useState } from 'react';

function AddRecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('');  // State for recipe title
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title, name, description });  // Include title in the recipe object
    setTitle('');  // Clear the title field after submission
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <div>
        <label>Recipe Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}  // Update title state on input change
          required
        />
      </div>
      <div>
        <label>Recipe Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Recipe Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;