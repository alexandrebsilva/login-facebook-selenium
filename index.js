const { Builder, By } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build()
const loginOnFacebook = async (email, password) => {
    await driver.get('https://www.facebook.com');
    await driver.findElement(By.id('email')).sendKeys(email);
    await driver.findElement(By.id('pass')).sendKeys(password);
    await driver.findElement(By.id('u_0_b')).click();
}

loginOnFacebook('', '')