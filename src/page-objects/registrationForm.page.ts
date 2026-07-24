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
}
