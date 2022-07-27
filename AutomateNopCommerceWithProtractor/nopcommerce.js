// to start server : webdriver-manager start   and to run conf file : protractor conf.js
describe('End2End NopCommerce demo web application with protractor', function () {
    it('should app start', function () {
        //this code for non-angualr web application
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        //start application
        browser.get('https://demo.nopcommerce.com/');
        //verify if website opened correctly successfully
        expect(browser.driver.getPageSource()).toContain("Register");
        browser.driver.findElement(by.className('ico-register')).click();
        browser.driver.sleep(5000);
    });
    it('Move to Registration Page to fill data ', function () {
        //verify if page opened correctly
        expect(browser.driver.getPageSource()).toContain("Register");
        //choose gender
        // browser.driver.findElement(by.id('gender-male')).click();
        //fill first name
        browser.driver.findElement(by.id('FirstName')).sendKeys('shady');
        //fill last name
        browser.driver.findElement(by.id('LastName')).sendKeys('ahmed');
        //choose day
        browser.driver.findElement(by.cssContainingText('option', '4')).click();
        //choose month
        browser.driver.findElement(by.cssContainingText('option', '4')).click();
        //choose year
        browser.driver.findElement(by.cssContainingText('option', '1995')).click();
        browser.driver.sleep(5000);
    });
});