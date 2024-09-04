// store.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Your existing recipe data
  favorites: [], // Initialize an empty array for favorites

  // Other actions (fetching recipes, adding/removing favorites, etc.)
  // ...
  addToFavorites: (recipeId) => {
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    }));
  },

  removeFromFavorites: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },
}));

export default useRecipeStore;