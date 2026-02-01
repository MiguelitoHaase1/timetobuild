import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('renders children content', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    )
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies card class by default', () => {
    const { container } = render(<Card>Content</Card>)
    const card = container.querySelector('.card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('card')
  })

  it('applies custom className alongside card class', () => {
    const { container } = render(<Card className="custom-class">Content</Card>)
    const card = container.querySelector('.card')
    expect(card).toHaveClass('card')
    expect(card).toHaveClass('custom-class')
  })

  it('renders as a div by default', () => {
    const { container } = render(<Card>Content</Card>)
    const card = container.querySelector('div')
    expect(card).toBeInTheDocument()
    expect(card?.textContent).toBe('Content')
  })
})
