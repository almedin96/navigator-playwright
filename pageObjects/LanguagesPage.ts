import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

class LanguagesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  //Methods
  async selectLanguage(language: string) {
    const languageLocator = this.page.locator(
        `//a[@data-ga-category="General settings" and contains (., '${language}')]`
    );
    await languageLocator.click();
  }

  async checkSidebarItems(listItems: any) {
    for (const item of listItems) {
      const categoryLocator = this.page.locator(`//div[@class="name" and contains (., "${item}")]`);
      await expect(categoryLocator).toBeVisible();
    }
  }
}

export default LanguagesPage;
