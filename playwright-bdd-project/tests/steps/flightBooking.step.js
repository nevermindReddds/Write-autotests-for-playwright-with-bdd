import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import HomePage from "../pages/desktop/homePage";
import SearchResultsPage from "../pages/desktop/searchResultsPage";
import PreCheckoutPage from "../pages/desktop/preCheckoutPage";
import CheckoutPage from "../pages/desktop/checkoutPage";

const { Given, When, Then } = createBdd();

Given("User is on the Home Page", async function ({ page }) {
  this.homePage = new HomePage(page);
  await this.homePage.goto();
});

When("User searches for a flight", async function ({ page }) {
  await this.homePage.searchFlight("New York", "Los Angeles");
  this.searchResultsPage = new SearchResultsPage(page);
});

When("User selects a random flight", async function ({ page }) {
  await this.searchResultsPage.selectRandomFlight();
  this.preCheckoutPage = new PreCheckoutPage(page);
});

When("User proceeds to checkout", async function ({ page }) {
  await this.preCheckoutPage.proceedToCheckout();
  this.checkoutPage = new CheckoutPage(page);
});

When("User fills in the checkout form", async function ({ page }) {
  await this.checkoutPage.fillContactInfo("dari.terri@kiv.dev", "19074861280");
  await this.checkoutPage.fillPassengerDetails("John Doe");
  await this.checkoutPage.fillPaymentDetails("4111111111111111");
});

Then("User successfully books the flight", async function ({ page }) {
  await this.checkoutPage.confirmBooking();
  await expect(this.checkoutPage.isBookingSuccess()).toBeTruthy();
});
