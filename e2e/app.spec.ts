import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should display the main heading', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Time to Build' })).toBeVisible()
  })

  test('should display the coming soon panel', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Coming Soon' })).toBeVisible()
  })

  test('should increment counter when button is clicked', async ({ page }) => {
    await page.goto('/')

    const button = page.getByRole('button', { name: /Learn More/i })

    await expect(button).toHaveText('Learn More (0)')

    await button.click()
    await expect(button).toHaveText('Learn More (1)')

    await button.click()
    await expect(button).toHaveText('Learn More (2)')
  })
})
