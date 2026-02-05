import { test, expect } from '@playwright/test'

test.describe('Scroll Sequence Animation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/')
  })

  test('hero text visible at 0% scroll', async ({ page }) => {
    // At the top of the page, hero content should be visible
    const openingContent = page.getByTestId('opening-content')
    await expect(openingContent).toBeVisible()

    // Check opacity is close to 1
    const opacity = await openingContent.evaluate((el) =>
      window.getComputedStyle(el).opacity
    )
    expect(parseFloat(opacity)).toBeGreaterThan(0.9)
  })

  test('hero text faded at 30% scroll', async ({ page }) => {
    // Scroll to approximately 30% of the scroll sequence container
    const scrollContainer = page.getByTestId('scroll-sequence-container')
    await scrollContainer.evaluate((el) => {
      const height = el.scrollHeight
      window.scrollTo(0, height * 0.3)
    })

    // Wait for animation to settle
    await page.waitForTimeout(500)

    // Hero content should be faded or hidden
    const openingContent = page.getByTestId('opening-content')
    const opacity = await openingContent.evaluate((el) =>
      window.getComputedStyle(el).opacity
    )
    expect(parseFloat(opacity)).toBeLessThan(0.5)
  })

  test('video scale ~1 at 30%, ~0.65 at 60%', async ({ page }) => {
    const videoContainer = page.getByTestId('video-container')

    // At 30% scroll, video should be at scale ~1
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 0.3)
    })
    await page.waitForTimeout(500)

    let transform = await videoContainer.evaluate((el) =>
      window.getComputedStyle(el).transform
    )
    // Transform matrix format: matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)
    let scaleMatch = transform.match(/matrix\(([^,]+)/)
    let scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1
    expect(scale).toBeGreaterThan(0.9)

    // At 60% scroll, video should be at scale ~0.65
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 1.5) // 60% of 250vh
    })
    await page.waitForTimeout(500)

    transform = await videoContainer.evaluate((el) =>
      window.getComputedStyle(el).transform
    )
    scaleMatch = transform.match(/matrix\(([^,]+)/)
    scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1
    expect(scale).toBeLessThan(0.75)
    expect(scale).toBeGreaterThan(0.55)
  })

  test('video has border-radius at 60%', async ({ page }) => {
    const videoContainer = page.getByTestId('video-container')

    // At 60% scroll
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 1.5)
    })
    await page.waitForTimeout(500)

    const borderRadius = await videoContainer.evaluate((el) =>
      window.getComputedStyle(el).borderRadius
    )
    // Should have some border-radius (close to 24px)
    expect(borderRadius).not.toBe('0px')
  })

  test('next section title visible at 100%', async ({ page }) => {
    const nextSectionTitle = page.getByTestId('next-section-title')

    // Scroll to the end
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 2.5) // 100% of 250vh
    })
    await page.waitForTimeout(500)

    // Title should be visible
    await expect(nextSectionTitle).toBeVisible()

    const opacity = await nextSectionTitle.evaluate((el) =>
      window.getComputedStyle(el).opacity
    )
    expect(parseFloat(opacity)).toBeGreaterThan(0.8)
  })

  test('respects prefers-reduced-motion', async ({ context }) => {
    // Create new context with reduced motion preference
    const reducedMotionPage = await context.newPage()
    await reducedMotionPage.emulateMedia({ reducedMotion: 'reduce' })
    await reducedMotionPage.goto('http://localhost:5173/')

    const openingContent = reducedMotionPage.getByTestId('opening-content')
    const videoContainer = reducedMotionPage.getByTestId('video-container')

    // Elements should be visible without animation
    await expect(openingContent).toBeVisible()
    await expect(videoContainer).toBeVisible()

    // Scroll should not trigger animations
    await reducedMotionPage.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 1.5)
    })
    await reducedMotionPage.waitForTimeout(500)

    // Content should remain visible (no fade out)
    const opacity = await openingContent.evaluate((el) =>
      window.getComputedStyle(el).opacity
    )
    expect(parseFloat(opacity)).toBe(1)

    await reducedMotionPage.close()
  })

  // Visual regression tests
  test('snapshot at 0%', async ({ page }) => {
    await expect(page).toHaveScreenshot('scroll-0-percent.png')
  })

  test('snapshot at 30%', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 0.75) // 30% of 250vh
    })
    await page.waitForTimeout(500)
    await expect(page).toHaveScreenshot('scroll-30-percent.png')
  })

  test('snapshot at 60%', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 1.5) // 60% of 250vh
    })
    await page.waitForTimeout(500)
    await expect(page).toHaveScreenshot('scroll-60-percent.png')
  })

  test('snapshot at 100%', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 2.5) // 100% of 250vh
    })
    await page.waitForTimeout(500)
    await expect(page).toHaveScreenshot('scroll-100-percent.png')
  })
})
