import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AssessmentQuestion } from './AssessmentQuestion'
import type { AssessmentQuestion as QuestionType } from '../../types/assessment'

describe('AssessmentQuestion', () => {
  const mockQuestion: QuestionType = {
    id: 'test-question',
    question: 'What is your favorite color?',
    options: [
      { label: 'Red', value: 1, description: 'The color of passion' },
      { label: 'Blue', value: 2, description: 'The color of calm' },
      { label: 'Green', value: 3, description: 'The color of nature' },
    ],
  }

  it('renders the question text', () => {
    render(<AssessmentQuestion question={mockQuestion} onAnswer={vi.fn()} />)
    expect(screen.getByText('What is your favorite color?')).toBeInTheDocument()
  })

  it('renders all options as radio buttons', () => {
    render(<AssessmentQuestion question={mockQuestion} onAnswer={vi.fn()} />)

    expect(screen.getByRole('radio', { name: /Red/i })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Blue/i })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Green/i })).toBeInTheDocument()
  })

  it('renders option descriptions', () => {
    render(<AssessmentQuestion question={mockQuestion} onAnswer={vi.fn()} />)

    expect(screen.getByText('The color of passion')).toBeInTheDocument()
    expect(screen.getByText('The color of calm')).toBeInTheDocument()
    expect(screen.getByText('The color of nature')).toBeInTheDocument()
  })

  it('calls onAnswer when an option is selected', () => {
    const handleAnswer = vi.fn()
    render(<AssessmentQuestion question={mockQuestion} onAnswer={handleAnswer} />)

    const redOption = screen.getByRole('radio', { name: /Red/i })
    fireEvent.click(redOption)

    expect(handleAnswer).toHaveBeenCalledWith(1)
  })

  it('pre-selects the option matching selectedValue', () => {
    render(<AssessmentQuestion question={mockQuestion} onAnswer={vi.fn()} selectedValue={2} />)

    const blueOption = screen.getByRole('radio', { name: /Blue/i }) as HTMLInputElement
    expect(blueOption.checked).toBe(true)
  })
})
