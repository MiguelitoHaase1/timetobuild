import { Modal } from './Modal'
import { contact } from '@/content'
import { useAnalytics } from '@/hooks'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { trackEvent, EVENTS } = useAnalytics()

  const handleClose = () => {
    trackEvent(EVENTS.DEMO_MODAL_CLOSE)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Video in progress">
      <div className="text-center py-6">
        <p className="text-lg text-text-primary mb-4">
          We have an example product of this, and a video demo is in the pipeline.
        </p>
        <p className="text-body text-text-secondary">
          If you're impatient, reach out to{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-coral hover:underline font-semibold"
            onClick={() =>
              trackEvent(EVENTS.DEMO_CLICK_EMAIL, {
                location: 'demo_modal',
                email: contact.email,
              })
            }
          >
            {contact.email}
          </a>{' '}
          for a demo and a cup of coffee ☕
        </p>
      </div>
    </Modal>
  )
}
