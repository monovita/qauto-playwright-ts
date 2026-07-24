import { expect } from '@playwright/test';
import { GaragePage } from '../page-objects/garage.page';
import { FuelExpenses } from '../page-objects/fuelExpenses.page';
import { test } from '../fixtures/userGaragePage';

test.describe('Add car and fuel positive tests', () => {
	test('Car is added', async ({ page, innerFixtureAddCar }) => {
		await expect(page.locator(`[class="car_name h2"]`).last()).toContainText(`Porsche Cayenne`);
	});

	test('Fuel expense is added', async ({ page, innerFixtureAddFuel }) => {
		const fuelExpenses = new FuelExpenses(page);
		const addedFuel = fuelExpenses.expensesTable.first();
		await expect(addedFuel).toContainText('150');
		await expect(addedFuel).toContainText('100');
		await expect(addedFuel).toContainText('150000');
	});

	test('Delete all cars', async ({ page, deleteAllCars }) => {
		const garagePage = new GaragePage(page);
		await expect(garagePage.editCarButton).toBeHidden();
	});
});
