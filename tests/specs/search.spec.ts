import { test } from '@playwright/test';
import { homePage } from '../support/hooks';
import { searchPage } from '../support/hooks';

test.describe.parallel('Search Image', () => {
    const searchTerms = [
        { query: 'Mountain', expectedAlt: 'mountains, snow, cold' },
        { query: 'Book', expectedAlt: 'book, study, pages' },
        { query: 'Coffee', expectedAlt: 'coffee, cup, mug' }
    ];

    for (const { query, expectedAlt } of searchTerms) {
        test(`should filter and display ${expectedAlt} image from the gallery`, async () => {
            await homePage.navigate();
            await searchPage.searchFor(query);
            await searchPage.verifyImageDisplayed(expectedAlt);
        });
    }

    test('should filter images by selecting Coffee from dropdown', async () => {
        await homePage.navigate();
        await searchPage.selectFilterOption('Coffee');
        await searchPage.verifyImageDisplayed('coffee, cup, mug');
    });
});
