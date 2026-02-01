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
    id: 'team-openness',
    question: 'Which team in your organization is most open to trying new approaches?',
    options: [
      { label: 'Product/Engineering teams', value: 3, description: 'Technical teams comfortable with experimentation' },
      { label: 'Operations/Analytics teams', value: 3, description: 'Teams dealing with repetitive processes' },
      { label: 'Marketing/Sales teams', value: 2, description: 'Customer-facing teams looking for efficiency' },
      { label: 'Not sure yet', value: 1, description: 'Need to identify the right team' },
    ],
  },
  {
    id: 'pain-points',
    question: 'What recurring work consumes the most time for your teams?',
    options: [
      { label: 'Data analysis and reporting', value: 3, description: 'Pulling insights from data' },
      { label: 'Document creation and editing', value: 3, description: 'Presentations, reports, communications' },
      { label: 'Research and information gathering', value: 2, description: 'Finding and synthesizing information' },
      { label: 'Code and technical documentation', value: 3, description: 'Development and documentation work' },
    ],
  },
  {
    id: 'team-autonomy',
    question: 'How much autonomy does your ideal pilot team have to adopt new tools?',
    options: [
      { label: 'High - can choose tools freely', value: 3, description: 'Team empowered to experiment' },
      { label: 'Moderate - needs approval but gets it', value: 2, description: 'Process exists but supportive' },
      { label: 'Low - strict IT approval required', value: 1, description: 'Significant governance hurdles' },
      { label: 'Uncertain about current policies', value: 0, description: 'Need to clarify with leadership' },
    ],
  },
  {
    id: 'success-visibility',
    question: 'If this pilot succeeds, how visible would the results be?',
    options: [
      { label: 'Highly visible - impacts revenue/key metrics', value: 3, description: 'Results measurable by leadership' },
      { label: 'Visible within department', value: 2, description: 'Clear impact to team and managers' },
      { label: 'Visible to immediate team', value: 1, description: 'Benefits the core team' },
      { label: 'Uncertain how to measure success', value: 0, description: 'Need to define success criteria' },
    ],
  },
  {
    id: 'team-size',
    question: 'How many people would be in your ideal pilot team?',
    options: [
      { label: '5-10 people', value: 3, description: 'Optimal size for focused transformation' },
      { label: '10-20 people', value: 3, description: 'Good size for broader impact' },
      { label: '20+ people', value: 1, description: 'Larger team may need phased approach' },
      { label: '1-5 people', value: 2, description: 'Small focused group' },
    ],
  },
]
