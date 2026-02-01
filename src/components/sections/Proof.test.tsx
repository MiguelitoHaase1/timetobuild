import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Proof } from './Proof'

describe('Proof', () => {
  it('renders the section heading', () => {
    render(<Proof />)
    expect(screen.getByRole('heading', { level: 2, name: /The Proof/i })).toBeInTheDocument()
  })

  it('renders voices from the field heading', () => {
    render(<Proof />)
    expect(screen.getByText(/Voices from the Field/i)).toBeInTheDocument()
  })

  it('renders what one can build heading', () => {
    render(<Proof />)
    expect(screen.getByText(/What Anyone Can Build/i)).toBeInTheDocument()
  })

  it('renders multiple testimonials', () => {
    render(<Proof />)
    const testimonials = screen.getAllByText(/".*"/i)
    expect(testimonials.length).toBeGreaterThanOrEqual(3)
  })

  it('renders capability list items', () => {
    render(<Proof />)
    expect(screen.getByText(/Presentations/i)).toBeInTheDocument()
    expect(screen.getByText(/Data analysis/i)).toBeInTheDocument()
    expect(screen.getByText(/Apps and websites/i)).toBeInTheDocument()
  })
})
