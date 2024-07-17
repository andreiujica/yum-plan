import { test, expect } from "@playwright/test";

test.describe("RecipeCard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("deletes a recipe", async ({ page }) => {
    // The first card should contain the recipe "Brownie" initially
    await page.goto("http://localhost:3000/");
    await expect(page.getByRole("heading", { name: "Brownie" })).toBeVisible();

    // Delete the recipe
    await page.getByRole("button", { name: "Delete Recipe" }).first().click();

    // The first card should now contain the recipe "Swiss Roll" - so "Brownie" should not be visible
    await expect(
      page.getByRole("heading", { name: "Brownie" })
    ).not.toBeVisible();
  });
});
