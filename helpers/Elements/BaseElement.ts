import { expect, type Page, type Locator } from '@playwright/test';

export default class {
	protected readonly element: Locator;

	constructor(page: Page, selector: string, text?: string) {
		this.element = text ? page.getByText(text) : page.locator(selector);
	}

	async checkText(expectedText: string): Promise<void> {
		await expect(this.element).toContainText(expectedText);
	}
}