import { defineStore } from 'pinia';
import recipesData from '~/server/data/recipes';
import type { Recipe, RecipeItem } from '~/types/recipe';

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: recipesData,
    isLoading: false,
    error: null as string | null,
  }),
  getters: {
    getRecipes: (state) => state.recipes,
    getRecipeById: (state) => (id: number) => {
      return state.recipes.find((recipe) => recipe.id === id);
    },
    getNumberOfIngredients: (state) => (recipe: Recipe) => {
      return recipe.ingredients.length;
    },
    getHumanReadableIngredientsListForRecipe: (state) => (recipe: Recipe) => {
      const ingredientsStore = useIngredientsStore();
      return recipe.ingredients.map((item: RecipeItem) => {
        const ingredient = ingredientsStore.getIngredientById(item.ingredientId);
        return ingredient ? `${item.quantity} ${ingredient.unit} of ${ingredient.name}` : 'Unknown ingredient';
      });
    },
  },
  actions: {
    createRecipe (recipe: Recipe) {
      this.recipes.push(recipe);
    },
    updateRecipe (recipe: Recipe) {
      const index = this.recipes.findIndex((r) => r.id === recipe.id);
      if (index !== -1) {
        this.recipes[index] = recipe;
      }
    },
    deleteRecipe (id: number) {
      const index = this.recipes.findIndex((r) => r.id === id);
      if (index !== -1) {
        this.recipes.splice(index, 1);
      }
    },
 },
});
