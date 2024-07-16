export interface Ingredient {
  name: string;
  id: number;
  category: string;
  icon: string;
  unit: string;
}

export interface IngredientTotal {
  ingredientId: number;
  totalQuantity: number;
}
  