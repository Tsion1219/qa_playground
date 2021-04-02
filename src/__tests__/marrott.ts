import { By, until, WebDriver } from "selenium-webdriver";
// this is page object for hyatt.com topic page
// it has methods to navigate there , to search 
export class Marriott {
    // the page's driver object
     driver: WebDriver;
     url:string = "https://www.marriott.com/default.mi";
     // the header marking that we are the topic page 
     header: By = By.xpath("//*[@id='ProgramLogoa1d5']/div/a");
     //the sign in button to sign in to the account
    signinButton: By = By.xpath("//*[@data-modal-target='/signInOverlay.mi']");
    // email locter for signin
    signWithemail:By = By.xpath("//*[@id='user-id']");
    signWithPassword:By = By.xpath("//*[@id='password']");
    signButton2:By =  By.xpath("//*[@name='submitButton']");
    signRemberMe:By = By.xpath("//*[@id='remember-me']")
    offerButton:By = By.linkText("Special Offers");
    offeroption:By = By.linkText("Shop Marriott");
    //to close the pupup notification
    closeNotificaion:By = By.xpath("//*[@id='ligtboxClosebtn']")
    orderPillow:By= By.id("TN_l1_PillowsLink");
    orderDownPillow:By =By.xpath("//*[@title='Down Pillow']");
    //selcect the size of pillow
    selectSize:By = By.xpath("//*[@title='Size']/option[2]");
    slectPillow:By = By.xpath("//*[@title='Size']")
    addToCart:By = By.xpath("//*[@id='ATC0']")
    checkOut:By = By.linkText("CHECKOUT");
    selectPayment:By = By.xpath("//*[@id='OCForm1']/section/div[1]/div/section/div/div[1]/div[1]/h2")
    springSale:By =By.xpath("//*[@id='OCForm1']/div[1]/div/div/div");
    signWithWrongAccount: By = By.xpath("//*[@data-component-name='pageTitle']");
    searchLoction:By = By.xpath("//*[@name='destinationAddress.destination']");
   // findAndReserve: By = By.css("//*[@id='find-a-hotel-homePage-form']/div[2]/div[1]/div[2]/ul/li[2]/a")
    selectDates: By = By.xpath("//*[@placeholder='Check-in']");
    selectArriveDate:By = By.css("'t-date-value'");  
    autoComplate:By = By.xpath("//*[@data-place-id='ChIJ7cv00DwsDogRAMDACa2m4K8']");
    selectCheckInDate:By=By.xpath("//*[@data-t-date='1618117200000']");
    selectCheckOutDate:By=By.xpath("//*[@data-t-date='1618462800000']");
    findHotelButton:By =By.xpath("//*[@id='find-a-hotel-homePage-form']/div[2]/div[6]/button");

    


    //the button to open the search input
    // searchButton: By = By.xpath("/html/body/div[5]/div/div/div/div[2]/div/div/div/div/form/div/div[1]/div[1]/div[2]/label");

     constructor(driver: WebDriver) {
         this.driver = driver;
     }
     // will navigate to "https://www.marriott.com/default.mi"
     // @ example awit page.navigate();
     async navigate() {
         await this.driver.get(this .url);
        //  await this.driver.wait(until.elementLocated(this.offerButton))
        //  await this.driver.wait(until.elementLocated(this.header));
        //  await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.header)));
       

        }
        //signin function
      async signin(){
        // await (await this.driver.findElement(this.header)).click();
        await this.driver.wait(until.elementLocated(this.signinButton));
        await this.driver.findElement(this.signinButton).click();
        await this.driver.wait(until.elementLocated(this.signWithemail));
        await this.driver.findElement(this.signWithemail).sendKeys("tsionasmamaw@gmail.com");  
        await this.driver.findElement(this.signWithPassword).sendKeys("abebsw233");
        await this.driver.findElement(this.signRemberMe).click();
        await this.driver.findElement(this.signButton2).click();
        
        
      }
      async search(){
        await this.driver.wait(until.elementLocated(this.searchLoction));
        await this.driver.findElement(this.searchLoction).sendKeys("Chicago,il");
        await (await this.driver.wait(until.elementLocated(this.autoComplate)));
        await this.driver.findElement(this.autoComplate).click();
        await this.driver.findElement(this.selectDates).click();
        await this.driver.wait(until.elementLocated(this.selectCheckInDate));
        await this.driver.findElement(this.selectCheckInDate).click();
        (await this.driver.findElement(this.selectCheckOutDate)).click();
        (await this.driver.findElement(this.findHotelButton)).click();
        

      }
      //special offer fuction
      async offer(){
         await this.driver.findElement(this.offerButton).click();
         await this.driver.wait(until.elementLocated(this.offeroption));
         await this.driver.findElement(this.offeroption).click();
      }

}
