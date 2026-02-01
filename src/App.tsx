import { Hero, Shift, Approach, AssessmentSection, Proof } from './components/sections'

function App() {
  const handleCTAClick = () => {
    const assessmentSection = document.getElementById('assessment')
    if (assessmentSection) {
      assessmentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      <Hero onCTAClick={handleCTAClick} />
      <Shift />
      <Approach />
      <AssessmentSection />
      <Proof />
    </div>
  )
}

export default App
