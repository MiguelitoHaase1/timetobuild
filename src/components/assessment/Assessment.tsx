import { useState } from 'react'
import { AssessmentQuestion } from './AssessmentQuestion'
import { Button } from '../ui/Button'
import {
  assessmentQuestions,
  type AssessmentAnswer,
  type AssessmentResult,
} from '../../types/assessment'

interface AssessmentProps {
  onComplete?: (result: AssessmentResult) => void
}

export function Assessment({ onComplete }: AssessmentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([])

  const currentQuestion = assessmentQuestions[currentQuestionIndex]
  const totalQuestions = assessmentQuestions.length
  const isFirstQuestion = currentQuestionIndex === 0
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1

  // Get current answer for this question
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id)

  const handleAnswer = (value: number) => {
    setAnswers((prev) => {
      const existing = prev.find((a) => a.questionId === currentQuestion.id)
      if (existing) {
        return prev.map((a) =>
          a.questionId === currentQuestion.id ? { ...a, selectedValue: value } : a
        )
      }
      return [...prev, { questionId: currentQuestion.id, selectedValue: value }]
    })
  }

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const calculateResult = (): AssessmentResult => {
    const score = answers.reduce((sum, answer) => sum + answer.selectedValue, 0)
    const maxScore = assessmentQuestions.reduce((sum, q) => {
      const maxOptionValue = Math.max(...q.options.map((o) => o.value))
      return sum + maxOptionValue
    }, 0)

    const percentage = Math.round((score / maxScore) * 100)

    let level: 'low' | 'medium' | 'high'
    let recommendation: string

    if (percentage < 40) {
      level = 'low'
      recommendation =
        "Start by identifying a small team (5-10 people) with clear pain points and executive air cover. Focus on one high-visibility problem they can solve in 3-6 months."
    } else if (percentage < 70) {
      level = 'medium'
      recommendation =
        'You have a promising team identified. Ensure they have autonomy to experiment, hands-on coaching support, and a way to demonstrate results that leadership will notice.'
    } else {
      level = 'high'
      recommendation =
        "You've identified an excellent pilot team. Focus on hands-on capability building with real projects. Let results speak: when others see what this team builds, adoption will accelerate organically."
    }

    return { score, maxScore, percentage, level, recommendation }
  }

  const handleSubmit = () => {
    const result = calculateResult()
    onComplete?.(result)
  }

  const canProceed = currentAnswer !== undefined

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8 text-center">
        <p className="text-small text-text-muted">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
        <div className="w-full bg-border-light h-2 rounded-full mt-2">
          <div
            className="bg-coral h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Current question */}
      <AssessmentQuestion
        question={currentQuestion}
        onAnswer={handleAnswer}
        selectedValue={currentAnswer?.selectedValue}
      />

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        {!isFirstQuestion ? (
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
        ) : (
          <div />
        )}

        {!isLastQuestion ? (
          <Button onClick={handleNext} disabled={!canProceed}>
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!canProceed}>
            Submit
          </Button>
        )}
      </div>
    </div>
  )
}
