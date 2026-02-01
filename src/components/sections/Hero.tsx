import { SectionHeading } from '../ui/SectionHeading'
import { hero, contact } from '@/content'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeading level={1} centered className="mb-8">
            {hero.heading}
          </SectionHeading>

          <div className="max-w-3xl mx-auto space-y-4 text-xl text-text-primary mb-12">
            {hero.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <p className="text-body text-text-secondary max-w-3xl mx-auto mb-12">
            {hero.callout}
          </p>

          <div className="panel max-w-xl mx-auto">
            <p className="text-body text-text-primary mb-3">
              Want to work with <strong>{contact.name}</strong>?
            </p>
            <p className="text-body text-text-primary">
              <a href={`mailto:${contact.email}`} className="text-coral hover:underline font-semibold">
                {contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
