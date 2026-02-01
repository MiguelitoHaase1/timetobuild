import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shift } from './Shift'

describe('Shift', () => {
  it('renders the section heading', () => {
    render(<Shift />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Examples of what AI can do for your employees/i)
  })

  it('renders the two testimonials', () => {
    render(<Shift />)
    expect(screen.getByText(/Sam Bowman/i)).toBeInTheDocument()
    expect(screen.getByText(/Anonymous/i)).toBeInTheDocument()
  })

  it('renders capability examples', () => {
    render(<Shift />)
    expect(screen.getByText(/Presentations & Reports/i)).toBeInTheDocument()
    expect(screen.getByText(/Custom Apps/i)).toBeInTheDocument()
  })

  it('renders the William Gibson quote', () => {
    render(<Shift />)
    expect(screen.getByText(/The future is already here/i)).toBeInTheDocument()
    expect(screen.getByText(/evenly distributed/i)).toBeInTheDocument()
  })
})
