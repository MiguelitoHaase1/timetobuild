import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AssessmentResults } from './AssessmentResults'
import type { AssessmentResult } from '../../types/assessment'

describe('AssessmentResults', () => {
  const mockResult: AssessmentResult = {
    score: 8,
    maxScore: 15,
    percentage: 53,
    level: 'medium',
    recommendation: 'You have foundation pieces in place.',
  }

  it('renders the score percentage', () => {
    render(<AssessmentResults result={mockResult} onEmailSubmit={vi.fn()} />)
    expect(screen.getByText(/53%/)).toBeInTheDocument()
  })

  it('renders the recommendation text', () => {
    render(<AssessmentResults result={mockResult} onEmailSubmit={vi.fn()} />)
    expect(screen.getByText(/You have foundation pieces in place/)).toBeInTheDocument()
  })

  it('renders email capture form', () => {
    render(<AssessmentResults result={mockResult} onEmailSubmit={vi.fn()} />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Get Detailed Report/i })).toBeInTheDocument()
  })

  it('calls onEmailSubmit when form is submitted with email', () => {
    const handleEmailSubmit = vi.fn()
    render(<AssessmentResults result={mockResult} onEmailSubmit={handleEmailSubmit} />)

    const emailInput = screen.getByLabelText(/email/i)
    const submitButton = screen.getByRole('button', { name: /Get Detailed Report/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)

    expect(handleEmailSubmit).toHaveBeenCalledWith('test@example.com')
  })

  it('does not call onEmailSubmit when email is invalid', () => {
    const handleEmailSubmit = vi.fn()
    render(<AssessmentResults result={mockResult} onEmailSubmit={handleEmailSubmit} />)

    const emailInput = screen.getByLabelText(/email/i)
    const submitButton = screen.getByRole('button', { name: /Get Detailed Report/i })

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.click(submitButton)

    expect(handleEmailSubmit).not.toHaveBeenCalled()
  })

  it('shows high level messaging for high scores', () => {
    const highResult: AssessmentResult = {
      ...mockResult,
      percentage: 85,
      level: 'high',
    }
    render(<AssessmentResults result={highResult} onEmailSubmit={vi.fn()} />)
    expect(screen.getByText(/Ready for Transformation/i)).toBeInTheDocument()
  })

  it('shows low level messaging for low scores', () => {
    const lowResult: AssessmentResult = {
      ...mockResult,
      percentage: 25,
      level: 'low',
    }
    render(<AssessmentResults result={lowResult} onEmailSubmit={vi.fn()} />)
    expect(screen.getByText(/Early Stage/i)).toBeInTheDocument()
  })
})
