import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Examples } from './Examples'

describe('Examples', () => {
  it('renders the section heading', () => {
    render(<Examples />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Examples of AI empowered employees/i)
  })

  it('renders the introduction text', () => {
    render(<Examples />)
    expect(screen.getByText(/Are you wondering what an AI empowered employee looks like/i)).toBeInTheDocument()
    expect(screen.getByText(/tip of the iceberg/i)).toBeInTheDocument()
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

  it('renders power user quotes', () => {
    render(<Examples />)
    expect(screen.getByText(/zero coding experience/i)).toBeInTheDocument()
    expect(screen.getByText(/month of work in 3 days/i)).toBeInTheDocument()
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
