import { Page, expect } from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly searchInput;
    readonly searchResults;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.locator('input[placeholder="Search"]');
        this.searchResults = this.page.locator('img');
    }

    async searchFor(query: string) {
        await this.searchInput.fill(query);
        await this.page.keyboard.press('Enter');
    }

    async verifyImageDisplayed(imageAltText: string) {
        const image = this.page.locator(`img[alt="${imageAltText}"]`);
        await expect(image).toBeVisible();
    }

    async selectFilterOption(option: string) {
        await this.page.locator('[role="combobox"]').click();
        await this.page.locator('ul[role="listbox"]').waitFor();
        await this.page.locator(`li[role="option"]:has-text("${option}")`).click();
    }

}
