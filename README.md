# Playwright Testing Project for qauto.forstudy.space

Hello! This is my testing project for [qauto.forstudy.space](https://qauto.forstudy.space/panel) using Playwright and JavaScript. I developed this project as part of my learning journey in test automation.

The workflow, defined in the `.github/workflows/playwright.yml` file, executes Playwright tests on specified environments and browsers. After the test execution, Playwright generates a comprehensive report detailing both passed and failed scenarios. The GitHub Actions workflow is set up to automatically publish this Playwright test report to GitHub Pages.

This integration ensures that the latest Playwright test results are readily available, providing transparency and visibility into the testing process.

The generated report, showcasing insights into the results of the Playwright tests, is accessible at [monovita.github.io/qauto-playwright-ts](http://monovita.github.io/qauto-playwright-ts).

## Technologies Used

- **Playwright**: A versatile library tailored for browser automation with a focus on reliability.
- **TypeScript**: A strongly typed, open-source programming language.
- **npm**: The package manager for JavaScript.

## Project Structure

The project adopts a structured approach to maintainability and scalability. Here's an overview of the project's directory structure:

```bash
qauto-playwright-ts
├── Jenkinsfile
├── README.md
├── dockerfile
├── eslint.config.mts
├── helpers
│   ├── Elements
│   │   ├── BaseElement.ts
│   │   ├── Button.ts
│   │   └── Input.ts
│   ├── Page Objects
│   │   ├── BasePage.ts
│   │   ├── credentials.ts
│   │   ├── fuelExpensesPage.ts
│   │   ├── garagePage.ts
│   │   ├── logInForm.ts
│   │   └── registrationForm.ts
│   └── fixtures
│       └── userGaragePage.ts
├── package-lock.json
├── package.json
├── playwright
├── playwright-report
├── playwright.config.ts
├── test-results
├── test-results.json
├── tests
│   ├── addCarPositiveTests.spec.ts
│   ├── api
│   │   ├── addCarTestsAPI.spec.ts
│   │   └── profileTestAPI.spec.ts
│   ├── auth.setup.ts
│   ├── logInNegativeTests.spec.ts
│   ├── logInPositiveTests.spec.ts
│   ├── registrationNegativeTests.spec.ts
│   └── registrationPositiveTests.spec.ts
├── tests.md
└── tsconfig.json
```

## Tests

The tests, located in `tests/`, aim to verify the complete functionality of the application. They cover scenarios such as user authentication, navigation, and interactions with different pages.

Check all scenarios [here](/tests.md).

## Page Objects and Componentization

The project embraces the Page Object pattern to encapsulate interactions with various pages of the qauto.forstudy.space website. Page objects are organized under the `helpers/Pages Objects/` directory, making the test code more readable, maintainable, and less prone to duplication.

Example of a Page Object (`registrationForm.ts`):

```typescript
export class RegistrationForm extends BasePage {
	// Implementation of page interactions
}
```

The project also incorporates a `helpers/Elements/` directory to house reusable components like `Input.ts`, promoting a modular and efficient approach to building and maintaining tests.

## Fixtures and Data

Data used in tests is organized under the `helpers/fixtures/` directory. This includes a `userGaragePage.ts` file for defining data models.

## State Maintenance

To maintain the logged-in state of the website and access protected pages, the framework utilizes a `setup()` function located in `tests/auth.setup.ts`. This function stores the authentication credentials in a secure location, allowing subsequent tests to seamlessly navigate through the application without requiring repetitive logins.

## Test Execution

1. Navigate to the project directory:

   ```bash
   cd qauto-playwright-ts
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

1. Run the tests:

   ```bash
   npm run pw:open:prod
   ```

## HTML reporter

HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.

```bash
npx playwright test --reporter=html
```

By default, HTML report is opened automatically if some of the tests failed. You can control this behavior via the open property in the Playwright config or the `PW_TEST_HTML_REPORT_OPEN` environmental variable. The possible values for that property are `always`, `never` and `on-failure` (default).

## Trace viewer

You can open the saved trace using the Playwright CLI or in your browser on [trace.playwright.dev](trace.playwright.dev). Make sure to add the full path to where your trace.zip file is located. This should include the full path to your trace.zip file.

```bash
npx playwright show-trace path/to/trace.zip
```

## Playwright Configuration

The `playwright.config.ts` file configures the Playwright test environment. It specifies settings such as browsers to use, context options, and additional configurations needed for test execution.

## Contribution

I'm learning, so if you find anything interesting or peculiar, I'd love to discuss! Feel free to open issues or propose improvements.
