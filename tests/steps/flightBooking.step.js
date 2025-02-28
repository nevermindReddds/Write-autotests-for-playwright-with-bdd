import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import HomePage from '../pages/desktop/homePage';
import SearchResultsPage from '../pages/desktop/searchResultsPage';

const { Given, When, Then } = createBdd();

Given('User is on the Home Page', async function ({ page }) {
    const homePage = new HomePage(page);
    await homePage.goto();
});

When('User enters {string} in the Origin field', async function ({ page }, origin) {
    const homePage = new HomePage(page);
    await homePage.enterOrigin(origin);
});

Then('User should see search results', async function ({ page }) {
    const searchResultsPage = new SearchResultsPage(page);
    await expect(searchResultsPage.isFlightListVisible()).toBeTruthy();
});
