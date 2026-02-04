import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/test-utils'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/How is your AI?/i)
  })

  it('renders AI transformation messaging', () => {
    render(<Hero />)
    expect(screen.getByText(/AI enablement of your workforce is not an IT project/i)).toBeInTheDocument()
  })

  it('renders consultancy callout', () => {
    render(<Hero />)
    expect(screen.getByText(/onboards your organization to the world's best AI tools/i)).toBeInTheDocument()
  })

  it('renders contact CTA', () => {
    render(<Hero />)
    expect(screen.getByText(/Want to know more\?/i)).toBeInTheDocument()
    const timeToBuildRefs = screen.getAllByText(/Time To Build/i)
    expect(timeToBuildRefs.length).toBeGreaterThan(0)
    expect(screen.getByText(/michael@timetobuild.ai/i)).toBeInTheDocument()
  })
})
