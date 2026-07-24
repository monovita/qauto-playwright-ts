import type { Locator, Page } from '@playwright/test';
import BasePage from './base-page.page';
import Button from '../helpers/Button';
import Input from '../helpers/Input';

export class FuelExpenses extends BasePage {
	constructor(page: Page) {
		super(page, '');
	}

	get fuelPageNav(): Locator {
		return this._page.locator(`[routerlink="expenses"]`);
	}

	get carSelectDropdown(): Locator {
		return this._page.locator(`[id="carSelectDropdown"]`);
	}

	get carItem(): Locator {
		return this._page.locator(`[class="dropdown-item btn btn-link car-select-dropdown_item"]:not([disabled])`);
	}

	get addExpenseButton(): Button {
		return new Button(this._page, `[class="btn btn-primary"]`);
	}

	get addExpenseModal(): Locator {
		return this._page.locator(`[class="modal-header"]`);
	}

	get vehicleDropDown(): Locator {
		return this._page.locator(`[id="addExpenseCar"]`);
	}

	get reportDateField(): Input {
		return new Input(this._page, `[id="addExpenseDate"]`);
	}

	get mileageField(): Input {
		return new Input(this._page, `[id="addExpenseMileage"]`);
	}

	get numberOfLitersField(): Input {
		return new Input(this._page, `[id="addExpenseLiters"]`);
	}

	get totalCostField(): Input {
		return new Input(this._page, `[id="addExpenseTotalCost"]`);
	}

	get expensesTable(): Locator {
		return this._page.locator(`[class="table expenses_table"]`);
	}

	get addButton(): Locator {
		return this._page.locator(`[type="button"]`).filter({ hasText: 'Add' });
	}
}
