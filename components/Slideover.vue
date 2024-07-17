<!--  
 This is a custom component that wraps the USlideover component from the NuxtUI library.
 It has been created to provide a consistent look and feel for the slideover component across the application.
 
 Example usage:

  <Slideover>
    <template #headerTitle>
      <h1 class="text-2xl font-bold">Add Recipe</h1>
    </template>
    <template #body>
      <RecipeForm />
    </template>
  </Slideover>
-->

<template>
  <USlideover v-model="isSlideoverOpen">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        background: 'dark:bg-blue-400 dark:bg-opacity-10',
      }"
    >
      <template #header>
        <!-- Used in order to close the slideover -->
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10"
          square
          padded
          @click="
            $emit('close');
            isSlideoverOpen = false;
          "
        />

        <!-- Header title -->
        <slot name="headerTitle"></slot>
      </template>

      <!-- Body content -->
      <slot name="body"></slot>
    </UCard>
  </USlideover>
</template>

<script setup lang="ts">
const isSlideoverOpen = ref(false);
</script>
