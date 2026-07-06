import type { Page } from '@playwright/test';
import BaseElement from './BaseElement';

export default class extends BaseElement {
	constructor(page: Page, selector: string) {
		super(page, selector);
	}

	async fill(text: string): Promise<void> {
		await this.element.fill(text);
	}

	async blur(): Promise<void> {
		await this.element.blur();
	}

	async fillAndBlur(value: string): Promise<void> {
		await this.element.fill(value);
		await this.element.blur();
	}

	async clear(): Promise<void> {
		await this.element.clear();
	}

	async click(): Promise<void> {
		await this.element.click();
	}

	async fillAndBlurAndClear(value: string): Promise<void> {
		await this.element.fill(value);
		await this.element.blur();
		await this.element.clear();
	}
}
