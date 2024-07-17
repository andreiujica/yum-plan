import { test, expect } from "@playwright/test";

test.describe("ShoppingList", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("adds first two options to the shopping list", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    // Add the first two recipes to the shopping list - Brownie and Swiss Roll
    // As our data is static, we can be sure these will be the first two options
    // and we can use the "Quick add" button to add them.

    await page.getByRole("button", { name: "Quick add" }).first().click();
    await page.getByRole("button", { name: "Quick add" }).nth(1).click();
    await page.getByRole("button", { name: "View Total" }).click();
    await expect(page.getByText("• 300 grams of flour")).toBeVisible();
  });
});
