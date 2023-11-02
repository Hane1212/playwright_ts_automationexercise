import { Locator, Page, expect } from '@playwright/test'

export class LoginPage  {
  readonly page: Page
//   Signup Form
  readonly signupFormTitle: Locator
  readonly signupName: Locator
  readonly signupEmail: Locator
  readonly signupBtn: Locator
//      Login Form
  readonly loginFormTitle: Locator
  element: Locator

  constructor(page: Page) {
    this.page = page
    // this.connectWallet = page.locator('xpath=//*[contains(@class, "open-connect-modal")]')
    this.signupFormTitle = page.locator('[class="signup-form"] > h2');
    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupBtn = page.locator('[data-qa="signup-button"]');
    this.loginFormTitle = page.locator('[class="login-form"] > h2 > b');
}

//   async click(elem:Locator){
//     await this.page.click(elem);
//   }
  async gotoAutoExePage(){
    await this.page.goto('https://www.automationexercise.com/');
  }

  async clickSignupBtn(){
    await this.signupBtn.click();
  }


}
