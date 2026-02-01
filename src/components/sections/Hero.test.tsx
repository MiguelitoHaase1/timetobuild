import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/It's Time to Build/i)
  })

  it('renders CEO decision messaging', () => {
    render(<Hero />)
    expect(screen.getByText(/It is a CEO decision to enable such improvements, not an IT initiative/i)).toBeInTheDocument()
  })

  it('renders 10x engagement and efficiency message', () => {
    render(<Hero />)
    expect(screen.getByText(/10x your employee engagement and efficiency/i)).toBeInTheDocument()
  })

  it('renders contact CTA', () => {
    render(<Hero />)
    expect(screen.getByText(/Want to know more about/i)).toBeInTheDocument()
    const timeToBuildRefs = screen.getAllByText(/Time To Build/i)
    expect(timeToBuildRefs.length).toBeGreaterThan(0)
    expect(screen.getByText(/michael@timetobuild.ai/i)).toBeInTheDocument()
  })
})
