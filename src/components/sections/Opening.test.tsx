import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/test-utils'
import { Opening } from './Opening'

describe('Opening', () => {
  it('renders the main question', () => {
    render(<Opening />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Do your AI tools empower your employees\?/i
    )
  })

  it('renders the follow-up question', () => {
    render(<Opening />)
    const followUpTexts = screen.getAllByText(/or take away their superpowers\?/i)
    expect(followUpTexts.length).toBeGreaterThan(0)
  })

  it('renders as a full-height section', () => {
    const { container } = render(<Opening />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('min-h-screen')
  })

  it('has video background with fallback', () => {
    const { container } = render(<Opening />)
    // Check for video element or fallback background
    const video = container.querySelector('video')
    const fallback = container.querySelector('[style*="before-hero-poster.jpg"]')
    expect(video || fallback).toBeTruthy()
  })
})
