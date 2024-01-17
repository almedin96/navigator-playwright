import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

enum PlaceCategory {
    Atrakcije = '8',
    Biznis = '12',
    Kafa = '5',
}

class PlacePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Private getter methods for selectors
  private get createPlaceButton() {
    return this.page.locator(
      'a[href="#/create-place"]'
    );
  }

  private get placeNameInputt() {
    return this.page.locator(
        '//input[@name="poi[name]"]'
    );
  }

  private get cityInput() {
    return this.page.locator(
      '//input[@name="poi[city_name]"]'
    );
  }

  private get zipCodeInput() {
    return this.page.locator(
      '//input[@name="poi[zip_code]"]'
    );
  }

  private get mobileInput() {
    return this.page.locator(
      '//input[@name="poi[mobile_phone]"]'
    );
  }
  
  private get createPlaceButtonOnModal() {
    return this.page.locator(
      '//button[@class="btn btn-success"]'
    );
  }

  private get addCategoryButton() {
    return this.page.locator(
      '//button[@class="ember-view btn btn-small"]'
    );
  }

  private get chooseFilesButton() {
    return this.page.locator("//input[@id='fileToUpload']");
  }

  // Methods
  async clickOnCreatePlaceButton() {
    await this.createPlaceButton.click();
  }

  async enterPlaceName(nameAndSurname: string) {
    await this.placeNameInputt.fill(nameAndSurname);
  }

  async enterCity(city: string) {
    await this.cityInput.fill(city);
  }

  async enterZipCode(zipCode: string) {
    await this.zipCodeInput.fill(zipCode);
  }

  async enterMobileNumber(zipCode: any) {
    await this.mobileInput.fill(zipCode);
  }

  async addCategory(optionValue: any) {
    await this.addCategoryButton.click();

    const categoryDropdown = 'select';

    await this.page.selectOption(categoryDropdown, optionValue);
  }

  async checkIsPlaceCreatedWithoutError() {
    let isErrorShown;
    const errorMessage = '//div[@class="nav-lefthand-form place-form"]//div[@class="alert alert-error"]';

    try {
        await this.page.waitForSelector(errorMessage, { timeout: 10000 });
    
        isErrorShown = await this.page.locator(errorMessage).isVisible();
      } catch (error) {
        console.error('An error occurred:', error);
      }
      await expect(isErrorShown).toBeFalsy();
    }

  async clickOnCreatePlaceButtonOnModal() {
    await this.createPlaceButtonOnModal.click();
    await this.createPlaceButtonOnModal.click();
  }

  async uploadFile(filePath: string) {
    await this.chooseFilesButton.setInputFiles(filePath);
  }

}

export default PlacePage;
export { PlaceCategory };
