import { defineStore } from 'pinia';
import ingredientsData from '~/server/data/ingredients';

export const useIngredientsStore = defineStore('ingredients', {
  state: () => ({
    ingredients: ingredientsData,
    isLoading: false,
    error: null as string | null,
  }),
  getters: {
    getIngredients: (state) => state.ingredients,
    getIngredientById: (state) => (id: number) => {
      return state.ingredients.find((ingredient) => ingredient.id === id);
    },
  },
});
