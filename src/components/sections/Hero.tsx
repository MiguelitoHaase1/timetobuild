import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'

interface HeroProps {
  onCTAClick?: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeading level={1} centered className="mb-8">
            It's Time to Build
          </SectionHeading>

          <div className="max-w-3xl mx-auto space-y-4 text-xl text-text-primary mb-12">
            <p>AI, or better, best-in-class, best-of-breed AI can 10x your employee engagement and efficiency.</p>
            <p>It is a CEO decision to enable us, not an IT initiative.</p>
          </div>

          <p className="text-body text-text-secondary max-w-3xl mx-auto mb-12">
            The efficiency delta is 10x. People are doing in days what took weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="I had zero coding experience prior to using Claude. Now I'm able to build tools that save my team half a day of work every single week."
            author="Sam Bowman"
            role="Anthropic"
          />
          <TestimonialCard
            quote="I did a month of work in 3 days. The efficiency gains are real and they're here now."
            author="Allan"
            role="PM, Jabra"
          />
        </div>
      </div>
    </section>
  )
}
