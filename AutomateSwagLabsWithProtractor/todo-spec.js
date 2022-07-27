// to start server : 'webdriver-manager start' and for update driver : 'webdriver-manager update'  and to run conf file : 'protractor conf.js'
describe('End2End swag labs web application with protractor', function () {
  it('should app start and login correctly', function () {
    //this code for non-angualr web application
    browser.driver.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    //start application
    browser.get('https://www.saucedemo.com/');

    //fill username and passwor then click login button
    browser.driver.findElement(by.id('user-name')).sendKeys('standard_user');
    browser.driver.findElement(by.id('password')).sendKeys('secret_sauce');
    browser.driver.findElement(by.id('login-button')).click();
    //verify if login successfully
    expect(browser.driver.findElement(by.id('item_4_title_link')).getText()).toEqual('Sauce Labs Backpack');
  });

  // select all products and go to shop
  it('Select products', function () {
    browser.driver.findElement(by.name('add-to-cart-sauce-labs-backpack')).click();

    //go to payment page
    browser.driver.findElement(by.id('shopping_cart_container')).click();
    //verify if items selected correctly
    expect(browser.driver.findElement(by.id('item_4_title_link')).getText()).toEqual('Sauce Labs Backpack');
  });

  //move to payment page
  it('click checkout button and move to payment page', function () {
    browser.driver.findElement(by.name('checkout')).click();
    expect(browser.driver.getPageSource()).toContain("Information");
  });

  //fill customer info
  it('fill customer data and complete payment', function () {
    browser.driver.findElement(by.name('firstName')).sendKeys('shady');
    browser.driver.findElement(by.name('lastName')).sendKeys('ahmed');
    browser.driver.findElement(by.name('postalCode')).sendKeys('44671');
    browser.driver.findElement(by.name('continue')).click();
    expect(browser.driver.getPageSource()).toContain("Overview");
  });

  //finish payment and return to home page
  it('fill customer data and complete payment', function () {
    browser.driver.findElement(by.name('finish')).click();
    expect(browser.driver.getPageSource()).toContain("THANK YOU FOR YOUR ORDER");
    browser.driver.findElement(by.name('back-to-products')).click();
    //scroll up to top of page
    browser.executeScript('window.scrollTo(0,0);');
    browser.driver.sleep(2000);
  });
});