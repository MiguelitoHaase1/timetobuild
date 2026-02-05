import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { ExamplesCarouselModal } from '../ui/ExamplesCarouselModal'
import { shift } from '@/content'
import { useSectionTracking, useAnalytics } from '@/hooks'

export function Shift() {
  const sectionRef = useSectionTracking('shift')
  const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false)
  const { trackEvent, EVENTS } = useAnalytics()

  const handleOpenCarousel = () => {
    trackEvent(EVENTS.EXAMPLES_CAROUSEL_NAV, {
      action: 'open',
    })
    setIsCarouselModalOpen(true)
  }

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

          {/* Quotes side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-5xl mx-auto">
            {/* Lenny quote */}
            <div className="bg-white/95 backdrop-blur-sm border-l-4 border-coral rounded-lg p-4">
              <blockquote className="text-sm text-text-primary leading-relaxed mb-2 italic">
                "Forget that it's called Claude Code — think of it as a super-intelligent AI running locally, able to do stuff directly on your computer: organizing files, enhancing images, brainstorming domain names, summarizing calls, creating tickets, and so much more."
              </blockquote>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs font-semibold text-text-primary">Lenny Rachitsky</div>
                <div className="text-xs text-text-muted">Lenny's Newsletter • October 2025</div>
              </div>
            </div>

            {/* Gupta quote */}
            <div className="bg-white/95 backdrop-blur-sm border-l-4 border-coral rounded-lg p-4">
              <blockquote className="text-sm text-text-primary leading-relaxed mb-2 italic">
                "We're creating one of the biggest gaps in PM skillsets I've seen: while some PMs are still copying and pasting into ChatGPT, others are orchestrating multiple AI agents that work in parallel, automatically reading files, researching competitors, and building prototypes."
              </blockquote>
              <div className="flex flex-col gap-0.5">
                <div className="text-xs font-semibold text-text-primary">Aakash Gupta</div>
                <div className="text-xs text-text-muted">AI + PM Podcast Host • October 2025</div>
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
