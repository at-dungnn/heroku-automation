import { test, expect } from "@playwright/test";

test.describe("Checkbox feature", () => {
  test("should click checkbox", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    await page.waitForTimeout(800);

    const checkbox1 = page.locator("input[type='checkbox']").first();
    await checkbox1.click();
    await page.waitForTimeout(800);

    await expect(checkbox1).toBeChecked();
  });
});
