import { test, expect } from '@playwright/test';
import { LogInForm } from '../helpers/Page Objects/logInForm';

test.describe('LogIn positive tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveURL('/');
	});

	test('User is logedIn with valid creadentials*', async ({ page }) => {
		const logInForm = new LogInForm(page);
		await logInForm.userLogin(page, process.env.USERNAME ?? '', process.env.PASSWORD ?? '');
		await expect(page).toHaveURL(`/` + `panel/garage`);
	});
});
