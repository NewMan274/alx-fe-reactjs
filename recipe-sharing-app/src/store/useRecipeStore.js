import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term }, false);
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
    set({ filteredRecipes: filtered });
  },

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter(recipe => recipe.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  setRecipes: (recipes) => set({ recipes, filteredRecipes:recipes }),
}));

export default useRecipeStore;