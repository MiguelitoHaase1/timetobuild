import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/test-utils'
import { Proof } from './Proof'

describe('Proof', () => {
  it('renders the section heading', () => {
    render(<Proof />)
    expect(screen.getByRole('heading', { level: 2, name: /Voices from the Field/i })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Proof />)
    expect(screen.getByText(/This isn't theoretical/i)).toBeInTheDocument()
  })

  it('renders multiple testimonials', () => {
    render(<Proof />)
    const testimonials = screen.getAllByText(/".*"/i)
    expect(testimonials.length).toBeGreaterThanOrEqual(4)
  })

  it('renders Sam Bowman testimonial', () => {
    render(<Proof />)
    expect(screen.getByText(/Zero coding experience/i)).toBeInTheDocument()
  })

  it('renders Allan testimonial', () => {
    render(<Proof />)
    expect(screen.getByText(/Did a month of work in 3 days/i)).toBeInTheDocument()
  })
})
