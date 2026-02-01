import { useState } from 'react'
import { Hero, Shift, Approach, Proof } from './components/sections'
import { AssessmentModal } from './components/assessment/AssessmentModal'

function App() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false)

  const handleOpenAssessment = () => {
    setIsAssessmentOpen(true)
  }

  const handleCloseAssessment = () => {
    setIsAssessmentOpen(false)
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Shift />
      <Approach onAssessmentClick={handleOpenAssessment} />
      <Proof />

      <AssessmentModal isOpen={isAssessmentOpen} onClose={handleCloseAssessment} />
    </div>
  )
}

export default App
