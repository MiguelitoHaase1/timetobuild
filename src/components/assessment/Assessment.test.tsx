import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Assessment } from './Assessment'

describe('Assessment', () => {
  it('renders the first question on mount', () => {
    render(<Assessment />)
    expect(screen.getByText(/What is your current level of AI tool usage/i)).toBeInTheDocument()
  })

  it('shows progress indicator', () => {
    render(<Assessment />)
    expect(screen.getByText(/Question 1 of 5/i)).toBeInTheDocument()
  })

  it('disables next button when no answer is selected', () => {
    render(<Assessment />)
    const nextButton = screen.getByRole('button', { name: /Next/i })
    expect(nextButton).toBeDisabled()
  })

  it('enables next button when an answer is selected', () => {
    render(<Assessment />)

    const firstOption = screen.getAllByRole('radio')[0]
    fireEvent.click(firstOption)

    const nextButton = screen.getByRole('button', { name: /Next/i })
    expect(nextButton).not.toBeDisabled()
  })

  it('navigates to next question when next is clicked', () => {
    render(<Assessment />)

    // Answer first question
    const firstOption = screen.getAllByRole('radio')[0]
    fireEvent.click(firstOption)

    // Click next
    const nextButton = screen.getByRole('button', { name: /Next/i })
    fireEvent.click(nextButton)

    // Should show question 2
    expect(screen.getByText(/Question 2 of 5/i)).toBeInTheDocument()
  })

  it('shows back button on second question', () => {
    render(<Assessment />)

    // Navigate to question 2
    fireEvent.click(screen.getAllByRole('radio')[0])
    fireEvent.click(screen.getByRole('button', { name: /Next/i }))

    // Back button should be visible
    expect(screen.getByRole('button', { name: /Back/i })).toBeInTheDocument()
  })

  it('shows submit button on last question', () => {
    render(<Assessment />)

    // Navigate through all questions
    for (let i = 0; i < 4; i++) {
      fireEvent.click(screen.getAllByRole('radio')[0])
      fireEvent.click(screen.getByRole('button', { name: /Next/i }))
    }

    // On last question, should show Submit
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument()
  })

  it('calls onComplete with results when submitted', () => {
    const handleComplete = vi.fn()
    render(<Assessment onComplete={handleComplete} />)

    // Answer all questions
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getAllByRole('radio')[0])
      if (i < 4) {
        fireEvent.click(screen.getByRole('button', { name: /Next/i }))
      }
    }

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }))

    expect(handleComplete).toHaveBeenCalled()
    expect(handleComplete).toHaveBeenCalledWith(expect.objectContaining({
      score: expect.any(Number),
      maxScore: expect.any(Number),
      percentage: expect.any(Number),
      level: expect.any(String),
      recommendation: expect.any(String),
    }))
  })
})
