var{Given,When,Then} = require ('cucumber')
var{browser} = require('protractor')
var EC=browser.ExpectedConditions;
var propertiesReader = require('properties-reader')
var properties = propertiesReader('Properties/Login.properties')
var{expect} = require('chai');
const propertiesReaderFactory = require('properties-reader');
const { element } = require('protractor');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


Given('Enter url',async function () {
    await browser.waitForAngularEnabled(false);
    await browser.get(properties.get('url'));
    await browser.wait(EC.visibilityOf(element(by.xpath("//a[text()='Single Iframe']"))),10000);
    browser.manage().window().maximize();
    browser.switchTo().frame[0];
  
  });
//   Then('User enter the valid username',async function () {
//     await element(by.id("username")).sendKeys(properties.get('username'));
//   });
//   Then('User enter the valid password',async function () {
//     await element(by.name("password")).sendKeys(properties.get('password'));
//   });

//   Then('User enter Click on sign in',async function () {
//     await element(by.id("kc-login")).click();
//    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='Modified Date : ']"))),15000);
   
//   });

//   Then('User click on Automation_S1',async function () {
//   await element(by.xpath("//h3[text()=' Automation_S1 ']")).click();
//   await browser.wait(EC.visibilityOf(element(by.xpath("//a[text()='Tickets']"))),15000);
//   });
  
//   Then('User click on Tickets',async function () {
//    await element(by.xpath("//a[text()='Tickets']")).click();
//   //  //browser.navigate().refresh();

//   await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='INC0828027']"))),10000);
// });
//   Then('verify the ticketnum',async function () {
//   await element(by.xpath('//span[text()="INC0828027"]')).isDisplayed().then(function(select){
//     expect(select).to.be.true;
//     var text=element(by.xpath("//tr[@class='dropdown-hover ng-star-inserted'][1]")).getText();
//     text.then(elementText =>{
//       console.log("****Element text is : ***         "+elementText);    })
//   })
//   });
