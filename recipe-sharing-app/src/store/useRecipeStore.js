import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  favorites: [], //holds recipe IDs marked as favorites
  recommendations: [], //dynamically generated recommended recipes

  // -- Recipes Management --
  setRecipes: (recipes) => set({ recipes, filteredRecipes:recipes }),
  
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

  // -- Search & Filtering --
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
    set({ filteredRecipes: filtered });
  },

  // -- Favorites --
  addFavorite: (recipeId) => {
    const currentFavorites = get().favorites;
    if (!currentFavorites.includes(recipeId)) {
      set({ favorites: [...currentFavorites, recipeId] })
    }
  },

  removeFavorite: (recipeId) => {
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    }))
  },

  // -- Mock Recommendation System --
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter( recipe => favorites.includes(recipe.id) && Math.random() > 0.5);
    set ({ recommendations: recommended });
  }
}));

export default useRecipeStore;