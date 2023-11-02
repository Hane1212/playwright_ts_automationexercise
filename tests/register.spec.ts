import { test, expect, Page } from "@playwright/test";
import { HomePage } from '../pages/home.page'
import { LoginPage } from '../pages/login.page'

test.describe("New Todo @smoke", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;
    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        await homePage.gotoAutoExePage()
    });

    // test.beforeEach(async () => {
    //     await page.goto('https://www.automationexercise.com/');
    // });

    test('Verify that home page is visible successfully', async () => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Automation Exercise/);
    });
    
    test('Verify New User Signup! is visible', async () => {
        //  Click on 'Signup / Login' button
        // await page.getByText(' Signup / Login').click();
        await homePage.clickSignBtn()
        await expect(loginPage.signupFormTitle).toHaveText('New User Signup!');
    });

    test('Verify that ENTER ACCOUNT INFORMATION is visible', async () => {
        //  Enter name and email address
        await loginPage.signupName.fill('lea_test_003');
        await loginPage.signupEmail.fill('lea_test_003@gmail.com')
        // Click 'Signup' button
        await loginPage.clickSignupBtn();
        await expect(loginPage.loginFormTitle).toHaveText('Enter Account Information');
    });
});
