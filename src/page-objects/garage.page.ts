import type { Locator, Page } from '@playwright/test';
import Input from '../helpers/Input';
import BasePage from './base-page.page';

export class GaragePage extends BasePage {
	constructor(page: Page) {
		super(page, '');
	}

	get garagePageNav(): Locator {
		return this._page.locator(`[href="/panel/garage"]`);
	}

	get addCarButton(): Locator {
		return this._page.locator(`[class="btn btn-primary"]`).filter({ hasText: 'Add car' });
	}

	get addCarModal(): Locator {
		return this._page.locator(`[class="modal-header"]`);
	}

	get carBrandDropdown(): Locator {
		return this._page.locator(`[id="addCarBrand"]`);
	}

	get carModelDropdown(): Locator {
		return this._page.locator(`[id="addCarModel"]`);
	}

	get mileageField(): Input {
		return new Input(this._page, `[id="addCarMileage"]`);
	}

	get addButton(): Locator {
		return this._page.locator(`[type="button"]`).filter({ hasText: 'Add' });
	}

	get editCarButton(): Locator {
		return this._page.locator(`[class="icon icon-edit"]`);
	}

	get editModal(): Locator {
		return this._page.locator(`[class="modal-title"]`);
	}

	get removeCarButton(): Locator {
		return this._page.locator(`[class="btn btn-outline-danger"]`);
	}

	get confirmRemoveModal(): Locator {
		return this._page.locator(`[class="modal-title"]`).filter({ hasText: 'Remove Car' });
	}

	get confirmRemoveButton(): Locator {
		return this._page.locator(`[class="btn btn-danger"]`);
	}

	get carItem(): Locator {
		return this._page.locator(`[class="car_name h2"]`);
	}
}
