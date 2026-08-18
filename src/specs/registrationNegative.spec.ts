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
		await expect(registrationForm.nameInvalid).toBeVisible();
		await expect(registrationForm.nameCharacters).toBeVisible();
	});

	test('Null First Name is entered', async ({ page }) => {
		await registrationForm.nameField.fillAndBlurAndClear('1');
		await expect(registrationForm.nameRequired).toBeVisible();
	});

	test('Invalid Last Name is entered', async ({ page }) => {
		await registrationForm.lastNameField.fillAndBlur('1');
		await expect(registrationForm.lastNameInvalid).toBeVisible();
		await expect(registrationForm.lastNameCharacters).toBeVisible();
	});

	test('Null Last Name is entered', async ({ page }) => {
		await registrationForm.lastNameField.fillAndBlurAndClear('1');
		await expect(registrationForm.lastNameRequired).toBeVisible();
	});

	test('Invalid Email is entered', async ({ page }) => {
		await registrationForm.emailField.fillAndBlur('1');
		await expect(registrationForm.emailIncorrect).toBeVisible();
	});

	test('Null Email is entered', async ({ page }) => {
		await registrationForm.emailField.fillAndBlurAndClear('1');
		await expect(registrationForm.emailRequired).toBeVisible();
	});

	test('Invalid Password is entered', async ({ page }) => {
		await registrationForm.passwordField.fillAndBlur('1');
		await expect(registrationForm.passwordCharacters).toBeVisible();
	});

	test('Null Password is entered', async ({ page }) => {
		await registrationForm.passwordField.fillAndBlurAndClear('1');
		await expect(registrationForm.passwordRequired).toBeVisible();
	});

	test('Invalid Password is re-entered', async ({ page }) => {
		await registrationForm.repeatPasswordField.fillAndBlur('1');
		await expect(registrationForm.passwordCharacters).toBeVisible();
	});

	test('Confirm Password validation', async ({ page }) => {
		await registrationForm.passwordField.fill('Test1234');
		await registrationForm.repeatPasswordField.fillAndBlur('Test12345');
		await expect(registrationForm.passwordMatch).toBeVisible();
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
