import type { Page } from '@playwright/test';
import BaseElement from './BaseElement';

export default class extends BaseElement {
	constructor(page: Page, selector: string) {
		super(page, selector);
	}

	async click(): Promise<void> {
		await this.element.click();
	}
}
