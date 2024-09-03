import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial empty array for recipes

  // Action to add a new recipe
  addRecipe: (newRecipe) => {
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
  },

  // Action to initialize the list (you can fetch data here if needed)
  initializeRecipes: (initialRecipes) => {
    set({ recipes: initialRecipes });
  },
}));