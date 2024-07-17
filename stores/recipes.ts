import { defineStore } from "pinia";
import recipesData from "~/server/data/recipes";
import type { Recipe, RecipeItem } from "~/types/recipe";

export const useRecipesStore = defineStore("recipes", {
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
      // This getter returns a human-readable list of ingredients for a recipe.
      // It gives back a list like ["200 grams of flour", "1 egg", ...]
      const ingredientsStore = useIngredientsStore();
      return recipe.ingredients.map((item: RecipeItem) => {
        const ingredient = ingredientsStore.getIngredientById(
          item.ingredientId
        );
        return ingredient
          ? `${item.quantity} ${ingredient.unit} of ${ingredient.name}`
          : "Unknown ingredient";
      });
    },
  },
  actions: {
    createRecipe(recipe: Recipe) {
      // Because we're not using a real database, we need to generate a unique ID
      // for the new recipe. We'll use the highest existing ID + 1.
      if (!recipe.id) {
        recipe.id = Math.max(...this.recipes.map((r) => r.id)) + 1;
      }
      this.recipes.unshift(recipe);
    },
    deleteRecipe(id: number) {
      const index = this.recipes.findIndex((r) => r.id === id);
      if (index !== -1) {
        this.recipes.splice(index, 1);
      }
    },
  },
});
