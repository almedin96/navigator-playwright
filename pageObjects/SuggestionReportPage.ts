import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

class SuggestionReportPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Private getter methods for selectors
  private get createSuggestionOrReportButton() {
    return this.page.locator(
      'a[href="#/feedback"]'
    );
  }

  private get nameAndSurnameInput() {
    return this.page.locator(
        'input[name="name_surname"]'
    );
  }

  private get emailInput() {
    return this.page.locator(
      'input[name="email"]'
    );
  }

  private get commentInput() {
    return this.page.locator(
      'textarea[name="comment"]'
    );
  }
  
  private get submitSuggestionOrReport() {
    return this.page.locator(
      'input[class="btn green-button"]'
    );
  }
  
  private get cancelSuggestionOrReport() {
    return this.page.locator(
      'input[class="btn grey-button"]'
    );
  }

  // Methods
  async clickOnCreateSuggestionOrReportButton() {
    await this.createSuggestionOrReportButton.click();
  }

  async enterNameAndSurname(nameAndSurname: string) {
    await this.nameAndSurnameInput.fill(nameAndSurname);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterComment(comment: string) {
    await this.commentInput.fill(comment);
  }

  async selectCheckboxByIndex(indexNumber: number) {
    const suggestionOrReportRadioButton = this.page.locator(`(//input[@type="radio"])[${indexNumber}]`);
   await suggestionOrReportRadioButton.check();

   let isRadioButtonChecked = await suggestionOrReportRadioButton.isChecked();
    expect(isRadioButtonChecked).toBe(true);
  }

  async checkIsSuggestionOrReportSentWithoutError() {
    const errorMessage =
        '//div[@class="nav-lefthand-form feedback"]//div[@class="alert alert-error"]';

    await this.page.waitForSelector(errorMessage, { timeout: 5000 });

    let isErrorShown = await this.page.locator(errorMessage).isVisible();
    expect(isErrorShown).toBe(false);
  }

  async clickOnSubmitSuggestionOrReportButton() {
    await this.submitSuggestionOrReport.click();
  }

  async clickOnCancelSuggestionOrReportButton() {
    await this.cancelSuggestionOrReport.click();
  }
}

export default SuggestionReportPage;
