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

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'current-usage',
    question: 'What is your current level of AI tool usage in your organization?',
    options: [
      { label: 'No usage - exploring options', value: 0, description: 'Just beginning to explore AI possibilities' },
      { label: 'Limited pilot programs', value: 1, description: 'A few team members experimenting' },
      { label: 'Department-level adoption', value: 2, description: 'One or more departments actively using AI' },
      { label: 'Organization-wide deployment', value: 3, description: 'AI tools available across the company' },
    ],
  },
  {
    id: 'executive-support',
    question: 'What level of executive sponsorship do you have for AI initiatives?',
    options: [
      { label: 'No executive awareness', value: 0, description: 'Leadership not yet engaged' },
      { label: 'Interested but not committed', value: 1, description: 'Executives curious but waiting' },
      { label: 'C-suite champion identified', value: 2, description: 'One executive actively supporting' },
      { label: 'CEO-level mandate', value: 3, description: 'Top-down strategic commitment' },
    ],
  },
  {
    id: 'blockers',
    question: 'What is your primary blocker to AI adoption?',
    options: [
      { label: 'Security and compliance concerns', value: 0, description: 'IT/legal approval challenges' },
      { label: 'Lack of skills/training', value: 1, description: 'Team needs capability building' },
      { label: 'Budget constraints', value: 0, description: 'Funding not allocated' },
      { label: 'No significant blockers', value: 3, description: 'Ready to move forward' },
    ],
  },
  {
    id: 'urgency',
    question: 'How urgent is capturing productivity gains for your business?',
    options: [
      { label: 'Exploring for future', value: 0, description: 'No immediate pressure' },
      { label: 'Important for next year', value: 1, description: 'Planning ahead' },
      { label: 'Critical for this quarter', value: 2, description: 'Active priority' },
      { label: 'Competitive survival issue', value: 3, description: 'Must act now' },
    ],
  },
  {
    id: 'team-size',
    question: 'What is your organization size?',
    options: [
      { label: 'Small team (1-50)', value: 1, description: 'Startup or small business' },
      { label: 'Mid-market (50-500)', value: 3, description: 'Growing organization' },
      { label: 'Enterprise (500+)', value: 2, description: 'Large organization' },
    ],
  },
]
