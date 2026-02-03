import { SectionHeading } from '../ui/SectionHeading'
import { ContactCTA } from '../ui/ContactCTA'
import { hero } from '@/content'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Overlay for text readability - lighter to show image */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/50 to-cream/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16" style={{ textShadow: '0 1px 3px rgba(255,255,255,0.8)' }}>
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

          <ContactCTA />
        </div>
      </div>
    </section>
  )
}
