import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shift } from './Shift'

describe('Shift', () => {
  it('renders the section heading', () => {
    render(<Shift />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Why it is 'Time To Build'/i)
  })

  it('renders the introduction about building', () => {
    render(<Shift />)
    expect(screen.getByText(/they make everyone a builder/i)).toBeInTheDocument()
    expect(screen.getByText(/increased creativity, employee retention, work quality/i)).toBeInTheDocument()
  })

  it('renders the contact CTA', () => {
    render(<Shift />)
    expect(screen.getByText(/Want to know more about/i)).toBeInTheDocument()
    expect(screen.getByText(/michael@timetobuild.ai/i)).toBeInTheDocument()
    expect(screen.getByText(/Michael likes coffee/i)).toBeInTheDocument()
  })

  it('renders the Meet the Team button', () => {
    render(<Shift />)
    expect(screen.getByRole('button', { name: /Meet the Team/i })).toBeInTheDocument()
  })
})
