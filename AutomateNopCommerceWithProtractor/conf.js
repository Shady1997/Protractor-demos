var Jasmine2HtmlReporter = require('C:\\Users\\G525585\\AppData\\Roaming\\npm\\node_modules\\protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['nopcommerce.js'],
  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        takeScreenshots: true,// By default this is enabled Default is true
        takeScreenshotsOnlyOnFailures: false, // Default is false (So screenshots are always generated)
        cleanDestination: true, // if false, will not delete the reports or screenshots before each test run.Default is true
        showPassed: true,//default is true This option, if false, will show only failures.
        fileName: 'MyRepoDemo', //We can give a prefered file name .
        savePath: 'myproreports',//Reports location it will automatically generated
        screenshotsFolder: 'screenshotsloc' //Screenshot location it will create a folder inside myproreports
      })
    );
  },
  multiCapabilities: [
    //{ browserName: 'firefox'}, 
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ["--start-maximized"]
      }
    }]
};