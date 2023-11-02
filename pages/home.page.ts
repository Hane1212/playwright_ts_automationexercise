import { Locator, Page, expect } from '@playwright/test'

export class HomePage  {
  readonly page: Page
  readonly loginBtn: Locator
  readonly contactUs: Locator
  element: Locator

  constructor(page: Page) {
    this.page = page
    // this.connectWallet = page.locator('xpath=//*[contains(@class, "open-connect-modal")]')
    this.loginBtn = page.locator('a[href*="login"]');
    this.contactUs = page.locator('a[href*="contact_us"]');
}

//   async click(elem:Locator){
//     await this.page.click(elem);
//   }
    async gotoAutoExePage(){
        await this.page.goto('https://www.automationexercise.com/');
    }

    async clickSignBtn() {
        await this.loginBtn.click();
    }

    async clickContactUs(){
        await this.contactUs.click();
    }

}
