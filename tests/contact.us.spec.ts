import { test, expect, Page } from "@playwright/test";
import { ContactPage } from '../pages/contact.page'
import { HomePage } from '../pages/home.page'

test.describe("New Todo @smoke", () => {
    let contactPage: ContactPage;
    let homePage: HomePage;
    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        contactPage = new ContactPage(page)
        homePage = new HomePage(page)
        await homePage.gotoAutoExePage()
    });

    test('Verify that home page is visible successfully', async () => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Automation Exercise/);
    });
    
    test('Verify GET IN TOUCH is visible', async () => {
        //  Click on 'Contact us' button
        await homePage.clickContactUs();
        await expect(page.getByText('Get In Touch')).toBeVisible();
    });

    test('Verify success message Success! Your details have been submitted successfully. is visible', async () => {
        // Enter name, email, subject and message
        await contactPage.inputContactMsg();
        // await page.locator('[stroke-width="1"]').click();
        await contactPage.clickSubmitBtn();
        await contactPage.aceptAlert();
        await expect(page.getByText('Success! Your details have been submitted successfully.')).toBeVisible();
    });
   
});
