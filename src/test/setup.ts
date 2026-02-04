import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Mock PostHog
vi.mock('posthog-js', () => ({
  default: {
    init: vi.fn(),
    capture: vi.fn(),
    opt_out_capturing: vi.fn(),
  },
}))

vi.mock('@posthog/react', () => ({
  PostHogProvider: ({ children }: { children: React.ReactNode }) => children,
  usePostHog: () => ({
    capture: vi.fn(),
  }),
}))

// Mock IntersectionObserver for section tracking
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  disconnect() {}
  unobserve() {}
  takeRecords() {
    return []
  }
  get root() {
    return null
  }
  get rootMargin() {
    return ''
  }
  get thresholds() {
    return []
  }
} as unknown as typeof IntersectionObserver

// Cleanup after each test
afterEach(() => {
  cleanup()
})
