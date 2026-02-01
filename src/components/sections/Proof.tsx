import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'

export function Proof() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading level={2} centered className="mb-6">
          Voices from the Field
        </SectionHeading>

        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          This isn't theoretical. Real people, across industries, are already capturing these gains.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
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
          <TestimonialCard
            quote="It's about being willing to try 3-4 simple commands. That's it."
            author="Teresa Torres"
            role="Product Discovery Coach"
          />
          <TestimonialCard
            quote="Completed in days what would have taken weeks of traditional development"
            author="Knowledge Worker"
            role="Financial Services"
          />
        </div>
      </div>
    </section>
  )
}
