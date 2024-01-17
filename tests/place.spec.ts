import { test } from '@playwright/test';
import BasePage from '../pageObjects/BasePage';
import { generateUniqueString, getPathOfFirstFileFromDataImagesFolder, readDataFromJsonFile } from '../utils/utils';
import PlacePage, { PlaceCategory } from '../pageObjects/placePage';

test.describe('Place', () => {
  let basePage: any;
  let placeData: any;
  let photoPath: any;

  test.beforeAll(async ({ }) => {
    placeData = await readDataFromJsonFile(
        './data/place/placeData.json',
    );
    photoPath = await getPathOfFirstFileFromDataImagesFolder();
  }); 

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.goto('/#/categories');
  });

  test('Should be able to create new place @smoke', async ({ page }) => {
    const placePage = new PlacePage(page);

    placeData.placeDetails.name = `place-${await generateUniqueString(7)}`;

    await placePage.clickOnCreatePlaceButton();

    await placePage.enterPlaceName(placeData.placeDetails.name);
    await placePage.enterCity(placeData.placeDetails.city);
    await placePage.enterZipCode(placeData.placeDetails.zipCode);

    await placePage.addCategory(PlaceCategory.Atrakcije);

    await placePage.enterMobileNumber(placeData.phone.mobile);

    await placePage.uploadFile(photoPath)

    await placePage.clickOnCreatePlaceButtonOnModal();

    await placePage.checkIsPlaceCreatedWithoutError();
  });
});
