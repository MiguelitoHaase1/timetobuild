import { Hero, Shift, Proof, Approach, AssessmentSection } from './components/sections'

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
      <Proof />
      <Approach />
      <AssessmentSection />
    </div>
  )
}

export default App
