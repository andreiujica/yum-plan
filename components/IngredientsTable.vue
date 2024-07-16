<template>
  <div class="flex flex-col mt-8">
    <h1 class="text-3xl font-bold">Ingredients</h1>
    <h3 class="text-gray-400 mt-1">Browse through your pantry and get inspired for your next cake.</h3>
    <div class="mt-4 rounded-lg dark:border-gray-800 dark:border mr-10">
    <UTable :rows="rows" :columns="columns"/>
    
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination 
      :ui = "{
        activeButton: {
          color: 'blue',
        },
      }"
      v-model="page" :page-count="pageCount" :total="ingredients.length" />
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
const ingredientsStore = useIngredientsStore();

const ingredients = computed(() => ingredientsStore.getIngredients);

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name'
}, {
  key: 'category',
  label: 'Category'
}, {
  key: 'unit',
  label: 'Unit of Measurement'
}]

const page = ref(1)
const pageCount = computed(() => Math.ceil(ingredients.value.length / 5))

const rows = computed(() => {
  return ingredients.value.slice((page.value - 1) * pageCount.value, (page.value) * pageCount.value)
})
</script>