import { Page, expect } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('/');
    }

    async clickAddImage() {
        await this.page.click('text=Add Image');
    }

    async enterTitle(title: string) {
        await this.page.fill('#Title', title);
    }

    async enterUrl(url: string) {
        await this.page.fill('#Url', url);
    }

    async enterKeywords(keywords: string) {
        await this.page.click('div.MuiFormControl-fullWidth');
        const input = await this.page.locator('#\\:r0\\:');
        await input.waitFor({ state: 'visible' });
        await input.fill(keywords);
    }

    async verifyDateIsToday() {
        const dateInput = this.page.locator('#\\:r1\\:');
        const dateValue = await dateInput.inputValue();
        const today = new Date();
        const todayDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
        expect(dateValue).toBe(todayDate);
        console.log(`Test passed: Today's date is prepopulated as ${dateValue}`);
    }

    async clickSubmit() {
        await this.page.click('text=Submit');
    }

    async verifySuccessfulImageUpload() {
        const image = this.page.locator('li:has-text("Lake") img.MuiImageListItem-img');
        await expect(image).toHaveAttribute('src', 'https://www.w3schools.com/w3images/fjords.jpg');
    }
}
