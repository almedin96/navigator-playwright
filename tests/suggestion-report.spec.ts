import { test } from '@playwright/test';
import BasePage from '../pageObjects/BasePage';
import SuggestionReportPage from '../pageObjects/SuggestionReportPage';
import { generateUniqueEmail, generateUniqueString, readDataFromJsonFile } from '../utils/utils';

test.describe('Suggestion And Report Functionality', () => {
  let basePage: any;
  let uniqueEmail: any;
  let userFullName: string;
  let suggestionAndReportData: any;

  test.beforeAll(async ({ }) => {
    suggestionAndReportData = await readDataFromJsonFile(
        './data/suggestionAndReport/suggestionAndReportData.json',
      );
    uniqueEmail = await generateUniqueEmail(10);
    userFullName = await generateUniqueString(10);
  }); 

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.goto('/#/categories');
  });

  test('Should be able to leave suggestion', async ({ page }) => {
    const suggestionReportPage = new SuggestionReportPage(page);

    await suggestionReportPage.clickOnCreateSuggestionOrReportButton();

    await suggestionReportPage.enterNameAndSurname(userFullName);
    await suggestionReportPage.enterEmail(uniqueEmail);
    await suggestionReportPage.enterComment(suggestionAndReportData.report.message);
    await suggestionReportPage.selectCheckboxByIndex(1);

    await suggestionReportPage.clickOnSubmitSuggestionOrReportButton();

    await suggestionReportPage.checkIsSuggestionOrReportSentWithoutError();
  });

  test('Should be able to leave report', async ({ page }) => {
    const suggestionReportPage = new SuggestionReportPage(page);

    await suggestionReportPage.clickOnCreateSuggestionOrReportButton();

    await suggestionReportPage.enterNameAndSurname(userFullName);
    await suggestionReportPage.enterEmail(uniqueEmail);
    await suggestionReportPage.enterComment(suggestionAndReportData.suggestion.message);
    await suggestionReportPage.selectCheckboxByIndex(2);

    await suggestionReportPage.clickOnSubmitSuggestionOrReportButton();

    await suggestionReportPage.checkIsSuggestionOrReportSentWithoutError();
  });
});