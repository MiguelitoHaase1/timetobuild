import { Modal } from './Modal'
import { contact } from '@/content'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Video in progress">
      <div className="text-center py-6">
        <p className="text-lg text-text-primary mb-4">
          We have an example product of this, and a video demo is in the pipeline.
        </p>
        <p className="text-body text-text-secondary">
          If you're impatient, reach out to{' '}
          <a href={`mailto:${contact.email}`} className="text-coral hover:underline font-semibold">
            {contact.email}
          </a>{' '}
          for a demo and a cup of coffee ☕
        </p>
      </div>
    </Modal>
  )
}
