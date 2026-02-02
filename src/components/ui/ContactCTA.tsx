import { contact } from '@/content'

export function ContactCTA() {
  return (
    <div className="panel max-w-xl mx-auto">
      <p className="text-body text-text-primary text-center">
        Want to know more about <strong>Time To Build</strong>? Write{' '}
        <a href={`mailto:${contact.email}`} className="text-coral hover:underline font-semibold">
          {contact.email}
        </a>
      </p>
      <p className="text-small text-text-muted text-center mt-3 italic">
        Psssst - Michael likes coffee ☕
      </p>
    </div>
  )
}
