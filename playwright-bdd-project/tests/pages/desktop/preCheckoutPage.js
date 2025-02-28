export default class PreCheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.click("#continue-button");
  }
}
