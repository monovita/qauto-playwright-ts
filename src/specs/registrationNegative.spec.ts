import { test, expect } from '@playwright/test';
import { Credentials } from '../page-objects/credentials.page';
import { RegistrationForm } from '../page-objects/registrationForm.page';

const credentials = new Credentials();

test.describe('Registration negative tests', () => {
	let registrationForm: RegistrationForm;

	test.beforeEach(async ({ page }) => {
		registrationForm = new RegistrationForm(page);
		await page.goto('/');
		await expect(page).toHaveURL('/');
		await registrationForm.signUpButton.click();
		await expect(registrationForm.registrationModal).toBeVisible();
	});

	test('Invalid First Name is entered', async ({ page }) => {
		await registrationForm.nameField.fillAndBlur('1');
		await expect(page.getByText('Name is invalid')).toBeVisible();
		await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
	});

	test('Null First Name is entered', async ({ page }) => {
		await registrationForm.nameField.fillAndBlurAndClear('1');
		await expect(page.getByText('Name required')).toBeVisible();
	});

	test('Invalid Last Name is entered', async ({ page }) => {
		await registrationForm.lastNameField.fillAndBlur('1');
		await expect(page.getByText('Last name is invalid')).toBeVisible();
		await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
	});

	test('Null Last Name is entered', async ({ page }) => {
		await registrationForm.lastNameField.fillAndBlurAndClear('1');
		await expect(page.getByText('Last name required')).toBeVisible();
	});

	test('Invalid Email is entered', async ({ page }) => {
		await registrationForm.emailField.fillAndBlur('1');
		await expect(page.getByText('Email is incorrect')).toBeVisible();
	});

	test('Null Email is entered', async ({ page }) => {
		await registrationForm.emailField.fillAndBlurAndClear('1');
		await expect(page.getByText('Email required')).toBeVisible();
	});

	test('Invalid Password is entered', async ({ page }) => {
		await registrationForm.passwordField.fillAndBlur('1');
		await expect(
			page.getByText(
				'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
			),
		).toBeVisible();
	});

	test('Null Password is entered', async ({ page }) => {
		await registrationForm.passwordField.fillAndBlurAndClear('1');
		await expect(page.getByText('Password required')).toBeVisible();
	});

	test('Invalid Password is re-entered', async ({ page }) => {
		await registrationForm.repeatPasswordField.fillAndBlur('1');
		await expect(
			page.getByText(
				'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
			),
		).toBeVisible();
	});

	test('Confirm Password validation', async ({ page }) => {
		await registrationForm.passwordField.fill('Test1234');
		await registrationForm.repeatPasswordField.fillAndBlur('Test12345');
		await expect(page.getByText('Passwords do not match')).toBeVisible();
	});

	test('Registration button is disabled', async ({ page }) => {
		await registrationForm.nameField.fill(credentials.firstName);
		await registrationForm.lastNameField.fill(credentials.lastName);
		await registrationForm.emailField.fill(credentials.userEmail);
		await registrationForm.passwordField.fill(credentials.userPassword);
		await registrationForm.repeatPasswordField.fillAndBlurAndClear(credentials.userPassword);
		await expect(registrationForm.registerButton).toBeDisabled();
	});
});
