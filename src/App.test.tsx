import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/test-utils'
import App from './App'

describe('App', () => {
  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /How is your AI?/i })).toBeInTheDocument()
  })

  it('renders the Shift section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /Why it is 'Time To Build'/i })).toBeInTheDocument()
  })

  it('renders the Approach section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Approach/i })).toBeInTheDocument()
  })

  it('renders contact CTA at the bottom', () => {
    render(<App />)
    const ctaLinks = screen.getAllByText(/michael@timetobuild.ai/i)
    expect(ctaLinks.length).toBeGreaterThan(0)
  })
})
