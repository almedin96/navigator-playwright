// playwright.config.regression.ts

import { PlaywrightTestConfig } from '@playwright/test';
import baseConfig from './playwright.config'; // import your base configuration

const regressionConfig: PlaywrightTestConfig = {
  ...baseConfig,
  testMatch: [
    'tests/map-functionality.spec.ts'
  ], // specify the test files
  workers: 1,
};

export default regressionConfig;
