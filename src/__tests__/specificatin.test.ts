import { SpecPage } from "./SpecPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new SpecPage(driver);
const fs = require('fs')

test("it works", async () => {
  await page.navigate();
  await page.doSearch("purple");
  let myText = await driver.findElement
  //fs is new file add
  fs.writeFile(
    `${__dirname}/.. /file/ results.text`,
    myText,
    (e)=>{
        if (e) console.error(e);
        else console.log('filesave')
    }

  )
  expect(await page.getResults()).toContain("purple");
  expect(page.getResults).toContain("purple");
});
afterAll(async () => {
  await driver.quit();
});