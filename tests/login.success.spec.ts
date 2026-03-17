import { test, expect } from "@playwright/test";

test.describe("Login Success", () => {
  test("login success", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.waitForTimeout(800);

    await page.locator("#username").fill("tomsmith");
    await page.waitForTimeout(800);

    await page.locator("#password").fill("SuperSecretPassword!");
    await page.waitForTimeout(800);

    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(800);

    await expect(page.locator("#flash")).toContainText(
      "You logged into a secure area!",
    );
  });
});
