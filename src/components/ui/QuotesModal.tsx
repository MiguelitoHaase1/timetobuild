import { Modal } from './Modal'
import { impact } from '@/content'

interface QuotesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuotesModal({ isOpen, onClose }: QuotesModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="More AI Empowerment Stories">
      <div className="py-4 space-y-6">
        {impact.additionalQuotes.map((item, index) => (
          <div key={index} className="panel bg-white">
            <blockquote className="italic text-lg text-text-primary mb-4">
              "{item.quote}"
            </blockquote>
            <div className="text-small">
              <div className="font-semibold text-text-primary">{item.author}</div>
              <div className="text-text-muted">{item.role} • {item.source}</div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  )
}
