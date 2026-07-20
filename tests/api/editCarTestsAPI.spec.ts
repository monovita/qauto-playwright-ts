import { test, expect } from '@playwright/test';

test.describe('API -- Edit car positive test', () => {
    test('Car is edited API test', async ({ request }) => {
        const newCar = await request.post(`/api/cars`, {
            data: {
                carBrandId: 4,
                carModelId: 17,
                mileage: 125,
            },
        });
        expect(newCar.ok()).toBeTruthy();
        const newCarResponse = await newCar.json();
        const carId = newCarResponse.data.id; 
        console.log(carId);
    
        const editedCar = await request.put(`/api/cars/` + carId, {
            data: {
                carBrandId: 4,
                carModelId: 17,
                mileage: 321,
            },
        });
        expect(editedCar.ok()).toBeTruthy();
    });
});