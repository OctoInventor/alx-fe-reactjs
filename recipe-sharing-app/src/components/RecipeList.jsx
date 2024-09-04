import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import useRecipeStore from './recipeStore'; // Import useRecipeStore for accessing the store

const RecipeList = ({ filteredRecipes = [] }) => {
  const { deleteRecipe } = useRecipeStore((state) => ({
    deleteRecipe: state.deleteRecipe,
  }));

  const handleDelete = (id) => {
    deleteRecipe(id); // Call the deleteRecipe action from Zustand store
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <h4> Dinner Recipes:
      <br />
          · Hungarian Goulash: A hearty beef stew flavored with paprika, onions, and other spices. Serve it with crusty bread or dumplings.
          <br />
          · Beef & Rice Stuffed Cabbage Rolls: Tender cabbage leaves filled with a savory mixture of beef and rice, simmered in tomato sauce.
          <br />
          · Beet Borscht Soup: A vibrant and flavorful soup made with beets, vegetables, and sometimes served with sour cream.
          <br />
          · Belarus Pickled Carrots: Tangy and slightly spicy pickled carrots—a great side dish or appetizer. </h4>
      <h4> Lunch Recipes:
      <br />
         · Homemade Polish Pierogi: Dumplings filled with various ingredients (potatoes, cheese, mushrooms, etc.) and usually served with sour cream.
        <br />
        · Caraway Seed Rye Bread: A flavorful rye bread with caraway seeds, perfect for sandwiches.
        <br />
        · Mom’s Potato Pancakes: Crispy potato pancakes served with applesauce or sour cream. </h4>
      
      <h4> Appetizers and Snacks:
      <br />
        · Chocolate Chip Mandelbrot Cookies: Twice-baked cookies with chocolate chips, inspired by Eastern European almond bread.
        <br />
        · Russian Tea Cakes: Buttery, nutty cookies rolled in powdered sugar.
        <br />
        · Cheese and Charcuterie Board: Create a platter with various European cheeses, cured meats, olives, and crusty bread. </h4>

      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button> {/* Add a delete button */}
            <Link to={`/edit/${recipe.id}`}>Edit</Link> {/* Link to the EditRecipeForm component */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;