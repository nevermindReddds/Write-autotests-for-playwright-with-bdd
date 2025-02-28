export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://ovago.com/en-us/");
  }

  async searchFlight(from, to) {
    await this.page.fill("#from-input", from);
    await this.page.fill("#to-input", to);
    await this.page.click("#search-button");
  }
}
