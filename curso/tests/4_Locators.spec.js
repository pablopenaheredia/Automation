import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

    //click en el boton de login
    await page.click('id=login2')

    //username - css
    // await.page.locator('#loginusername').fill('username')
    // await page.type('#loginusername')
    await page.fill('#loginusername', 'pavanol')

    //password - css
    await page.fill("input[id='loginpassword']", 'test@123')

    //click en el boton de login - xpath
    await page.click("//button[normalize-space()='Log in']")

    //verificar presencia de link de log out  - xpath
    const logoutlink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutlink).toBeVisible();
    await page.close()
})