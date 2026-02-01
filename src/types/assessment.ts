export interface AssessmentQuestion {
  id: string
  question: string
  options: AssessmentOption[]
}

export interface AssessmentOption {
  label: string
  value: number // Score weight for this option
  description?: string
}

export interface AssessmentAnswer {
  questionId: string
  selectedValue: number
}

export interface AssessmentResult {
  score: number
  maxScore: number
  percentage: number
  level: 'low' | 'medium' | 'high'
  recommendation: string
}
