<template>
  <div class="flex flex-col">
    <h1 class="text-3xl font-bold">Shopping List</h1>
    <h3 class="text-gray-400 mt-1 mb-6">See an overview of all the ingredients you need for your recipes.</h3>
    <UAlert
        icon="i-tabler-cookie-man"
        color="blue"
        variant="soft"
        title="Ready up your stoves!"
        description="YumPlan makes whipping up recipes and planning your shopping list a breeze!"
      />
    <div class="flex flex-col space-y-4 p-4 mt-8 rounded-lg h-[calc(100vh-20rem)] dark:bg-blue-400 dark:bg-opacity-10 overflow-scroll border border-gray-800">
      <ShoppingListCard
        v-for="(recipe, index) in shoppingListStore.getShoppingList"
        :key="index"
        :recipe="recipe"
      />
      <UButton variant="solid" block @click="slideOverOpen = true">
        View Total
      </UButton>
    </div>

    <USlideover v-model="slideOverOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' , background: 'dark:bg-blue-400 dark:bg-opacity-10'}"
      >
        <template #header>
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-5 z-10"
            square
            padded
            @click="slideOverOpen = false"
          />

          <h1 class="text-2xl font-bold">Total Ingredients</h1>
        </template>

        <div class="flex flex-col space-y-4">
          <span
            v-for="(ingredient, index) in shoppingListStore.getShoppingListTotalPerIngredient"
            :key="index"
            class="text-gray-300 ml-8"
          >
            • {{ ingredient }}
        </span>
      </div>

          
      </UCard>
    </USlideover>

  </div>
</template>

<script setup lang="ts">
const shoppingListStore = useShoppingListStore();

const slideOverOpen = ref(false);

</script>