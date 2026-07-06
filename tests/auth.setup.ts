import { test as setup, expect } from '@playwright/test';
import { LogInForm } from '../helpers/Page Objects/logInForm';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
	const logInForm = new LogInForm(page);

	const username = process.env.USERNAME ?? '';
	const password = process.env.PASSWORD ?? '';

	await page.goto('/');
	await logInForm.userLogin(page, username, password);
	await expect(page).toHaveURL(`/` + `panel/garage`);
	await page.context().storageState({ path: authFile });
});