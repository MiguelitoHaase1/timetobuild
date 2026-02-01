import { describe, it, expect } from 'vitest'
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
    expect(screen.getByText(/CEO-Level Strategic Commitment/i)).toBeInTheDocument()
    expect(screen.getByText(/Individual Capability Building/i)).toBeInTheDocument()
    expect(screen.getByText(/Governed Democratization/i)).toBeInTheDocument()
  })

  it('renders timeline information', () => {
    render(<Approach />)
    expect(screen.getByText(/3-6 months/i)).toBeInTheDocument()
    expect(screen.getByText(/not years/i)).toBeInTheDocument()
  })

  it('renders team size guidance', () => {
    render(<Approach />)
    expect(screen.getByText(/focused team of 5-20 people/i)).toBeInTheDocument()
  })

  it('references lean manufacturing analogy', () => {
    render(<Approach />)
    expect(screen.getByText(/lean manufacturing/i)).toBeInTheDocument()
  })
})
