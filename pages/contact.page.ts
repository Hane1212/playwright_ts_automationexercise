import { Locator, Page, expect } from '@playwright/test'

export class ContactPage  {
    readonly page: Page
    readonly contactUs: Locator
    readonly name : Locator
    readonly email : Locator
    readonly subject : Locator
    readonly content :Locator
    readonly submitBtn: Locator
    element: Locator

    constructor(page: Page) {
        this.page = page
        // this.connectWallet = page.locator('xpath=//*[contains(@class, "open-connect-modal")]')
        this.contactUs = page.locator('a[href*="contact_us"]');
        this.name = page.getByPlaceholder('Name');
        this.email = page.locator('[data-qa="email"]');
        this.subject = page.getByPlaceholder('Subject');
        this.content = page.getByPlaceholder('Your Message Here');
        this.submitBtn = page.locator('[data-qa="submit-button"]');
}

    async gotoAutoExePage(){
        await this.page.goto('https://www.automationexercise.com/');
    }

    async inputContactMsg() {
        await this.name.fill('lea_test_003');
        await this.email.fill('lea_test_003@gmail.com');
        await this.content.fill('Your Message Here')
    }

    async clickSubmitBtn(){
        await this.submitBtn.click();
    }

    async aceptAlert(){
        this.page.on('dialog', async dialog => {     
            //Click on OK Button
            await dialog.accept();
        });
    }

}
