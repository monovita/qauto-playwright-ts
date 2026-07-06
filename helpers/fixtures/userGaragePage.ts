import { test as base, expect } from '@playwright/test';
import { GaragePage } from '../Page Objects/garagePage';
import { FuelExpenses } from '../Page Objects/fuelExpensesPage';

type UserGarageFixtures = {
	userGaragePage: GaragePage;
	innerFixtureAddCar: void;
	innerFixtureAddFuel: void;
	deleteAllCars: void;
};

export const test = base.extend<UserGarageFixtures>({
	userGaragePage: async ({ page }, use) => {
		const garagePage = new GaragePage(page);
		await page.goto(`panel/garage`);
		await expect(page).toHaveURL(`panel/garage`);
		await use(garagePage);
	},

	innerFixtureAddCar: async ({ page, userGaragePage }, use) => {
		const garagePage = new GaragePage(page);
		await garagePage.addCarButton.click();
		await expect(garagePage.addCarModal).toBeVisible();
		await garagePage.carBrandDropdown.selectOption(`Porsche`);
		await garagePage.carModelDropdown.selectOption(`Cayenne`);
		await garagePage.mileageField.fill('10');
		await garagePage.addButton.click();
		await use();
	},

	innerFixtureAddFuel: async ({ page, userGaragePage, innerFixtureAddCar }, use) => {
		const fuelExpenses = new FuelExpenses(page);
		await fuelExpenses.fuelPageNav.click();
		await fuelExpenses.fuelPageNav.click();
		await expect(page).toHaveURL(`/` + `panel/expenses`);
		// await fuelExpenses.carSelectDropdown.click();
		// await fuelExpenses.carItem.getByLabel(`Porsche Cayenne`).last().click();
		await fuelExpenses.addExpenseButton.click();
		await fuelExpenses.mileageField.click();
		await fuelExpenses.mileageField.fill(`150`);
		await fuelExpenses.numberOfLitersField.fill(`100`);
		await fuelExpenses.totalCostField.fill(`150000`);
		await fuelExpenses.addButton.click();
		await use();
	},

	deleteAllCars: async ({ page, userGaragePage }, use) => {
		const garagePage = new GaragePage(page);
		let count = await garagePage.editCarButton.count();

		while (count > 0) {
			await garagePage.editCarButton.first().click();
			await expect(garagePage.editModal).toBeVisible();
			await garagePage.removeCarButton.click();
			await expect(garagePage.confirmRemoveModal).toBeVisible();
			await garagePage.confirmRemoveButton.click();
			await expect(garagePage.confirmRemoveModal).toBeHidden();

			count = await garagePage.editCarButton.count();
		}

		await use();
	},
});
