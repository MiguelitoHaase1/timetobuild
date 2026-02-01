import { useState } from 'react'
import { Hero, Shift, Approach } from './components/sections'
import { AssessmentModal } from './components/assessment/AssessmentModal'
import { contact } from './content'

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
      <Approach onAssessmentClick={handleOpenAssessment} />
      <Shift />

      <div className="py-12 px-6">
        <div className="panel max-w-xl mx-auto text-center">
          <p className="text-body text-text-primary mb-3">
            Want to work with <strong>{contact.name}</strong>?
          </p>
          <p className="text-body text-text-primary">
            <a href={`mailto:${contact.email}`} className="text-coral hover:underline font-semibold">
              {contact.email}
            </a>
          </p>
        </div>
      </div>

      <AssessmentModal isOpen={isAssessmentOpen} onClose={handleCloseAssessment} />
    </div>
  )
}

export default App
