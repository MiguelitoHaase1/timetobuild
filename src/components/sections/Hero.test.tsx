import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/It's Time to Build/i)
  })

  it('renders testimonials', () => {
    render(<Hero />)
    expect(screen.getByText(/Sam Bowman/i)).toBeInTheDocument()
    expect(screen.getByText(/Allan/i)).toBeInTheDocument()
    expect(screen.getByText(/zero coding experience/i)).toBeInTheDocument()
    expect(screen.getByText(/month of work in 3 days/i)).toBeInTheDocument()
  })

  it('renders efficiency delta messaging', () => {
    render(<Hero />)
    expect(screen.getByText(/efficiency delta/i)).toBeInTheDocument()
    expect(screen.getByText(/best-in-class, best-of-breed AI/i)).toBeInTheDocument()
  })

  it('renders CEO decision messaging', () => {
    render(<Hero />)
    expect(screen.getByText(/It is a CEO decision to enable us, not an IT initiative/i)).toBeInTheDocument()
  })

  it('renders 10x engagement and efficiency message', () => {
    render(<Hero />)
    expect(screen.getByText(/10x your employee engagement and efficiency/i)).toBeInTheDocument()
  })
})
