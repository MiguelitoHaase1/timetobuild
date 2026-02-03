import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Examples } from './Examples'

describe('Examples', () => {
  it('renders the section heading', () => {
    render(<Examples />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Impact/i)
  })

  it('renders the introduction text', () => {
    render(<Examples />)
    expect(screen.getByText(/expect the CEO to be convinced and excited within a few weeks/i)).toBeInTheDocument()
    expect(screen.getByText(/The leading indicator of a successful AI transformation is sky rocketing 'Employee Engagement'/i)).toBeInTheDocument()
  })

  it('renders capability examples', () => {
    render(<Examples />)
    expect(screen.getByText(/Presentations & Reports/i)).toBeInTheDocument()
    expect(screen.getByText(/Custom Apps/i)).toBeInTheDocument()
  })

  it('renders See Example buttons', () => {
    render(<Examples />)
    const buttons = screen.getAllByRole('button', { name: /See Example/i })
    expect(buttons).toHaveLength(4)
  })

  it('renders power user quotes with attribution', () => {
    render(<Examples />)
    expect(screen.getByText(/zero coding experience/i)).toBeInTheDocument()
    expect(screen.getByText(/month of work in 3 days/i)).toBeInTheDocument()
    expect(screen.getByText(/Sam Bowman/i)).toBeInTheDocument()
    expect(screen.getByText(/Allan/i)).toBeInTheDocument()
  })

  it('renders see more stories button', () => {
    render(<Examples />)
    expect(screen.getByRole('button', { name: /See more stories/i })).toBeInTheDocument()
  })

  it('renders the leading indicators message', () => {
    render(<Examples />)
    expect(screen.getByText(/tinkerers, hackers, and weirdos/i)).toBeInTheDocument()
  })

  it('renders the William Gibson quote', () => {
    render(<Examples />)
    expect(screen.getByText(/The future is already here/i)).toBeInTheDocument()
    expect(screen.getByText(/evenly distributed/i)).toBeInTheDocument()
  })
})
