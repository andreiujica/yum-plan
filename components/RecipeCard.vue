<template>
  <UCard
    :ui="{
      base: 'flex flex-col',
      background: 'dark:bg-blue-400 dark:bg-opacity-10',
      header: {
        padding: 'pt-5 pb-2'
      },
      body: {
        base: 'grow',
      }
    }">
    <template #header>
      <div class="flex flex-row space-x-2 items-center">
        <UIcon name="i-tabler-bowl-spoon" dynamic class="w-6 h-6"/>
        <h1 class="text-lg font-semibold">{{ props.recipe.name }}</h1>
      </div>
    </template>

    <div class="flex flex-col space-y-2">
      <span
        v-for="(ingredient, index) in displayedIngredients"
        :key="index"
        class="text-gray-300"
      >
        • {{ ingredient }}
      </span>
      <span v-if="additionalIngredientsCount > 0" class="text-blue-400 mt-2 ">
        +{{ additionalIngredientsCount }} more
      </span>
    </div>

    <template #footer>
      <div class="flex flex-row space-x-4 items-center">
        <UButton
        icon="i-tabler-shopping-cart"
        color="blue"
        variant="solid"
        @click="shoppingListStore.addRecipeToShoppingList(props.recipe)"
        >
        Quick add
      </UButton>
      <UButton
      icon="i-tabler-arrow-up-right"
      color="black"
      variant="solid"
      @click="console.log('View recipe clicked!')"
      >
      View recipe
    </UButton>
  </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { Recipe } from '~/types/recipe';

const props = defineProps<{ recipe: Recipe }>();
const recipesStore = useRecipesStore();
const shoppingListStore = useShoppingListStore();

const slideOverOpen = ref(false)

const humanReadableIngredients = computed(() =>
  recipesStore.getHumanReadableIngredientsListForRecipe(props.recipe)
);

const displayedIngredients = computed(() => humanReadableIngredients.value.slice(0, 3));
const additionalIngredientsCount = computed(() => humanReadableIngredients.value.length - 3);

</script>