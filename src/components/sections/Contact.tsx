import { useState } from 'react'
import { ContactCTA } from '../ui/ContactCTA'
import { TeamModal } from '../ui/TeamModal'
import { useSectionTracking } from '@/hooks'

export function Contact() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const sectionRef = useSectionTracking('contact')

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-cream-panel">
      <div className="max-w-4xl mx-auto">
        <ContactCTA />
      </div>

      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </section>
  )
}
