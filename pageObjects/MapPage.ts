import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

class MapPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Private getter methods for selectors
  private get currentLocationButton() {
    return this.page.locator(
      "//div//a[@class='leaflet-control-focusonuser-button icon']",
    );
  }

  private get searchLocationInput() {
    return this.page.locator(
      "//input[@class='ember-view ember-text-field tt-query']",
    );
  }

  private get zoomInButton() {
    return this.page.locator(
      "//a[contains (., '+')]",
    );
  }

  private get zoomOutButton() {
    return this.page.locator(
      "//a[@title='Zoom out' and contains (., '-')]",
    );
  }

  // Methods
  private async clickOnCurrentLocationButton() {
    await this.currentLocationButton.click();
  }

  async searchCurrentLocation() {
    await this.clickOnCurrentLocationButton();
  }

  async validateLocationMarkerIsVisible() {
    const locationMarker = this.page.locator(
      "//img[@class='leaflet-marker-icon user-location-marker leaflet-zoom-animated leaflet-clickable']",
    );
    await expect(locationMarker).toBeVisible();
  }

  private async typeStreetOrPlace(locationName: string) {
    await this.searchLocationInput.fill(locationName);
  }

  private async clickOnSearchedResult(locationName: string) {
    const locationResult = this.page.locator(
        `(//span//div//p[contains (., '${locationName}')])[1]`
    );
    await locationResult.click();
  }

  async goToSearchedLocation(locationName: string) {
    await this.typeStreetOrPlace(locationName);
    await this.clickOnSearchedResult(locationName);
  }

  async searchAndOpenPlace(placeName: string) {
    await this.typeStreetOrPlace(placeName);
    await this.clickOnSearchedResult(placeName);
  }

  async searchAndOpenStreet(streetName: string) {
    await this.typeStreetOrPlace(streetName);
    await this.clickOnSearchedResult(streetName);
  }

  async validatePlaceIsVisible(placeName: string) {
    const place = this.page.locator(
        `//div[@class='name' and contains (., '${placeName}')]`,
    );
    await expect(place).toBeVisible();
  }

  async validateStreetIsVisible(streetName: string) {
    const street = this.page.locator(
        `//div[div[@class='name' and contains (., '${streetName}')]]//img`,
    );
    await expect(street).toBeVisible();
  }

  async zoomIn() {
    await this.zoomInButton.click();
  }

  async zoomInUntilButtonUnclickable() {
    const zoomInButtonDisabled = this.page.locator(
        `//a[@class='leaflet-control-zoom-in leaflet-disabled']`,
    );
    let disabledZoomInLocator = await zoomInButtonDisabled.isVisible();

    while (disabledZoomInLocator === false) {            
        await this.zoomIn();
        disabledZoomInLocator = await zoomInButtonDisabled.isVisible();
    }

    expect(disabledZoomInLocator).toBe(true);
  }

  async zoomOut() {
    await this.zoomOutButton.click();
  }

  async zoomOutUntilButtonUnclickable() {
    const zoomOutButtonDisabled = this.page.locator(
        `//a[@class='leaflet-control-zoom-out leaflet-disabled']`,
    );
    let disabledZoomOutLocator = await zoomOutButtonDisabled.isVisible();

    while (disabledZoomOutLocator === false) {            
        await this.zoomOut();
        disabledZoomOutLocator = await zoomOutButtonDisabled.isVisible();
    }

    expect(disabledZoomOutLocator).toBe(true);
  }
}

export default MapPage;
