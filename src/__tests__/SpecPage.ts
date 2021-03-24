import {By, until , WebDriver,}
from  "selenium-Webdriver";

// i set up the page object the following methods(serach, navigate, getREsult)
export class SpecPage {
    driver : WebDriver;
    // any page that can search
    url: string  = "https://www.google.com";
    

    searchBar: By = By.name("rd");
    results: By = By.id("r1")
// constracutor metthod
constructor(driver:WebDriver){
    this.driver = driver;
}
async navigate(){
    await this.driver.get(this.url);
    await this .driver.wait(until.elementLocated(this.searchBar))
    await this.driver.wait(until.elementLocated(this.searchBar))
    await this. driver.wait(until.elementIsVisible(await this.driver.findElement(this .searchBar)));

}

async  sendkeys(ElementBy: By, keys){
    await this.driver.wait(until.elementLocated(ElementBy));
    return this.driver.findElement(ElementBy).sendKeys(keys);



}
async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }
  async doSearch(text: string) {
    return this.sendkeys(this.searchBar, `${text}\n`);
}
// get result
async getResults() {
    return this.getText(this.results);

  } 
}