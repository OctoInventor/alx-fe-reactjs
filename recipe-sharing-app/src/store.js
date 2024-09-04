import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Your recipe data (replace with actual data)
  favorites: [],

  addToFavorites: (recipeId) => {
    set((state) => ({ favorites: [...state.favorites, recipeId] }));
  },

  removeFromFavorites: (recipeId) => {
    set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) }));
  },
}));

export default useRecipeStore;