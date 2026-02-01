import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shift } from './Shift'

describe('Shift', () => {
  it('renders the section heading', () => {
    render(<Shift />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Best of breed AI 10Xes employee engagement and efficiency/i)
  })

  it('renders the days what took weeks message', () => {
    render(<Shift />)
    expect(screen.getByText(/days what took weeks/i)).toBeInTheDocument()
  })

  it('renders messaging about knowledge workers', () => {
    render(<Shift />)
    expect(screen.getByText(/days what took weeks/i)).toBeInTheDocument()
  })

  it('renders the William Gibson quote', () => {
    render(<Shift />)
    expect(screen.getByText(/The future is already here/i)).toBeInTheDocument()
    expect(screen.getByText(/evenly distributed/i)).toBeInTheDocument()
  })

  it('renders at least one testimonial', () => {
    render(<Shift />)
    // Look for testimonial authors (Sam Bowman appears multiple times)
    const samBowmanElements = screen.getAllByText(/Sam Bowman/i)
    expect(samBowmanElements.length).toBeGreaterThan(0)
  })
})
