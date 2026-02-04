/* eslint-disable react-refresh/only-export-components */
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PostHogProvider } from '@posthog/react'

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
