import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/test-utils'
import { Examples } from './Examples'

describe('Examples', () => {
  it('renders the section heading', () => {
    render(<Examples />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Impact/i)
  })

  it('renders the introduction text', () => {
    render(<Examples />)
    expect(screen.getByText(/Expect the CEO to be an active AI role model/i)).toBeInTheDocument()
    expect(screen.getByText(/The leading indicator of a successful AI transformation is sky rocketing 'Employee Engagement'/i)).toBeInTheDocument()
  })

  it('renders capability examples', () => {
    render(<Examples />)
    expect(screen.getByText(/Custom Apps/i)).toBeInTheDocument()
    expect(screen.getByText(/Automated Workflows/i)).toBeInTheDocument()
  })

  it('renders capability cards', () => {
    render(<Examples />)
    expect(screen.getByText(/Custom Apps/i)).toBeInTheDocument()
    expect(screen.getByText(/Automated Workflows/i)).toBeInTheDocument()
  })

  it('renders power user quotes with attribution', () => {
    render(<Examples />)
    expect(screen.getByText(/zero coding experience/i)).toBeInTheDocument()
    expect(screen.getByText(/Sam Bowman/i)).toBeInTheDocument()
  })

  it('renders carousel navigation', () => {
    render(<Examples />)
    expect(screen.getByText(/Previous/i)).toBeInTheDocument()
    expect(screen.getByText(/Next/i)).toBeInTheDocument()
  })
})
