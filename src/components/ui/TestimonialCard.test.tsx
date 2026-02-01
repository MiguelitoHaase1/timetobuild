import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TestimonialCard } from './TestimonialCard'

describe('TestimonialCard', () => {
  const defaultProps = {
    quote: 'This is a great product!',
    author: 'John Doe',
    role: 'CEO, Example Corp',
  }

  it('renders the quote text', () => {
    render(<TestimonialCard {...defaultProps} />)
    expect(screen.getByText(/"This is a great product!"/)).toBeInTheDocument()
  })

  it('renders the author name', () => {
    render(<TestimonialCard {...defaultProps} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('renders the role', () => {
    render(<TestimonialCard {...defaultProps} />)
    expect(screen.getByText('CEO, Example Corp')).toBeInTheDocument()
  })

  it('uses Card component as base', () => {
    const { container } = render(<TestimonialCard {...defaultProps} />)
    const card = container.querySelector('.card')
    expect(card).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <TestimonialCard {...defaultProps} className="custom-testimonial" />
    )
    const card = container.querySelector('.custom-testimonial')
    expect(card).toBeInTheDocument()
  })

  it('renders without role when not provided', () => {
    render(<TestimonialCard quote="Great!" author="Jane Smith" />)
    expect(screen.getByText(/"Great!"/)).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.queryByText(/,/)).not.toBeInTheDocument()
  })
})
