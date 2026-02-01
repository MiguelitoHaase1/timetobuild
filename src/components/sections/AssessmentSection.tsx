import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Assessment, AssessmentResults } from '../assessment'
import type { AssessmentResult } from '../../types/assessment'

export function AssessmentSection() {
  const [result, setResult] = useState<AssessmentResult | null>(null)

  const handleComplete = (assessmentResult: AssessmentResult) => {
    setResult(assessmentResult)
  }

  const handleEmailSubmit = (email: string) => {
    // TODO: Send email to backend (Phase 4)
    console.log('Email submitted:', email)
  }

  return (
    <section id="assessment" className="py-20 px-6 bg-cream-panel">
      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2} centered className="mb-4">
          AI Readiness Assessment
        </SectionHeading>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Assess where your organization stands and get personalized recommendations for capturing 10x productivity gains.
        </p>

        {!result ? (
          <Assessment onComplete={handleComplete} />
        ) : (
          <AssessmentResults result={result} onEmailSubmit={handleEmailSubmit} />
        )}
      </div>
    </section>
  )
}
