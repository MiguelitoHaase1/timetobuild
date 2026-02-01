import { Hero, Shift, Proof, Approach } from './components/sections'

function App() {
  const handleCTAClick = () => {
    // TODO: Scroll to assessment section (Phase 3)
    console.log('Assess Your AI Readiness clicked')
  }

  return (
    <div className="min-h-screen">
      <Hero onCTAClick={handleCTAClick} />
      <Shift />
      <Proof />
      <Approach />
    </div>
  )
}

export default App
