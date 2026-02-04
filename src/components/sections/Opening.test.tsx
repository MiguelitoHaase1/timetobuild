import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Opening } from './Opening'

describe('Opening', () => {
  it('renders the main question', () => {
    render(<Opening />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Does your AI tools empower your employees\?/i
    )
  })

  it('renders as a full-height section', () => {
    const { container } = render(<Opening />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('min-h-screen')
  })

  it('has background image', () => {
    const { container } = render(<Opening />)
    const bgImage = container.querySelector('[style*="before.jpeg"]')
    expect(bgImage).toBeInTheDocument()
  })
})
