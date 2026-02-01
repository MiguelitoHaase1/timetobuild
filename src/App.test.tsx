import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /It's Time to Build/i })).toBeInTheDocument()
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

  it('renders the assessment modal button in Approach section', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /Identify Your Pilot Team/i })
    expect(button).toBeInTheDocument()
  })
})
