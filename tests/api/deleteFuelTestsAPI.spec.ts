import { test, expect } from '@playwright/test';

test.describe('API -- Delete fuel positive test', () => {
    test('Fuel is deleted API test', async ({ request }) => {
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
    
        const newFuel = await request.post(`/api/expenses/`, {
            data: {
                "carId": carId,
                "reportedAt": "2026-07-20",
                "mileage": 127,
                "liters": 11,
                "totalCost": 110,
                "forceMileage": false
            },
        });
        expect(newFuel.ok()).toBeTruthy();
        const newFuelResponse = await newFuel.json();
        const fuelId = newFuelResponse.data.id; 
        console.log(fuelId);

        const deletedFuel = await request.delete(`/api/expenses/`+ fuelId);
        expect(deletedFuel.ok()).toBeTruthy();
    });
});