import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Approach } from './Approach'

describe('Approach', () => {
  it('renders the section heading', () => {
    render(<Approach />)
    expect(screen.getByRole('heading', { level: 2, name: /The Approach/i })).toBeInTheDocument()
  })

  it('renders the framework description', () => {
    render(<Approach />)
    expect(screen.getByText(/CEO mandate.*bottom-up execution/i)).toBeInTheDocument()
  })

  it('renders the three essential elements', () => {
    render(<Approach />)
    expect(screen.getByText(/CEO-Level Commitment/i)).toBeInTheDocument()
    expect(screen.getByText(/Individual Capability Building/i)).toBeInTheDocument()
    expect(screen.getByText(/World-Class Tools with Guardrails/i)).toBeInTheDocument()
  })

  it('renders timeline information', () => {
    render(<Approach />)
    expect(screen.getByText(/3-6 Months, Not Years/i)).toBeInTheDocument()
  })

  it('renders team size guidance', () => {
    render(<Approach />)
    expect(screen.getByText(/5-20 people/i)).toBeInTheDocument()
  })

  it('references lean manufacturing analogy', () => {
    render(<Approach />)
    expect(screen.getByText(/lean manufacturing/i)).toBeInTheDocument()
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

  it('renders Michael Haase contact information', () => {
    render(<Approach />)

    expect(screen.getByText(/Michael Haase/i)).toBeInTheDocument()
    expect(screen.getByText(/michael@timetobuild.ai/i)).toBeInTheDocument()
    const timetobuildRefs = screen.getAllByText(/timetobuild.ai/i)
    expect(timetobuildRefs.length).toBeGreaterThan(0)
  })
})
