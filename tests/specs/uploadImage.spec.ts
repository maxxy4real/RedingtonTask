import { test } from '@playwright/test';
import {homePage} from '../support/hooks';

test.describe('Image Upload ', () => {
  test('should allow a user to upload an image successfully', async () => {
    await homePage.navigate();
    await homePage.clickAddImage();
    await homePage.enterTitle('Lake');
    await homePage.enterUrl('https://www.w3schools.com/w3images/fjords.jpg');
    await homePage.enterKeywords('Lake, river');
    await homePage.verifyDateIsToday();
    await homePage.clickSubmit();
    await homePage.verifySuccessfulImageUpload();
  });
});
