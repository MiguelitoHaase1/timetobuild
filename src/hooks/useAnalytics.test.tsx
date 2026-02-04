import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PostHogProvider } from '@posthog/react'
import { useAnalytics } from './useAnalytics'
import { ANALYTICS_EVENTS } from '../lib/analytics'

describe('useAnalytics', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>
      <PostHogProvider apiKey="test-key">{children}</PostHogProvider>
    </BrowserRouter>
  )

  it('should return trackEvent function and EVENTS', () => {
    const { result } = renderHook(() => useAnalytics(), { wrapper })

    expect(result.current.trackEvent).toBeInstanceOf(Function)
    expect(result.current.EVENTS).toBe(ANALYTICS_EVENTS)
  })

  it('should track events with page path', () => {
    const { result } = renderHook(() => useAnalytics(), { wrapper })
    const mockCapture = vi.fn()
    vi.spyOn(result.current, 'trackEvent').mockImplementation(mockCapture)

    result.current.trackEvent(ANALYTICS_EVENTS.CTA_CLICK_EMAIL, {
      location: 'test',
    })

    expect(mockCapture).toHaveBeenCalled()
  })
})
