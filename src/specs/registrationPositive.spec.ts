import { test, expect } from '@playwright/test';
import { Credentials } from '../page-objects/credentials.page';
import { RegistrationForm } from '../page-objects/registrationForm.page';

const credentials = new Credentials();

test.describe('Registration positive tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveURL('/');
	});

	test('User is registered sucessfully', async ({ page }) => {
		const registrationForm = new RegistrationForm(page);
		await registrationForm.signUpButton.click();
		await expect(registrationForm.registrationModal).toBeVisible();
		await registrationForm.nameField.fill(credentials.firstName);
		await registrationForm.lastNameField.fill(credentials.lastName);
		await registrationForm.emailField.fill(credentials.userEmail);
		await registrationForm.passwordField.fill(credentials.userPassword);
		await registrationForm.repeatPasswordField.fill(credentials.userPassword);
		await registrationForm.registerButton.click();
		await expect(page).toHaveURL(`/` + `panel/garage`);
	});
});
