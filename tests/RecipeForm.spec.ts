import { test, expect } from "@playwright/test";

test.describe("RecipeForm", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("creates a new recipe", async ({ page }) => {
    // Open the form
    await page.goto("http://localhost:3000/");
    await page.getByRole("button", { name: "Add Recipe" }).click();

    // Fill in recipe name and ingredients
    await page.getByLabel("Name").fill("Test Recipe");
    await page.getByLabel("Ingredients").click();
    await page.getByRole("option", { name: "flour" }).click();
    await page.getByPlaceholder("Quantity").fill("40");

    // Submit the form and check that the recipe is displayed
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByRole("heading", { name: "Test Recipe" })
    ).toBeVisible();
  });
});
