import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'

export function Shift() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2} centered className="mb-8">
          The Shift
        </SectionHeading>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-text-primary mb-6">
            The 10x gap between best-in-class AI tools and corporate-approved tools is already here.
          </p>
          <p className="text-body text-text-secondary mb-6">
            Non-technical knowledge workers are doing in days what took weeks. The bottleneck shifts from doing to deciding.
          </p>
          <p className="text-body text-text-secondary italic">
            "The future is already here. It just isn't evenly distributed yet."
          </p>
          <p className="text-small text-text-muted mt-2">— William Gibson</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <TestimonialCard
            quote="Zero coding experience... save the team half a day weekly"
            author="Sam Bowman"
            role="Anthropic"
          />
          <TestimonialCard
            quote="Did a month of work in 3 days"
            author="Allan"
            role="PM, Jabra"
          />
        </div>
      </div>
    </section>
  )
}
