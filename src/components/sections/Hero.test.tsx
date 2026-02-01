import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/AI Tools: A CEO Conversation/i)
  })

  it('renders the personal branding', () => {
    render(<Hero />)
    expect(screen.getByText(/Michael Haase/i)).toBeInTheDocument()
    expect(screen.getByText(/michael@timetobuild.ai/i)).toBeInTheDocument()
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

  it('renders efficiency delta messaging', () => {
    render(<Hero />)
    expect(screen.getByText(/efficiency delta/i)).toBeInTheDocument()
    expect(screen.getByText(/Not a CIO conversation/i)).toBeInTheDocument()
  })
})
