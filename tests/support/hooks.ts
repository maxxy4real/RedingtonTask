import {test} from "@playwright/test";
import {HomePage} from "../pages/HomePage";
import {SearchPage} from "../pages/SearchPage";

let homePage: HomePage;
let searchPage: SearchPage;


test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
});



export { homePage, searchPage};
