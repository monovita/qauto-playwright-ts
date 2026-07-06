import type { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

const url = '';

export class LogInForm extends BasePage {
	constructor(page: Page) {
		super(page, url);
	}

	get logIn(): Locator {
		return this._page.locator(`[class="btn btn-outline-white header_signin"]`);
	}

	get logInModal(): Locator {
		return this._page.locator(`[class="modal-title"]`);
	}

	get emailField(): Locator {
		return this._page.locator(`[id="signinEmail"]`);
	}

	get passwordField(): Locator {
		return this._page.locator(`[id="signinPassword"]`);
	}

	get loginButton(): Locator {
		return this._page.locator(`[class="btn btn-primary"]`);
	}

	get closeLogIn(): Locator {
		return this._page.locator(`[class="close"]`);
	}

	async userLogin(page: Page, username: string, password: string): Promise<void> {
		await this.logIn.click();
		await this.emailField.fill(username);
		await this.passwordField.fill(password);
		await this.loginButton.click();
	}
}
