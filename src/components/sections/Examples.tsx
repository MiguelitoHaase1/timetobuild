import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { DemoModal } from '../ui/DemoModal'
import { impact } from '@/content'

// Map each quote to relevant capability indices
const quoteCapabilityMap: Record<number, number[]> = {
  0: [1, 3], // Sam Bowman: Custom Apps, Automated Workflows
  1: [0, 2], // Anonymous NN: Presentations & Reports, Document Analysis
  2: [0, 2], // Sam Bowman (itinerary): Presentations & Reports, Document Analysis
  3: [1, 3], // Teresa Torres: Custom Apps, Automated Workflows
  4: [1, 2], // Anushki: Custom Apps, Document Analysis
  5: [2, 3], // Meeting recordings: Document Analysis, Automated Workflows
  6: [0, 2], // PMs context: Presentations & Reports, Document Analysis
  7: [1, 3], // Lenny: Custom Apps, Automated Workflows
  8: [0, 1], // Aakash: Presentations & Reports, Custom Apps
}

export function Examples() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  // Combine all quotes into one array
  const allQuotes = [...impact.powerUserQuotes, ...impact.additionalQuotes]

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true)
  }

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false)
  }

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % allQuotes.length)
  }

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + allQuotes.length) % allQuotes.length)
  }

  const currentQuote = allQuotes[currentQuoteIndex]
  const relevantCapabilities = (quoteCapabilityMap[currentQuoteIndex] || [0, 1]).map(
    index => impact.capabilities[index]
  )

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-8">
          {impact.heading}
        </SectionHeading>

        {/* Introduction paragraphs */}
        <div className="text-lg text-text-primary text-center max-w-3xl mx-auto mb-12 space-y-4">
          {impact.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Quote Carousel - with box around it and peek navigation */}
        <div className="mb-12 relative">
          <div className="max-w-3xl mx-auto panel bg-white relative overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
              style={{
                backgroundImage: 'url(/hero.png)',
                backgroundPosition: 'center center',
              }}
            />

            {/* Content with relative positioning to stay above background */}
            <div className="relative z-10">
              {/* Title at top of carousel box */}
              <h3 className="text-xl font-serif font-semibold text-text-primary text-center mb-4">
                AI empowered employee behavior
              </h3>

              {/* Carousel controls below title */}
              <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-cream-panel">
                <button
                  onClick={prevQuote}
                  className="text-coral hover:underline font-semibold"
                  aria-label="Previous quote"
                >
                  ← Previous
                </button>
                <span className="text-text-muted text-sm">
                  {currentQuoteIndex + 1} of {allQuotes.length}
                </span>
                <button
                  onClick={nextQuote}
                  className="text-coral hover:underline font-semibold"
                  aria-label="Next quote"
                >
                  Next →
                </button>
              </div>

              {/* Quote with smaller font */}
              <blockquote className="text-xl md:text-2xl font-serif text-text-primary leading-relaxed text-center mb-6">
                "{currentQuote.quote}"
              </blockquote>
              <div className="text-center text-text-secondary mb-8">
                <div className="font-semibold text-text-primary">{currentQuote.author}</div>
                <div className="text-small text-text-muted">{currentQuote.role} • {currentQuote.source}</div>
              </div>

              {/* Divider between quote and artifacts */}
              <div className="border-t border-cream-panel my-6"></div>

              {/* Relevant capabilities - clickable cards with hidden description on mobile */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {relevantCapabilities.map((capability, index) => (
                  <button
                    key={index}
                    onClick={handleOpenDemo}
                    className="panel bg-cream-panel hover:bg-cream hover:shadow-md transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-coral text-center group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{capability.icon}</div>
                    <div className="font-semibold text-sm text-text-primary mb-1 group-hover:text-coral transition-colors">
                      {capability.title}
                    </div>
                    {/* Hide description on mobile to save space */}
                    <div className="text-xs text-text-secondary hidden md:block">{capability.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Side peek buttons for desktop - show hints of adjacent cards */}
          <button
            onClick={prevQuote}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 opacity-30 hover:opacity-100 transition-opacity"
            aria-label="Previous quote"
          >
            <div className="w-16 h-32 bg-cream-panel rounded-lg shadow-sm border-2 border-transparent hover:border-coral transition-all">
              <div className="flex items-center justify-center h-full text-2xl">←</div>
            </div>
          </button>
          <button
            onClick={nextQuote}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 opacity-30 hover:opacity-100 transition-opacity"
            aria-label="Next quote"
          >
            <div className="w-16 h-32 bg-cream-panel rounded-lg shadow-sm border-2 border-transparent hover:border-coral transition-all">
              <div className="flex items-center justify-center h-full text-2xl">→</div>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-cream-panel my-12"></div>

        {/* Gibson quote */}
        <div className="text-center">
          <p className="text-xl italic text-text-primary mb-2">
            "{impact.leadingIndicators.quote}"
          </p>
          <p className="text-small text-text-muted">— {impact.leadingIndicators.quoteAuthor}</p>
        </div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </section>
  )
}
