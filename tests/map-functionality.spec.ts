import { test } from '@playwright/test';
import BasePage from '../pageObjects/BasePage';
import MapPage from '../pageObjects/MapPage';

test.describe('Map Functionality', () => {
  let basePage: any;

  test.beforeAll(async ({ }) => {
  }); 

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.goto('/#/categories');
  });

  test('Should be able to search current location on map', async ({ page }) => {
    const mapPage = new MapPage(page);

    //go to some location that can click on current location button to redirect on preconfigured location
    await mapPage.goToSearchedLocation('Sultan Ahmedova');

    await mapPage.searchCurrentLocation();

    await mapPage.validateLocationMarkerIsVisible();
  });

  test('Should be able to search place on map', async ({ page }) => {
    const mapPage = new MapPage(page);

    await mapPage.searchAndOpenPlace('Look');

    await mapPage.validatePlaceIsVisible('Look');
  });

  test('Should be able to search street on map', async ({ page }) => {
    const mapPage = new MapPage(page);

    await mapPage.searchAndOpenStreet('14. maja 92');

    await mapPage.validateStreetIsVisible('14. maja 92');
  });

  test('Should be able to zoom in on map', async ({ page }) => {
    const mapPage = new MapPage(page);

    await mapPage.zoomInUntilButtonUnclickable();
  });

  test('Should be able to zoom out on map', async ({ page }) => {
    const mapPage = new MapPage(page);

    await mapPage.zoomOutUntilButtonUnclickable();
  });


});

 