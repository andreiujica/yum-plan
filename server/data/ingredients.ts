import { Ingredient } from '~/types/ingredient'

/*  For the sake of simplicity, the list of ingredients is hardcoded here.
 *  In a real-world application, this data would be fetched from a database.
 *  Also, a list is not a good data structure for this, as it would be better to use a map for O(1) access time.
 */ 
const ingredients: Ingredient[] = [
  { name: "flour", id: 1, category: "baking", icon: "mdi:flour", unit: "grams" },
  { name: "butter", id: 2, category: "dairy", icon: "mdi:butter", unit: "grams" },
  { name: "egg", id: 3, category: "dairy", icon: "mdi:egg", unit: "pieces" },
  { name: "walnut", id: 4, category: "nuts", icon: "mdi:nut", unit: "grams" },
  { name: "jam", id: 5, category: "spread", icon: "mdi:jar", unit: "grams" },
  { name: "sugar", id: 6, category: "baking", icon: "mdi:sugar", unit: "grams" },
  { name: "milk", id: 7, category: "dairy", icon: "mdi:milk", unit: "ml" },
  { name: "chocolate", id: 8, category: "baking", icon: "mdi:chocolate", unit: "grams" },
  { name: "dragon scales", id: 9, category: "magical", icon: "mdi:dragon", unit: "pieces" },
  { name: "baking powder", id: 10, category: "baking", icon: "mdi:chemical-weapon", unit: "grams" },
  { name: "heavy cream", id: 11, category: "dairy", icon: "mdi:whipped-cream", unit: "ml" },
  { name: "vanilla pod", id: 12, category: "spice", icon: "mdi:vanilla", unit: "pieces" },
  { name: "unicorn tears", id: 13, category: "magical", icon: "mdi:water", unit: "ml" },
  { name: "salt", id: 14, category: "spice", icon: "mdi:shaker", unit: "grams" },
  { name: "baking soda", id: 15, category: "baking", icon: "mdi:chemical-weapon", unit: "grams" },
  { name: "cocoa powder", id: 16, category: "baking", icon: "mdi:cocoa", unit: "grams" },
  { name: "cinnamon", id: 17, category: "spice", icon: "mdi:cinnamon", unit: "grams" },
  { name: "honey", id: 18, category: "spread", icon: "mdi:honey", unit: "grams" },
  { name: "lemon zest", id: 19, category: "fruit", icon: "mdi:fruit-citrus", unit: "grams" },
  { name: "grand marnier", id: 20, category: "liquor", icon: "mdi:bottle-wine", unit: "ml" }
];

export default ingredients;
