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
            className="w-full h-full object-cover object-center md:object-[center_40%]"
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
          <div className="space-y-6 text-xl text-white leading-relaxed mb-8">
            {shift.introduction.map((paragraph, index) => (
              <p key={index} className="text-center max-w-3xl mx-auto drop-shadow-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-12">
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
