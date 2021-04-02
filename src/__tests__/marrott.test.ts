import { Builder, By, until, Capabilities, WebDriver } from "selenium-webdriver";
import {Marriott} from './marrott'
const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
// i need to create normal class
const marriot = new Marriott(driver);
describe("Marrott hotel",()=>{
    jest.setTimeout(20000);
    beforeEach(async()=>{
        await marriot.navigate();
    });
    it("Signin with wrong user name and pasword" , async()=>{

        await marriot.signin();
        await driver.wait(until.elementLocated(marriot.signWithWrongAccount));
        const pageTitle =  await driver.findElement(marriot.signWithWrongAccount);

        expect(pageTitle).toBeTruthy();

    });
    it("Search hotel location" , async()=>{
        await marriot.search();
    });

    it("add to cart", async()=>{
        await marriot.offer();
        await driver.wait(until.elementLocated(marriot.closeNotificaion));
        await driver.findElement(marriot.closeNotificaion).click();
        await driver.wait(until.elementLocated(marriot.orderPillow));
        await driver.findElement(marriot.orderPillow).click();
        await driver.wait(until.elementLocated(marriot.orderDownPillow));
        await driver.findElement(marriot.orderDownPillow).click();

        
        await driver.wait(until.elementLocated(marriot.slectPillow));
        await driver.findElement(marriot.slectPillow).click();
        await driver.wait(until.elementLocated(marriot.selectSize));
        await driver.findElement(marriot.selectSize).click();
        await driver.wait(until.elementLocated(marriot.addToCart));
        await driver.findElement(marriot.addToCart).click();
        await driver.wait(until.elementLocated(marriot.checkOut));
        await driver.findElement(marriot.checkOut).click();
    
});
});