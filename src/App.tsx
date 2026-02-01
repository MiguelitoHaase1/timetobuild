import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4">Time to Build</h1>
        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
          AI Empowerment consulting - helping mid-market companies capture 10x productivity gains
        </p>
        <div className="panel max-w-md mx-auto">
          <h2 className="mb-4">Coming Soon</h2>
          <p className="text-small text-text-muted mb-6">
            This is a CEO conversation, not a CIO conversation.
          </p>
          <button
            className="btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Learn More ({count})
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
