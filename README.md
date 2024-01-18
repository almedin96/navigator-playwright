# Navigator

## Test Automation framework for Navigator written in Playwright

This custom made automation framework uses [Playwright](https://playwright.dev/) and framework called [Jest](https://jestjs.io/).


### Getting started
These instructions will guide you through setting up project locally. By following these steps, you'll have a local development environment running, ready for you to contribute to the project.


### Design pattern

- [Page Object Model](https://www.guru99.com/page-object-model-pom-page-factory-in-selenium-ultimate-guide.html)


### Reporter

- [HTML reporter](https://playwright.dev/docs/test-reporters#html-reporter)


### System-requirements

- Node.js 16+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.


### Pre-requirements
You need to have Node and Yarn package manager installed on your computer.

You can check if they're installed by running the following commands:
node --version
yarn --version


## Installation
Follow these steps to get your development environment running:

Clone the project
Install dependencies: yarn install
Install playwright: yarn add -D playwright


## Set environment variables

##### For MAC users:

- export ENV_NAME=navigator

##### For Windows users:

- set ENV_NAME=navigator


## How to run tests

There are three scripts and these scripts can be found inside package.json file.

- ENV_NAME="navigator" yarn test:regression - this command will run all tests specs in headed mode 
- ENV_NAME="navigator" yarn test:smoke - this command will run all tests specs, but only tests with tag "@smoke"
- ENV_NAME="navigator" yarn test:regression-pipeline - this command will run tests in headless mode (command used for pipeline in playwright.yml file)


### How to open report

Once the test execution is done report will be generated in .html format.

If tests pass, run "yarn playwright show-report" to open report in browser. Failed tests have attachments.

If tests fail, the report will be opened automatically in browser.


### How to write tests

If you want to write a new test, you need to create 2 different files in 2 different folders. Let's say we are writing tests for Login feature.

First of all, you have to create a new file in pageObjects folder, called: LoginPage.ts. Once that file is created, you need to create a new class called LoginPage which will extend BasePage class and create all methods that will be used later for tests inside this file.

Once the page file is created, you need to create a new file in tests folder, called: login.spec.ts. This is where all tests should be created.

Before writing tests, please check existing tests and how they are written.