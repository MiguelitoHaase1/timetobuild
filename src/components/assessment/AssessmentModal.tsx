import { useState } from 'react'
import { Modal } from '../ui/Modal'
import { Assessment } from './Assessment'
import { AssessmentResults } from './AssessmentResults'
import { type AssessmentResult } from '../../types/assessment'

interface AssessmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AssessmentModal({ isOpen, onClose }: AssessmentModalProps) {
  const [result, setResult] = useState<AssessmentResult | null>(null)

  const handleComplete = (assessmentResult: AssessmentResult) => {
    setResult(assessmentResult)
  }

  const handleReset = () => {
    setResult(null)
  }

  const handleCloseModal = () => {
    setResult(null)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      title={result ? 'Your Pilot Team Profile' : 'Identify Your Pilot Team'}
    >
      {result ? (
        <AssessmentResults result={result} onReset={handleReset} />
      ) : (
        <Assessment onComplete={handleComplete} />
      )}
    </Modal>
  )
}
