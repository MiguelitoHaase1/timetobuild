import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'
import { hero } from '@/content'

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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {hero.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
