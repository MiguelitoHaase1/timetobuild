import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/This is a CEO conversation/i)
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/AI Empowerment consulting/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /Assess Your AI Readiness/i })
    expect(button).toBeInTheDocument()
  })

  it('calls onCTAClick when CTA button is clicked', () => {
    const handleClick = vi.fn()
    render(<Hero onCTAClick={handleClick} />)

    const button = screen.getByRole('button', { name: /Assess Your AI Readiness/i })
    button.click()

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders the subheading about strategic inflection point', () => {
    render(<Hero />)
    expect(screen.getByText(/Not a CIO conversation/i)).toBeInTheDocument()
    expect(screen.getByText(/strategic inflection point/i)).toBeInTheDocument()
  })
})
