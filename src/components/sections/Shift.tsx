import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { ContactCTA } from '../ui/ContactCTA'
import { TeamModal } from '../ui/TeamModal'
import { shift } from '@/content'
import { useSectionTracking } from '@/hooks'

export function Shift() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const sectionRef = useSectionTracking('shift')

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-cream-panel">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-12">
          {shift.heading}
        </SectionHeading>

        {/* Introduction paragraphs */}
        <div className="space-y-6 text-xl text-text-primary leading-relaxed mb-12">
          {shift.introduction.map((paragraph, index) => (
            <p key={index} className="text-center max-w-3xl mx-auto">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Final CTA */}
        <ContactCTA />
      </div>

      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </section>
  )
}
