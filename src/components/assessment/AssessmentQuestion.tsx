import type { AssessmentQuestion as QuestionType } from '../../types/assessment'

interface AssessmentQuestionProps {
  question: QuestionType
  onAnswer: (value: number) => void
  selectedValue?: number
}

export function AssessmentQuestion({
  question,
  onAnswer,
  selectedValue,
}: AssessmentQuestionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif text-text-primary">{question.question}</h3>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <label
            key={`${question.id}-${index}`}
            className="flex items-start p-4 border-2 border-border-light rounded-card cursor-pointer transition-all hover:border-coral hover:bg-coral-light"
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onAnswer(option.value)}
              className="mt-1 mr-4"
            />
            <div className="flex-1">
              <div className="font-medium text-text-primary mb-1">{option.label}</div>
              {option.description && (
                <div className="text-small text-text-muted">{option.description}</div>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
