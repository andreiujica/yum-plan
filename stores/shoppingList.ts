import { defineStore } from "pinia";
import type { Recipe } from "~/types/recipe";
import type { IngredientTotal } from "~/types/ingredient";

export const useShoppingListStore = defineStore("shoppingList", {
  state: () => ({
    recipes: null as Recipe[] | null,
    isLoading: false,
    error: null as string | null,
  }),
  getters: {
    getShoppingList: (state) => state.recipes,
    getShoppingListTotalPerIngredient: (state) => {
      const totals: Record<number, number> = {};

      if (state.recipes) {
        state.recipes.forEach((recipe) => {
          recipe.ingredients.forEach((item) => {
            if (totals[item.ingredientId]) {
              totals[item.ingredientId] += item.quantity;
            } else {
              totals[item.ingredientId] = item.quantity;
            }
          });
        });
      }

      const ingredientsStore = useIngredientsStore();

      return Object.keys(totals).map((key) => {
        const ingredient = ingredientsStore.getIngredientById(Number(key));
        return ingredient
          ? `${totals[Number(key)]} ${ingredient.unit} of ${ingredient.name}`
          : "Unknown ingredient";
      });
    },
  },
  actions: {
    addRecipeToShoppingList(recipe: Recipe) {
      if (!this.recipes) {
        this.recipes = [];
      }
      this.recipes.push(recipe);
    },
  },
});
