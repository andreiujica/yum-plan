export interface RecipeItem {
  quantity: number;
  ingredientId: number;
}
  
export interface Recipe {
  id: number;
  name: string;
  ingredients: RecipeItem[];
  iconName: string; // This is the icon name from Iconify Icons
  iconColor: string;
}
  