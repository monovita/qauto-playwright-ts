import { test, expect } from '@playwright/test';

test.describe('Get instruction', () => {
    test('Get all instructions for Porsche Cayenne', async ({ request }) => {
        const instruction = await request.get(`/api/instructions`, {
            data: {
                carBrandId: 4,
                carModelId: 17,
                page: 1,
            },
        });
        expect(instruction.ok()).toBeTruthy();
    });
});