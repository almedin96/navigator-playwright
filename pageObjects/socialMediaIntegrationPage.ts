import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

class SocialMediaIntegrationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Private getter methods for selectors
  private get facebookHeaderButton() {
    return this.page.locator(
      '//span[@class="iconav-facebook"]'
    );
  }

  private get twitterHeaderButton() {
    return this.page.locator(
      '//span[@class="iconav-twitter-2"]'
    );
  }

  private get googleHeaderButton() {
    return this.page.locator(
      '//span[@class="iconav-googleplus"]'
    );
  }

  // Methods
  async clickOnFacebookHeaderButton() {
    await this.facebookHeaderButton.click();
  }

  async clickOnTwitterHeaderButton() {
    await this.twitterHeaderButton.click();
  }

  async clickOnGoogleHeaderButton() {
    await this.googleHeaderButton.click();
  }

  async openFacebookIntegration(expectedLink: any) {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.clickOnFacebookHeaderButton(),
    ]);
    await this.verifyOpenedLink(newPage, expectedLink);
  }

  private async verifyOpenedLink(page: any, expectedLink: string) {
    await expect(page).toHaveURL(expectedLink, {
        timeout: 20000,
    });
  }

  async openTwitterIntegration(expectedLink: any) {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.clickOnTwitterHeaderButton(),
    ]);
    await this.verifyOpenedLink(newPage, expectedLink);
  }

  async openGoogleIntegration(expectedLink: any) {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.clickOnGoogleHeaderButton(),
    ]);
    await this.verifyOpenedLink(newPage, expectedLink);
  }
}

export default SocialMediaIntegrationPage;
