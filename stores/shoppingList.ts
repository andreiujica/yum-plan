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
      // This getter uses a map to keep track of the total quantity of each ingredient
      // and then returns a list of strings like ["200 grams of flour", "1 egg", ...]
      // which represent the total quantity of each ingredient needed for all the recipes in the shopping list.
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
