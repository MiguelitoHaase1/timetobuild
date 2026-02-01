import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /This is a CEO conversation/i })).toBeInTheDocument()
  })

  it('renders the Shift section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /The Shift/i })).toBeInTheDocument()
  })

  it('renders the Proof section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /The Proof/i })).toBeInTheDocument()
  })

  it('renders the Approach section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /The Approach/i })).toBeInTheDocument()
  })

  it('logs to console when CTA is clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    render(<App />)

    const ctaButton = screen.getByRole('button', { name: /Assess Your AI Readiness/i })
    ctaButton.click()

    expect(consoleSpy).toHaveBeenCalledWith('Assess Your AI Readiness clicked')
    consoleSpy.mockRestore()
  })
})
