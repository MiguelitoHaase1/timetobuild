import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /AI Tools: A CEO Conversation/i })).toBeInTheDocument()
  })

  it('renders the Shift section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /The Shift/i })).toBeInTheDocument()
  })

  it('renders the Proof section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /Voices from the Field/i })).toBeInTheDocument()
  })

  it('renders the Approach section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /The Approach/i })).toBeInTheDocument()
  })

  it('scrolls to assessment section when CTA is clicked', () => {
    // Mock scrollIntoView
    const scrollIntoViewMock = vi.fn()
    Element.prototype.scrollIntoView = scrollIntoViewMock

    render(<App />)

    const ctaButton = screen.getByRole('button', { name: /Assess Your AI Readiness/i })
    ctaButton.click()

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
