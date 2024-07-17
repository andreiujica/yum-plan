<!-- 
  The RecipesCarousel component is a section that displays RecipeCard components in a carousel.
  It also includes a button to add a new recipe and a slide-over form to create a new recipe.
-->
<template>
  <div class="flex flex-col">
    <div class="flex flex-row space-x-2 items-center justify-between mr-10">
      <h1 class="text-3xl font-bold">Recipes</h1>
      <UButton
        icon="i-tabler-plus"
        color="blue"
        variant="solid"
        @click="slideOverOpen = true"
      >
        Add Recipe
      </UButton>
    </div>
    <h3 class="text-gray-400 mt-1">
      Try adding one of our popular recipes to your shopping list or create your
      own.
    </h3>

    <UCarousel
      v-slot="{ item }"
      :items="recipesStore.getRecipes"
      :ui="{
        item: 'basis-full md:basis-1/2 lg:basis-1/3',
        container: 'rounded-lg mt-6',
        indicators: {
          wrapper: 'relative bottom-0 mt-4',
        },
      }"
      indicators
      width="full"
    >
      <RecipeCard :recipe="item" />
    </UCarousel>
  </div>
  <RecipeForm v-model="slideOverOpen" @close="slideOverOpen = false" />
</template>

<script setup lang="ts">
const recipesStore = useRecipesStore();

const slideOverOpen = ref(false);
</script>
