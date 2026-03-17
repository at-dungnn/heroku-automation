import { test, expect } from "@playwright/test";

test.describe("Login Fail", () => {
  test("login fail with wrong password", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.waitForTimeout(800);

    await page.locator("#username").fill("tomsmith");
    await page.waitForTimeout(800);

    await page.locator("#password").fill("WrongPassword");
    await page.waitForTimeout(800);

    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(800);

    await expect(page.locator("#flash")).toContainText(
      "Your password is invalid!",
    );
  });

  test("login fail with wrong username", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.waitForTimeout(800);

    await page.locator("#username").fill("wronguser");
    await page.waitForTimeout(800);

    await page.locator("#password").fill("SuperSecretPassword!");
    await page.waitForTimeout(800);

    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(800);

    await expect(page.locator("#flash")).toContainText(
      "Your username is invalid!",
    );
  });
});
