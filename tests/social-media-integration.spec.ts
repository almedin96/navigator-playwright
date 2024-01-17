import { test } from '@playwright/test';
import BasePage from '../pageObjects/BasePage';
import SocialMediaIntegrationPage from '../pageObjects/socialMediaIntegrationPage';

test.describe('Social media integrations', () => {
  let basePage: any;

  test.beforeAll(async ({ }) => {
  }); 

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.goto('/#/categories');
  });

  test('Should be able to open Navigator Facebook page', async ({ page }) => {
    const socialMediaIntegrationPage = new SocialMediaIntegrationPage(page);

    let expectedFacebookLink = 'https://www.facebook.com/Navigator.ba';

    await socialMediaIntegrationPage.openFacebookIntegration(expectedFacebookLink);
  });

  test('Should be able to open Navigator Twitter page', async ({ page }) => {
    const socialMediaIntegrationPage = new SocialMediaIntegrationPage(page);

    let expectedTwitterLink = 'https://twitter.com/navigatorba';

    await socialMediaIntegrationPage.openTwitterIntegration(expectedTwitterLink);
  });

  test('Should be able to open Google Workspace Updates', async ({ page }) => {
    const socialMediaIntegrationPage = new SocialMediaIntegrationPage(page);

    let expectedGoogleLink = 'https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html';

    await socialMediaIntegrationPage.openGoogleIntegration(expectedGoogleLink);
  });
});
