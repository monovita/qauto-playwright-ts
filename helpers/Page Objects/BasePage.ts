import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export default class {
	protected readonly _page: Page;
	protected readonly _url: string;

	constructor(page: Page, url: string) {
		this._page = page;
		this._url = url;
	}

	async navigate(): Promise<void> {
		await this._page.goto(this._url);
	}

	async containUrlCheck(expectedUrl: string): Promise<void> {
		expect(this._page.url()).toContain(expectedUrl);
	}
}