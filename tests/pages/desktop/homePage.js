class HomePage {
    constructor(page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://ovago.com/en-us/');
    }
    async enterOrigin(origin) {
        await this.page.fill('#from-input', origin);
    }
}
export default HomePage;
