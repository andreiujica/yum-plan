import { Recipe } from '~/types/recipe';


/* Again, for the sake of simplicity, the list of recipes is hardcoded here.
 * These will act as default recipes that the user can choose from.
 * 
 * Additionally, custom recipes can be added by the user but they will be saved in the state and not in a 
 * database, so they will be lost when the user refreshes the page.
 */
const recipes: Recipe[] = [
  {
    id: 1,
    name: "Brownie",
    ingredients: [
      { quantity: 200, ingredientId: 1 },
      { quantity: 150, ingredientId: 2 }, 
      { quantity: 3, ingredientId: 3 },    
      { quantity: 100, ingredientId: 4 },  
      { quantity: 150, ingredientId: 6 }   
    ],
    iconName: "mdi:flour",
    iconColor: "#ff0000"
  },
  {
    id: 2,
    name: "Swiss Roll",
    ingredients: [
      { quantity: 4, ingredientId: 3 },    
      { quantity: 100, ingredientId: 1 },  
      { quantity: 50, ingredientId: 2 },   
      { quantity: 100, ingredientId: 5 }   
    ],
    iconName: "mdi:egg",
    iconColor: "#00ff00"
  },
  {
    id: 3,
    name: "Creme Brulee",
    ingredients: [
      { quantity: 5, ingredientId: 3 },    
      { quantity: 1, ingredientId: 7 },    
      { quantity: 100, ingredientId: 6 }   
    ],
    iconName: "mdi:sugar",
    iconColor: "#0000ff"
  },
  {
    id: 4,
    name: "Chocolate Cake",
    ingredients: [
      { quantity: 200, ingredientId: 1 },  
      { quantity: 100, ingredientId: 2 },  
      { quantity: 3, ingredientId: 3 },    
      { quantity: 100, ingredientId: 9 },  
      { quantity: 150, ingredientId: 6 }   
    ],
    iconName: "mdi:chocolate",
    iconColor: "#ffa500"
  },
  {
    id: 5,
    name: "Vanilla Muffins",
    ingredients: [
      { quantity: 200, ingredientId: 1 },  
      { quantity: 100, ingredientId: 2 },  
      { quantity: 2, ingredientId: 3 },    
      { quantity: 1, ingredientId: 7 },    
      { quantity: 100, ingredientId: 6 } 
    ],
    iconName: "mdi:vanilla",
    iconColor: "#ffff00"
  }
];

export default recipes;
