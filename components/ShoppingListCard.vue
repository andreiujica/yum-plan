<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-row items-center space-x-4">
      <UIcon name="i-tabler-cookie" class="text-blue-400 w-8 h-8"/>
      <h1 class="text-xl font-bold text-blue-400">{{ recipe.name }}</h1>
    </div>
    <div class="flex flex-col space-y-2">
      <span
        v-for="(ingredient, index) in recipes.getHumanReadableIngredientsListForRecipe(recipe)"
        :key="index"
        class="text-gray-300 ml-8"
      >
        • {{ ingredient }}
      </span>

    </div>
  </div>

</template>

<script setup lang="ts">
import type { Recipe } from '~/types/recipe';

const props = defineProps<{ recipe: Recipe }>();
const recipes = useRecipesStore();
</script>
