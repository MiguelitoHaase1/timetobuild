import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Quote } from '../ui/Quote'
import { ADPResearchThumbnail } from '../ui/ADPResearchThumbnail'
import { ADPResearchModal } from '../ui/ADPResearchModal'
import { impact } from '@/content'
import { useSectionTracking } from '@/hooks'

export function Examples() {
  const sectionRef = useSectionTracking('examples')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section ref={sectionRef} className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading level={2} centered className="mb-8">
            {impact.heading}
          </SectionHeading>

          {/* Introduction paragraphs */}
          <div className="text-lg text-text-primary text-center max-w-3xl mx-auto space-y-4 mb-8">
            {impact.introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* ADP Research thumbnail */}
          <ADPResearchThumbnail onClick={() => setIsModalOpen(true)} />

          {/* Gupta quote on PM skillset gap */}
          <div className="mt-8 max-w-3xl mx-auto">
            <Quote
              quote="We're creating one of the biggest gaps in PM skillsets I've seen: while some PMs are still copying and pasting into ChatGPT, others are orchestrating multiple AI agents that work in parallel, automatically reading files, researching competitors, and building prototypes."
              author="Aakash Gupta"
              role="AI + PM Podcast Host"
              source="October 2025"
            />
          </div>
        </div>
      </section>

      {/* Full research modal */}
      <ADPResearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
