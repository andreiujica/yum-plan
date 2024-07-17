<template>
  <Slideover>
    <template #headerTitle>
      <h1 class="text-2xl font-bold">Add Recipe</h1>
    </template>
    <template #body>
      <UForm
        :schema="recipeSchema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Ingredients" name="ingredients">
          <div class="space-y-1">
            <div
              v-for="(ingredient, index) in state.ingredients"
              :key="index"
              class="flex items-center space-x-2"
            >
              <USelectMenu
                v-model="ingredient.ingredientId"
                placeholder="Select an ingredient"
                searchable
                searchable-placeholder="Search by name"
                option-attribute="name"
                value-attribute="id"
                by="id"
                :search-attributes="['name']"
                class="flex-1"
                :options="ingredientsStore.getIngredients"
              />
              <UInput
                v-model="ingredient.quantity"
                type="number"
                placeholder="Quantity"
                class="w-20"
              />
              <UButton
                icon="i-heroicons-x-mark-20-solid"
                variant="ghost"
                color="red"
                @click="removeIngredient(index)"
              />
            </div>
            <UButton
              icon="i-heroicons-plus-20-solid"
              variant="ghost"
              color="blue"
              @click="addIngredient"
            >
              Add Ingredient
            </UButton>
          </div>
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </template>
  </Slideover>
</template>

<script setup lang="ts">
import { number, string, array, object, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const ingredientsStore = useIngredientsStore();
const recipesStore = useRecipesStore();

// Define the schema for the recipe form - used for validation with Yup
const recipeSchema = object({
  name: string().required("Name is required"),
  ingredients: array()
    .of(
      object().shape({
        ingredientId: number().required("Ingredient ID is required"),
        quantity: number()
          .required("Quantity is required")
          .min(1, "Quantity must be at least 1"),
      })
    )
    .min(1, "At least one ingredient is required"),
});

type Schema = InferType<typeof recipeSchema>;

// The state which will be used to store the form data
const state = reactive({
  name: "",
  ingredients: [{ ingredientId: 0, quantity: 0 }],
});

// These functions are used to add and remove ingredients from the form
const addIngredient = () => {
  state.ingredients.push({ ingredientId: 0, quantity: 0 });
};

const removeIngredient = (index: number) => {
  state.ingredients.splice(index, 1);
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    recipesStore.createRecipe(state);
  } catch (error) {
    console.error(error);
  }
}
</script>
