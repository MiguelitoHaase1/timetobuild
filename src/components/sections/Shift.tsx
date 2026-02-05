import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { ExamplesCarouselModal } from '../ui/ExamplesCarouselModal'
import { shift } from '@/content'
import { useSectionTracking, useAnalytics } from '@/hooks'

const featuredQuotes = [
  {
    quote: "Forget that it's called Claude Code — think of it as a super-intelligent AI running locally, able to do stuff directly on your computer: organizing files, enhancing images, brainstorming domain names, summarizing calls, creating tickets, and so much more.",
    author: "Lenny Rachitsky",
    role: "Lenny's Newsletter",
    source: "October 2025",
  },
  {
    quote: "We're creating one of the biggest gaps in PM skillsets I've seen: while some PMs are still copying and pasting into ChatGPT, others are orchestrating multiple AI agents that work in parallel, automatically reading files, researching competitors, and building prototypes.",
    author: "Aakash Gupta",
    role: "AI + PM Podcast Host",
    source: "October 2025",
  },
  {
    quote: "Using Claude Code isn't about being technical. It's about being willing to try 3-4 simple commands. That's it. If you can organize files in folders and create text files, you can use Claude Code.",
    author: "Teresa Torres",
    role: "Product Talk",
    source: "November 2025",
  },
]

export function Shift() {
  const sectionRef = useSectionTracking('shift')
  const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const { trackEvent, EVENTS } = useAnalytics()

  const handleOpenCarousel = () => {
    trackEvent(EVENTS.EXAMPLES_CAROUSEL_NAV, {
      action: 'open',
    })
    setIsCarouselModalOpen(true)
  }

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % featuredQuotes.length)
  }

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + featuredQuotes.length) % featuredQuotes.length)
  }

  const currentQuote = featuredQuotes[currentQuoteIndex]

  return (
    <>
      <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/superman-after.png"
            alt="Empowered employee celebrating"
            className="w-full h-full object-cover object-[75%_center] md:object-[center_40%]"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionHeading level={2} centered className="mb-12 text-white">
            {shift.heading}
          </SectionHeading>

          {/* Introduction paragraphs - white text */}
          <div className="space-y-6 text-xl text-white leading-relaxed mb-12">
            {shift.introduction.map((paragraph, index) => (
              <p key={index} className="text-center max-w-3xl mx-auto drop-shadow-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Featured quotes carousel */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm border-l-4 border-coral rounded-lg p-5">
              <blockquote className="text-sm md:text-base text-text-primary leading-relaxed mb-3 italic">
                "{currentQuote.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm font-semibold text-text-primary">{currentQuote.author}</div>
                  <div className="text-xs text-text-muted">{currentQuote.role} • {currentQuote.source}</div>
                </div>
                {/* Carousel controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevQuote}
                    className="text-coral hover:text-coral/80 transition-colors text-lg font-bold"
                    aria-label="Previous quote"
                  >
                    ←
                  </button>
                  <span className="text-xs text-text-muted">
                    {currentQuoteIndex + 1}/{featuredQuotes.length}
                  </span>
                  <button
                    onClick={nextQuote}
                    className="text-coral hover:text-coral/80 transition-colors text-lg font-bold"
                    aria-label="Next quote"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleOpenCarousel}
              variant="primary"
              className="shadow-2xl text-base px-8 py-4"
            >
              Examples of what AI empowered employees build
            </Button>
          </div>
        </div>
      </section>

      <ExamplesCarouselModal
        isOpen={isCarouselModalOpen}
        onClose={() => setIsCarouselModalOpen(false)}
      />
    </>
  )
}
