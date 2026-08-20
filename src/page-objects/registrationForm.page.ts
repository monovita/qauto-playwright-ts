import type { Locator, Page } from '@playwright/test';
import Button from '../helpers/Button';
import Input from '../helpers/Input';
import BasePage from './base-page.page';

export class RegistrationForm extends BasePage {
	constructor(page: Page) {
		super(page, '');
	}

	get signUpButton(): Button {
		return new Button(this._page, `[class="hero-descriptor_btn btn btn-primary"]`);
	}

	get registrationModal(): Locator {
		return this._page.locator(`[class="modal-title"]`);
	}

	get nameField(): Input {
		return new Input(this._page, `[id="signupName"]`);
	}

	get lastNameField(): Input {
		return new Input(this._page, `[id="signupLastName"]`);
	}

	get emailField(): Input {
		return new Input(this._page, `[id="signupEmail"]`);
	}

	get passwordField(): Input {
		return new Input(this._page, `[id="signupPassword"]`);
	}

	get repeatPasswordField(): Input {
		return new Input(this._page, `[id="signupRepeatPassword"]`);
	}

	get registerButton(): Locator {
		return this._page.locator(`[class="btn btn-primary"]`);
	}

	get closeSignUp(): Button {
		return new Button(this._page, `[class="close"]`);
	}

	get nameInvalid(): Locator {
		return this._page.getByText('Name is invalid');
	}

	get nameCharacters(): Locator {
		return this._page.getByText('Name has to be from 2 to 20 characters long');
	}

	get nameRequired(): Locator {
		return this._page.getByText('Name required');
	}

	get lastNameInvalid(): Locator {
		return this._page.getByText('Last name is invalid');
	}

	get lastNameCharacters(): Locator {
		return this._page.getByText('Last name has to be from 2 to 20 characters long');
	}

	get lastNameRequired(): Locator {
		return this._page.getByText('Last name required');
	}

	get emailIncorrect(): Locator {
		return this._page.getByText('Email is incorrect');
	}

	get emailRequired(): Locator {
		return this._page.getByText('Email required');
	}

	get passwordCharacters(): Locator {
		return this._page.getByText(
			'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
		);
	}

	get passwordRequired(): Locator {
		return this._page.getByText('Password required');
	}

	get passwordMatch(): Locator {
		return this._page.getByText('Passwords do not match');
	}
}
