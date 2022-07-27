const { browser } = require("protractor");

// to start server : webdriver-manager start   and to run conf file : protractor conf.js
//TODO : add test cases
describe('End2End Linkedin Posting and Commenting with protractor', function () {
  //TODO step1: Launch the browser and navigate to the url and login to app
  it('should app start and login correctly', function () {
    //this code for non-angualr web application
    browser.driver.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(5000)
    //start application
    browser.get('https://www.linkedin.com/');

    //fill username and passwor then click login button
    browser.driver.findElement(by.id('session_key')).sendKeys('shadyahmed01091997@outlook.com');
    browser.driver.findElement(by.id('session_password')).sendKeys('P@ssw0rd#11');
    browser.driver.findElement(by.xpath("//button[@class='sign-in-form__submit-button']")).click();
    //verify if login successfully
    expect(browser.driver.findElement(by.xpath("//div[@class='t-16 t-black t-bold']")).getText()).toEqual('Welcome, Shady!');
  });

  //TODO step2: add new post to linkedin page and verify it posted correctly
  it('Add Post to Linkedin Page', function () {
    //add new post
    browser.driver.findElement(by.xpath("(//span[@class='artdeco-button__text'])[5]")).click();
    //verify if pop up apepar correctly to add new post
    expect(browser.driver.findElement(by.id('share-to-linkedin-modal__header')).getText()).toEqual('Create a post');
  });

  // TODO Step3: Create new post and share it on linkedin
  it('Fill Post Data and Share it on Linkedin Page', function () {
    browser.driver.findElement(by.xpath("//div[@class='ql-editor ql-blank']/p")).sendKeys("Hi Shady , I'm from Cypress");
    expect(browser.driver.findElement(by.id('share-to-linkedin-modal__header')).getText()).toEqual('Create a post');
  });

  // //fill customer info
  // it('fill customer data and complete payment', function () {
  //   browser.driver.findElement(by.name('firstName')).sendKeys('shady');
  //   browser.driver.findElement(by.name('lastName')).sendKeys('ahmed');
  //   browser.driver.findElement(by.name('postalCode')).sendKeys('44671');
  //   browser.driver.findElement(by.name('continue')).click();
  //   expect(browser.driver.getPageSource()).toContain("Overview");
  // });

  // //finish payment and return to home page
  // it('fill customer data and complete payment', function () {
  //   browser.driver.findElement(by.name('finish')).click();
  //   expect(browser.driver.getPageSource()).toContain("THANK YOU FOR YOUR ORDER");
  //   browser.driver.findElement(by.name('back-to-products')).click();
  //   //scroll up to top of page
  //   browser.executeScript('window.scrollTo(0,0);');
  //   browser.driver.sleep(2000);
  // });
});