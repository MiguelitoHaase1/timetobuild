import { describe, it, expect } from 'vitest'
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

  it('renders team size guidance', () => {
    render(<Approach />)
    expect(screen.getByText(/5-20 people/i)).toBeInTheDocument()
  })

  it('references lean transformations', () => {
    render(<Approach />)
    expect(screen.getByText(/Lean Transformations/i)).toBeInTheDocument()
  })
})
