import { useState } from 'react'
import { contact } from '@/content'
import { TeamModal } from './TeamModal'

export function ContactCTA() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)

  return (
    <>
      <div className="panel max-w-xl mx-auto">
        <p className="text-body text-text-primary text-center">
          Want to know more about <strong>Time To Build</strong>? Write{' '}
          <a href={`mailto:${contact.email}`} className="text-coral hover:underline font-semibold">
            {contact.email}
          </a>
        </p>
        <p className="text-small text-text-muted text-center mt-3">
          <span className="italic">Psssst - Michael likes coffee ☕</span>
          <span className="mx-2">·</span>
          <button
            onClick={() => setIsTeamModalOpen(true)}
            className="text-text-secondary hover:text-coral transition-colors underline decoration-dotted"
          >
            wait, who is Michael?
          </button>
        </p>
      </div>

      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </>
  )
}
