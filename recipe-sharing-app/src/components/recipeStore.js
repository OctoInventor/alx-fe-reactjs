import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    // Comfort Food Classics
    { id: 'chicken-noodle-soup', name: 'Chicken Noodle Soup' },
    { id: 'mac-and-cheese', name: 'Macaroni and Cheese' },

    // International Delights
    { id: 'tacos-al-pastor', name: 'Tacos al Pastor' },
    { id: 'pad-thai', name: 'Pad Thai' },

    // Healthy Options
    { id: 'quinoa-salad', name: 'Quinoa Salad' },
    { id: 'baked-salmon', name: 'Baked Salmon' },

    // Seasonal Specials
    { id: 'pumpkin-soup', name: 'Pumpkin Soup' },
    { id: 'grilled-peaches', name: 'Grilled Peaches' },
    { id: 'cranberry-orange-scones', name: 'Cranberry Orange Scones' },
  ],
  favorites: [],

  addToFavorites: (recipeId) => {
    set((state) => ({ favorites: [...state.favorites, recipeId] }));
  },

  removeFromFavorites: (recipeId) => {
    set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) }));
  },
}));

export default useRecipeStore;