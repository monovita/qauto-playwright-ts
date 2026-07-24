import { test, expect } from '@playwright/test';

test.describe('API -- Add car positive and negative tests', () => {
	test('Car is added API test', async ({ request }) => {
		const newCar = await request.post(`/api/cars`, {
			data: {
				carBrandId: 4,
				carModelId: 17,
				mileage: 123,
			},
		});
		expect(newCar.ok()).toBeTruthy();

		const cars = await request.get(`/api/cars`);
		expect(cars.ok()).toBeTruthy();
		const carsResponse = await cars.json();
		expect(carsResponse.data).toContainEqual(
			expect.objectContaining({
				carBrandId: 4,
				carModelId: 17,
				mileage: 123,
			}),
		);
	});

	test('Add Car - Mileage is null API test', async ({ request }) => {
		const newCar = await request.post(`/api/cars`, {
			data: {
				carBrandId: 4,
				carModelId: 17,
			},
		});
		expect(newCar.status()).toBe(400);
		const body = await newCar.json();
		expect(body.message).toContain('Mileage is required');
	});

	test('Add Car - Mileage > 999999 API Test', async ({ request }) => {
		const newCar = await request.post(`/api/cars`, {
			data: {
				carBrandId: 4,
				carModelId: 17,
				mileage: 9999999,
			},
		});
		expect(newCar.status()).toBe(400);
		const body = await newCar.json();
		expect(body.message).toContain('Mileage has to be from 0 to 999999');
	});
});
