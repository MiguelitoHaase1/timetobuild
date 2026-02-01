import { useState, FormEvent } from 'react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import type { AssessmentResult } from '../../types/assessment'

interface AssessmentResultsProps {
  result: AssessmentResult
  onEmailSubmit: (email: string) => void
}

export function AssessmentResults({ result, onEmailSubmit }: AssessmentResultsProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return
    }

    onEmailSubmit(email)
    setIsSubmitted(true)
  }

  const getLevelTitle = () => {
    switch (result.level) {
      case 'high':
        return 'Ready for Transformation'
      case 'medium':
        return 'Building Momentum'
      case 'low':
        return 'Early Stage'
    }
  }

  const getLevelColor = () => {
    switch (result.level) {
      case 'high':
        return 'text-green-600'
      case 'medium':
        return 'text-coral'
      case 'low':
        return 'text-text-secondary'
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Score Display */}
      <Card className="text-center">
        <div className={`text-6xl font-bold ${getLevelColor()} mb-4`}>
          {result.percentage}%
        </div>
        <h2 className="text-h2 font-serif mb-4">{getLevelTitle()}</h2>
        <p className="text-text-secondary">{result.recommendation}</p>
      </Card>

      {/* Email Capture */}
      {!isSubmitted ? (
        <Card>
          <h3 className="text-xl font-serif mb-4">Discuss Running a Pilot</h3>
          <p className="text-text-secondary mb-6">
            Send your results to Michael Haase at timetobuild.ai to discuss the prospect of running a pilot transformation with your team.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border-light rounded-button focus:border-coral focus:outline-none"
                placeholder="you@company.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Report to Michael
            </Button>
          </form>
        </Card>
      ) : (
        <Card className="text-center bg-coral-light">
          <h3 className="text-xl font-serif text-coral mb-2">Report Sent to Michael!</h3>
          <p className="text-text-secondary">
            Michael will review your pilot team profile and reach out to discuss next steps.
          </p>
        </Card>
      )}
    </div>
  )
}
