import { ADPResearch } from './ADPResearch'

interface ADPResearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ADPResearchModal({ isOpen, onClose }: ADPResearchModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-cream rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-cream border-b border-border-light p-4 flex justify-between items-center">
          <h3 className="font-serif text-xl font-semibold">ADP Research on AI & Engagement</h3>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <ADPResearch />
        </div>
      </div>
    </div>
  )
}
