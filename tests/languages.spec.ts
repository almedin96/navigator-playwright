import { test } from '@playwright/test';
import BasePage from '../pageObjects/BasePage';
import LanguagesPage from '../pageObjects/LanguagesPage';

test.describe('Languages', () => {
  let basePage: any;
  const englishSidebarItems = [
    'SARAJEVO THEATRES',
    'NEXTBIKE',
    'SMOKE-FREE PUBLIC PLACES',
    'ACCOMMODATION',
    'SHOPPING',
  ];

  const bosnianSidebarItems = [
    'SARAJEVSKA POZORIŠTA',
    'NEXTBIKE',
    'SMOKE-FREE PUBLIC PLACES',
    'SMJEŠTAJ',
    'KUPOVINA',
  ];

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.goto('/#/categories');
  });

  test('Should be able to change language to English', async ({ page }) => {
    const languagesPage = new LanguagesPage(page);

    await languagesPage.selectLanguage('EN');

    await languagesPage.checkSidebarItems(englishSidebarItems);
  });

  test('Should be able to change language to Bosnian', async ({ page }) => {
    const languagesPage = new LanguagesPage(page);

    await languagesPage.selectLanguage('BS');

    await languagesPage.checkSidebarItems(bosnianSidebarItems);
  });
});
