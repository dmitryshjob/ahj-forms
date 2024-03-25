import puppeteer from "puppeteer";

describe("page start", () => {
    let browser;
    let page;

    jest.setTimeout(30000);

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });

        page = await browser.newPage();
    });

    test("page test", async () => {
        await page.goto("http://localhost:9000");
        await page.waitForSelector("body");
    });

    test("test btn", async () => {
        await page.goto("http://localhost:9000");
        await page.waitForSelector(".btn");
    });

    test("test click", async () => {
        await page.goto("http://localhost:9000");
        await page.waitForSelector(".btn");
        const button = await page.$(".btn");
        await button.click();
        await page.waitForSelector(".tooltip-wrapper");
    }, 30000);

    afterAll(async () => {
        await browser.close();
    });
});