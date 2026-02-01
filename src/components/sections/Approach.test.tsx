import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Approach } from './Approach'

describe('Approach', () => {
  it('renders the section heading', () => {
    render(<Approach />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Approach/i })).toBeInTheDocument()
  })

  it('renders the framework description', () => {
    render(<Approach />)
    expect(screen.getByText(/world class products/i)).toBeInTheDocument()
  })

  it('renders the three essential elements', () => {
    render(<Approach />)
    expect(screen.getByText(/Availability of World-Class Tools/i)).toBeInTheDocument()
    expect(screen.getByText(/CEO-Level Engagement/i)).toBeInTheDocument()
    expect(screen.getByText(/Train-the-trainer/i)).toBeInTheDocument()
  })

  it('renders timeline information', () => {
    render(<Approach />)
    expect(screen.getByText(/3-6 Months, Not Years/i)).toBeInTheDocument()
  })

  it('renders team size guidance', () => {
    render(<Approach />)
    expect(screen.getByText(/5-20 people/i)).toBeInTheDocument()
  })

  it('references lean transformations', () => {
    render(<Approach />)
    expect(screen.getByText(/Lean Transformations/i)).toBeInTheDocument()
  })

  it('renders assessment button when onAssessmentClick is provided', () => {
    const handleClick = vi.fn()
    render(<Approach onAssessmentClick={handleClick} />)

    const button = screen.getByRole('button', { name: /Identify Your Pilot Team/i })
    expect(button).toBeInTheDocument()
  })

  it('does not render assessment button when onAssessmentClick is not provided', () => {
    render(<Approach />)

    const button = screen.queryByRole('button', { name: /Identify Your Pilot Team/i })
    expect(button).not.toBeInTheDocument()
  })

  it('renders Time To Build contact information', () => {
    render(<Approach />)

    expect(screen.getByText(/Time To Build/i)).toBeInTheDocument()
    expect(screen.getByText(/Want to know more about/i)).toBeInTheDocument()
    expect(screen.getByText(/michael@timetobuild.ai/i)).toBeInTheDocument()
  })
})
