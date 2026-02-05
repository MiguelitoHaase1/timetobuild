import { useState } from 'react'
import { impact } from '@/content'
import { useAnalytics } from '@/hooks'
import { DemoModal } from './DemoModal'

interface ExamplesCarouselModalProps {
  isOpen: boolean
  onClose: () => void
}

// Map each quote to relevant capability indices (after reordering)
const quoteCapabilityMap: Record<number, number[]> = {
  0: [0, 1], // Meeting recordings: Presentations & Reports, Custom Apps
  1: [0, 2], // PMs context: Presentations & Reports, Document Analysis
  2: [1, 3], // Sam Bowman: Custom Apps, Automated Workflows
  3: [0, 2], // Anonymous NN: Presentations & Reports, Document Analysis
  4: [0, 2], // Sam Bowman (itinerary): Presentations & Reports, Document Analysis
  5: [1, 2], // Anushki: Custom Apps, Document Analysis
}

export function ExamplesCarouselModal({ isOpen, onClose }: ExamplesCarouselModalProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const { trackEvent, EVENTS } = useAnalytics()

  // Combine all quotes, exclude last two (Lenny, Aakash) and Teresa Torres (now in Shift section)
  const originalQuotes = [...impact.powerUserQuotes, ...impact.additionalQuotes.slice(0, -2)]
  // Reorder: [5, 6, 0, 1, 2, 4] - meeting recordings first, exclude Teresa Torres (index 3)
  const allQuotes = [
    originalQuotes[5], // Meeting recordings
    originalQuotes[6], // PMs context
    originalQuotes[0], // Sam Bowman
    originalQuotes[1], // Anonymous
    originalQuotes[2], // Sam Bowman itinerary
    originalQuotes[4], // Anushki (skip Teresa Torres at index 3)
  ]

  const handleOpenDemo = (capability?: string) => {
    trackEvent(EVENTS.DEMO_MODAL_OPEN, {
      capability,
      quote_index: currentQuoteIndex,
    })
    setIsDemoModalOpen(true)
  }

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false)
  }

  const nextQuote = () => {
    trackEvent(EVENTS.EXAMPLES_CAROUSEL_NAV, {
      direction: 'next',
      from_index: currentQuoteIndex,
    })
    setCurrentQuoteIndex((prev) => (prev + 1) % allQuotes.length)
  }

  const prevQuote = () => {
    trackEvent(EVENTS.EXAMPLES_CAROUSEL_NAV, {
      direction: 'prev',
      from_index: currentQuoteIndex,
    })
    setCurrentQuoteIndex((prev) => (prev - 1 + allQuotes.length) % allQuotes.length)
  }

  const currentQuote = allQuotes[currentQuoteIndex]
  const relevantCapabilities = (quoteCapabilityMap[currentQuoteIndex] || [0, 1]).map(
    index => impact.capabilities[index]
  )

  if (!isOpen) return null

  return (
    <>
      {/* Modal backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal content */}
        <div
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-text-muted hover:text-text-primary text-2xl w-8 h-8 flex items-center justify-center z-10"
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Carousel content */}
          <div className="p-4 md:p-8">
            <h2 className="text-lg md:text-2xl font-serif font-semibold text-text-primary text-center mb-4 md:mb-6 pr-8">
              AI Empowered Employee Behavior
            </h2>

            {/* Carousel controls */}
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-cream-panel">
              <button
                onClick={prevQuote}
                className="text-coral hover:underline font-semibold text-sm md:text-base"
                aria-label="Previous quote"
              >
                ← Previous
              </button>
              <span className="text-text-muted text-xs md:text-sm">
                {currentQuoteIndex + 1} of {allQuotes.length}
              </span>
              <button
                onClick={nextQuote}
                className="text-coral hover:underline font-semibold text-sm md:text-base"
                aria-label="Next quote"
              >
                Next →
              </button>
            </div>

            {/* Quote */}
            <blockquote className="text-base md:text-xl lg:text-2xl font-serif text-text-primary leading-relaxed text-center mb-4 md:mb-6">
              "{currentQuote.quote}"
            </blockquote>
            <div className="text-center text-text-secondary mb-4 md:mb-8">
              <div className="font-semibold text-text-primary text-sm md:text-base">{currentQuote.author}</div>
              <div className="text-xs md:text-small text-text-muted">{currentQuote.role} • {currentQuote.source}</div>
            </div>

            {/* Divider */}
            <div className="border-t border-cream-panel my-4 md:my-6"></div>

            {/* Relevant capabilities */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {relevantCapabilities.map((capability, index) => (
                <button
                  key={index}
                  onClick={() => {
                    trackEvent(EVENTS.EXAMPLES_CAPABILITY_CLICK, {
                      capability: capability.title,
                      quote_index: currentQuoteIndex,
                    })
                    handleOpenDemo(capability.title)
                  }}
                  className="panel bg-cream-panel hover:bg-cream hover:shadow-md transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-coral text-center group p-2 md:p-3"
                >
                  <div className="text-2xl md:text-4xl mb-1 md:mb-2 group-hover:scale-110 transition-transform">{capability.icon}</div>
                  <div className="font-semibold text-xs md:text-sm text-text-primary mb-1 group-hover:text-coral transition-colors">
                    {capability.title}
                  </div>
                  <div className="text-xs text-text-secondary hidden md:block">{capability.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </>
  )
}
