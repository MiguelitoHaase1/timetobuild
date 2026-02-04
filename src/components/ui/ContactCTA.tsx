import { useState } from 'react'
import { contact } from '@/content'
import { TeamModal } from './TeamModal'
import { useAnalytics } from '@/hooks'

export function ContactCTA() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const { trackEvent, EVENTS } = useAnalytics()

  return (
    <>
      <div className="panel max-w-xl mx-auto">
        <p className="text-body text-text-primary text-center">
          {contact.mainText}{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-coral hover:underline font-semibold"
            onClick={() =>
              trackEvent(EVENTS.CTA_CLICK_EMAIL, {
                location: 'contact_cta',
                email: contact.email,
              })
            }
          >
            {contact.email}
          </a>
        </p>

        {/* Expandable details */}
        {showDetails && (
          <p className="text-small text-text-secondary text-center mt-3 leading-relaxed">
            {contact.expandedText}
          </p>
        )}

        {/* Toggle and team link */}
        <p className="text-small text-text-muted text-center mt-3">
          <button
            onClick={() => {
              setShowDetails(!showDetails)
              trackEvent(EVENTS.CTA_TOGGLE_DETAILS, {
                expanded: !showDetails,
              })
            }}
            className="text-text-secondary hover:text-coral transition-colors"
            aria-label={showDetails ? "Show less" : "Show more details"}
          >
            {showDetails ? '↑ Less' : '↓ More'}
          </button>
          <span className="mx-2">·</span>
          <button
            onClick={() => {
              setIsTeamModalOpen(true)
              trackEvent(EVENTS.CTA_OPEN_TEAM_MODAL)
            }}
            className="text-text-secondary hover:text-coral transition-colors underline decoration-dotted"
          >
            Meet the team
          </button>
        </p>
      </div>

      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </>
  )
}
