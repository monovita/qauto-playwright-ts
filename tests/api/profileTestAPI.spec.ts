import { test, expect } from '@playwright/test';

test.describe('API -- Profile page', () => {
	test('User Profile is modified', async ({ page }) => {
		await page.route('**/api/users/profile', async (route) => {
			await route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify({
					status: 'ok',
					data: {
						name: 'JOANNA',
						lastName: 'DOE',
					},
				}),
			});
		});

		await page.goto('/panel/profile');

		await expect(page.getByText('JOANNA')).toBeVisible();
		await expect(page.getByText('DOE')).toBeVisible();
	});
});
