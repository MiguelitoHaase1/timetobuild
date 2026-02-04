import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { ContactCTA } from '../ui/ContactCTA'
import { TeamModal } from '../ui/TeamModal'
import { Button } from '../ui/Button'
import { shift } from '@/content'

export function Shift() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)

  return (
    <section className="relative py-20 px-6 bg-cream-panel overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: 'url(/after.png)',
          backgroundPosition: 'center center',
        }}
      />

      {/* Content with relative positioning to stay above background */}
      <div className="relative z-10 max-w-4xl mx-auto">
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

        {/* Meet the Team button */}
        <div className="mt-8 text-center">
          <Button onClick={() => setIsTeamModalOpen(true)} variant="secondary">
            Meet the Team
          </Button>
        </div>
      </div>

      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </section>
  )
}
