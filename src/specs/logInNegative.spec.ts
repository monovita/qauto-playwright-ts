import { test, expect } from '@playwright/test';
import { LogInForm } from '../page-objects/logInForm.page';

test.describe('LogIn negative tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveURL('/');
	});

	test('User is not logedIn with invalid creadentials', async ({ page }) => {
		const logInForm = new LogInForm(page);
		await logInForm.userLogin(page, 'test@email.com', process.env.PASSWORD ?? '');
		await expect(page.getByText('Wrong email or password')).toBeVisible();
	});
});
