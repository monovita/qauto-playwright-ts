import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const env: string | undefined = process.env.ENVIRONMENT;

dotenv.config({ path: `.env.${env}` });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [
		['html', { open: 'always' }], // OR 'on-failure'
		['list', { printSteps: true }],
		['json', { outputFile: 'test-results.json' }],
	],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		actionTimeout: 10 * 1000,
		/* Base URL to use in actions like `await page.goto('')`. */
		baseURL: process.env.BASE_URL,
		httpCredentials: {
			username: 'guest',
			password: 'welcome2qauto',
		},

		// Capture screenshot after each test failure.
		screenshot: 'only-on-failure', // Options include 'off', 'on' and 'only-on-failure'

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry', // Options include: 'off', 'on', 'retain-on-failure' and 'on-first-retry'

		// Record video only when retrying a test for the first time.
		video: 'on-first-retry', // Options include: 'off', 'on', 'retain-on-failure' and 'on-first-retry'
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'setup',
			testMatch: /auth\.setup\.ts/,
		},
		{
			name: 'login-tests',
			testMatch: [
				/logInPositiveTests\.spec\.ts/,
				/logInNegativeTests\.spec\.ts/,
				/registrationPositiveTests\.spec\.ts/,
				/registrationNegativeTests\.spec\.ts/,
			],
			use: {},
		},

		{
			name: 'chromium',
			testIgnore: [
				/logInPositiveTests\.spec\.ts/,
				/logInNegativeTests\.spec\.ts/,
				/registrationPositiveTests\.spec\.ts/,
				/registrationNegativeTests\.spec\.ts/,
			],
			use: {
				...devices['Desktop Chrome'],
				storageState: 'playwright/.auth/user.json',
			},
			dependencies: ['setup'],
		},

		// {
		//   name: 'firefox',
		//   use: { ...devices['Desktop Firefox'] },
		// },

		// {
		//   name: 'webkit',
		//   use: { ...devices['Desktop Safari'] },
		// },

		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 17'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   url: 'http://localhost:3000',
	//   reuseExistingServer: !process.env.CI,
	// },
	expect: {
		timeout: 10 * 1000,
	},

	timeout: 60 * 1000,
});