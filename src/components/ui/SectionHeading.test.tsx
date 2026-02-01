import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders children text as h2 by default', () => {
    render(<SectionHeading>Section Title</SectionHeading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Section Title')
  })

  it('renders as h1 when level is 1', () => {
    render(<SectionHeading level={1}>Main Title</SectionHeading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Main Title')
  })

  it('renders as h2 when level is 2', () => {
    render(<SectionHeading level={2}>Subtitle</SectionHeading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<SectionHeading className="custom-heading">Title</SectionHeading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('custom-heading')
  })

  it('applies centered alignment when centered prop is true', () => {
    render(<SectionHeading centered>Centered Title</SectionHeading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-center')
  })

  it('does not apply centered class by default', () => {
    render(<SectionHeading>Not Centered</SectionHeading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).not.toHaveClass('text-center')
  })
})
