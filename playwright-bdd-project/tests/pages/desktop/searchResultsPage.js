export default class SearchResultsPage {
  constructor(page) {
    this.page = page;
  }

  async selectRandomFlight() {
    const flights = await this.page.$$(".flight-item");
    const randomIndex = Math.floor(Math.random() * flights.length);
    await flights[randomIndex].click();
  }
}
