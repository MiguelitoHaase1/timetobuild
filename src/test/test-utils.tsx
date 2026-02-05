/* eslint-disable react-refresh/only-export-components */
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PostHogProvider } from '@posthog/react'
import { MotionValue, motionValue } from 'framer-motion'

// Test providers wrapper
function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider apiKey="test-key">
      <BrowserRouter>{children}</BrowserRouter>
    </PostHogProvider>
  )
}

// Custom render function that includes providers
function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react'

// Override the default render with our custom one
export { customRender as render }

/**
 * Creates a controllable MotionValue for testing
 * @param initial - Initial value for the MotionValue
 * @returns MotionValue that can be manipulated in tests
 */
export function createMockMotionValue<T>(initial: T): MotionValue<T> {
  return motionValue(initial)
}

/**
 * Mocks the prefers-reduced-motion media query
 * @param enabled - Whether reduced motion should be enabled
 * @returns Cleanup function to restore original matchMedia
 */
export function mockReducedMotion(enabled: boolean): () => void {
  const originalMatchMedia = window.matchMedia

  window.matchMedia = (query: string) => ({
    matches: query === '(prefers-reduced-motion: reduce)' ? enabled : false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  })

  return () => {
    window.matchMedia = originalMatchMedia
  }
}
