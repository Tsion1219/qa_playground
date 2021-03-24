import { Builder, By, until, Capabilities, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// We need to make a normal class
class MyPage {
    // You should have a WebDriver in each of your page objects.
    driver: WebDriver
    // A url can be very helpful to store in your page object
    url: string
    // Constructor is just a key word, we'll have a method that is used when we create a new
    // MyPage instance.
    // The arguments we give will replace those certain parameters inside of our page object.
    comingSoon: By = By.xpath('//[@id="__next"]/main/div[2]/div[3]/div[7]/section[3]/div/a/h3')
    results: By = By.xpath('//[@id="main"]/div/div[2]/div[1]/table/tbody/tr[1]/td[2]/h4/a')
    constructor(url?: string, driver?: WebDriver) {
        // In order to access the different properties in the object, you have to use
        // the keyword "this"
        if (url) this.url = url

        if (driver) this.driver = driver
        else // This else will not run if we give our constructor a driver
            this.getDriver()
    }
    getDriver() {
        if (this.driver)
            return this.driver
        else
            return new Builder().withCapabilities(Capabilities.chrome()).build()
    }
    async navigate() {
        await this.driver.get(this.url)
    }
}

const page = new MyPage('https://www.medium.com/', driver)

test('Can navigate to a website', async () => {
    await page.navigate()
    await (await driver.findElement(page.comingSoon)).click();
        await (await driver.findElement(page.results)).click();
    await page.driver.quit()
})
