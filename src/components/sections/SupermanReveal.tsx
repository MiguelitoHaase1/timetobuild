import { useState } from 'react'
import { Button } from '../ui/Button'
import { ExamplesCarouselModal } from '../ui/ExamplesCarouselModal'
import { useSectionTracking, useAnalytics } from '@/hooks'

export function SupermanReveal() {
  const sectionRef = useSectionTracking('superman-reveal')
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
      <section ref={sectionRef} className="pt-8 pb-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          {/* Image with button overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/superman-after.png"
              alt="Empowered employee celebrating with arms raised in Superman costume"
              className="w-full h-auto"
            />

            {/* Button overlay - at bottom with padding */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-8">
              <Button
                onClick={handleOpenCarousel}
                variant="primary"
                size="large"
                className="shadow-2xl"
              >
                Examples of AI empowered employees
              </Button>
            </div>
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
