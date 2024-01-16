import { Page } from 'playwright';
import config from '../configs/config';

class BasePage {
    protected page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async goto(path?: string) {
      let url;
      if (path) {
        url = config.baseUrl + path;
      } else {
        url = config.baseUrl;
      }
      await this.page.goto(url);
    }
  }
  
  export default BasePage;