<template>
  <Header/>
  <main class="flex flex-row bg-slate-900/75 backdrop-blur w-screen h-[calc(100vh-4rem)] px-10 sm:px-12 lg:px-14 py-6">
    <div class="w-4/6">
      <RecipesCarousel/>
      <IngredientsTable/>
    </div>
    <div class="w-2/6">
      <ShoppingList/>
    </div> 
  </main>
</template>